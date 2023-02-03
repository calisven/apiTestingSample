
import "reflect-metadata";

import { Container } from "inversify";
import { ProjectsContext } from "../modules/projectModule/projectsModule.context";
import { ProjectsController } from "../modules/projectModule/projectsModule.controller";
import { ProjectsService } from "../modules/projectModule/projectsModule.service";
import { DbService } from "./dbService";
import { DI_TYPES } from "./di.types";
import { Logger } from "./logger";

const container = new Container();

// More: https://stackoverflow.com/questions/46867437/in-inversify-why-to-prefer-constructor-factory-injection-over-todynamicvalue

const dbConfig = {connection: 'localhost:3609', username: 'foo', password: 'bar'};
container.bind<{}>(DI_TYPES.DB_CONFIG)
    .toConstantValue(dbConfig);

container.bind<DbService>(DbService)
    .toSelf()
    .inSingletonScope();

container.bind<Logger>(Logger)
    .toSelf()
    .inSingletonScope();

container.bind<ProjectsContext>(ProjectsContext)
    .toSelf()
    .inSingletonScope();
container.bind<ProjectsService>(ProjectsService)
    .toSelf()
    .inSingletonScope();
container.bind<ProjectsController>(ProjectsController)
    .toSelf()
    .inSingletonScope();

export { container };
