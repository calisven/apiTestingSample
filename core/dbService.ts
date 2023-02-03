import { inject, injectable } from "inversify";
import { DI_TYPES } from "./di.types";
import { Logger } from "./logger";

@injectable()
export class DbService {
    
    private connectionPool: Connection[];

    constructor(private logger: Logger, @inject(DI_TYPES.DB_CONFIG) private dbConfig: any) {
        this.logger.debug('Initializing - DbService');
        (async () => {
            this.connectionPool = await this.connectToDatabase(this.dbConfig); 
        });
    }

    private async getConnectionPoolInstance(): Promise<Connection> {
        return await this.connectionPool[0]; // Obviously nonsense
    }

    public async connectToDatabase(config: any): Promise<Connection[]> {
        return Array(Math.floor(Math.random() * 10)).fill(new Connection());
    }

    public async query<T>(callbackFn: (connection: Connection) => Promise<any>): Promise<T[]> {
        const connection = await this.getConnectionPoolInstance();
        return await callbackFn(connection);
    }

    public getInParams<T>(params: T[]): string {
        return `(${params.join(', ')})`;
    }
}

// Elsewhere
export class Connection {

    async query(query: string) {
        return [{name: 'ProjectA', id: 1}, {name: 'ProjectB', id: 2}]
    }
}