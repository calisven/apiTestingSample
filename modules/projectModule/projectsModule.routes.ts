import { container } from "../../core/dependencyInjection.config";
import { ProjectsController } from "./projectsModule.controller";

const api: any = {};

const projectsController = container.get(ProjectsController);

api.get('/projects', projectsController.getProjects);