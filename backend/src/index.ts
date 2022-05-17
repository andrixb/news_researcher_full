require('dotenv').config();
import express from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import errorHandlingMiddleware from './Infrastructure/Middleware/errorHandlingMiddleware';
import { ServerOptions } from './UserInterface/serverFactory';
import articlesRouter from './UserInterface/Routers/articlesRouter';

export interface Server {
    start(): Promise<void>;
    getConfig(): ServerOptions;
}

function createServer({ port }): Server {
    const expressServer = express();

    let httpConnection: http.Server;

    expressServer.use((req, res, next) => {
        const origin = req.get('origin');

        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma'
        );

        if (req.method === 'OPTIONS') {
            res.sendStatus(204);
        } else {
            next();
        }
    });

    expressServer.use(bodyParser.json({ limit: '50mb' }));
    expressServer.use('/articles', articlesRouter);
    expressServer.use(errorHandlingMiddleware);

    return {
        async start() {
            const serverWillStart = new Promise<void>(
                (resolve) => (httpConnection = expressServer.listen(port, () => resolve()))
            );
            await Promise.all([serverWillStart]);
        },
        getConfig() {
            return { port };
        },
    };
}

const server = createServer({ port: 3002 });

server
    .start()
    .then(() => console.info('Server started: ', server.getConfig()))
    .catch((reason) => console.error('Error en in server: ', reason));
