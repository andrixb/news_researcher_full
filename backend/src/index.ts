import express from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import mainRouter from './UserInterface/Routers/mainRouter';
import errorHandlingMiddleware from './Infrastructure/Middleware/errorHandlingMiddleware';
import { ServerOptions } from './UserInterface/serverFactory';

export interface Server {
	start(): Promise<void>;
	getConfig(): ServerOptions;
}

function createServer({ port }): Server {
const expressServer = express();
let httpConnection: http.Server;
expressServer.use(bodyParser.json({ limit: '50mb' }));
expressServer.use(mainRouter);
expressServer.use(errorHandlingMiddleware);

return {
	async start() {
	const serverWillStart = new Promise<void>((resolve) => (httpConnection = expressServer.listen(port, () => resolve())));;
	await Promise.all([
		serverWillStart,
	]);
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
