import { resolveDependency } from './Infrastructure/dependencyInjection';

const serverFactory = resolveDependency('serverFactory');

const server = serverFactory.createServer({ mongoDbUri: 'mongodb://localhost', port: 3002 });

server
  .start()
  .then(() => console.info('Server started: ', server.getConfig()))
  .catch((reason) => console.error('Error en in server: ', reason));
