
import { injectable } from "inversify";
import { IProject } from "../../common/project";
import { IProjectRequest } from "../../common/projectRequest";
import { Logger } from "../../core/logger";
import { ProjectsContext } from "./projectsModule.context";


@injectable()
export class ProjectsService {

    constructor(private projectsContext: ProjectsContext, private logger: Logger) {
        this.logger.debug(`Initializing - ProjectsService`);
    }

    async getProjects(projectRequest: IProjectRequest): Promise<IProject[]> {
        let projects = await this.projectsContext.getProjects(projectRequest);
        projects.forEach(p => p.name = `Project: ${p.name}`);

        return projects;
    }
}