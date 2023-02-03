
import { injectable } from "inversify";
import { IProject } from "../../common/project";
import { IProjectRequest } from "../../common/projectRequest";
import { DbService } from "../../core/dbService";
import { Logger } from "../../core/logger";


@injectable()
export class ProjectsContext {
    constructor(private logger: Logger, private dbService: DbService) {
        this.logger.info(`Intializing - ProjectsContext`);
    }

    async getProjects(projectsRequest: IProjectRequest): Promise<IProject[]> {
        return await this.dbService.query(async connection => {

            let where = 'WHERE 1 = 1 ';

            if (projectsRequest.ids.length) {
                where += `AND P.id IN ${this.dbService.getInParams(projectsRequest.ids)}`;
            }
            
            return await connection.query(`
                SELECT * FROM Projects P
                ${where}
            `);
        });
    }
}