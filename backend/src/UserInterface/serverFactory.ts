export type ServerOptions = { port: number };

export interface Server {
	start(): Promise<void>;
	getConfig(): ServerOptions;
}

export interface ServerFactory {
	createServer(options: { port: number }): Server;
}
