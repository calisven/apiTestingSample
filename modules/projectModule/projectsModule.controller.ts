import { StatusCodes } from "http-status-codes";
import { injectable } from "inversify";
import { IProjectRequest } from "../../common/projectRequest";
import { Logger } from "../../core/logger";
import { ProjectsService } from "./projectsModule.service";


@injectable()
export class ProjectsController {
    constructor(private logger: Logger, private projectsService: ProjectsService) {
        this.logger.debug(`Intializing ProjectsController`);
    }

    async getProjects(req, res) {

        const projectRequest: IProjectRequest = req.params;
    
        if (projectRequest.ids.length <= 0) {
            res.status = StatusCodes.BAD_REQUEST;
            res.body = `Project ID must be greater than 0`;
            return;
        }
    
        const projectData = await this.projectsService.getProjects(projectRequest);

        if (projectData.length === 0) {
            res.status = StatusCodes.NOT_FOUND;
            return;
        }

        res.body = projectData;
        res.status = StatusCodes.OK;
    }
}