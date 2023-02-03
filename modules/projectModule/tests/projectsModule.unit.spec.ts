import { StatusCodes } from "http-status-codes";
import { Logger } from "../../../core/logger";
import { ProjectsController } from "../projectsModule.controller";
import { ProjectsService } from "../projectsModule.service";
import { controllerTests } from "./dataGenerators/projectsModule.controller.dataGenerators";

describe('Projects Controller Unit Tests', () => {
    beforeAll(async () => {
        //
    })
    afterAll(async () => {
        //
    })

    it(`Given empty projectRequest ids - when 'getProjects' called - expect a status ${StatusCodes.BAD_REQUEST}`, async () => {

        const controller = new ProjectsController({} as Logger, {} as ProjectsService);
        const req = {params: {ids: []}};
        const res = {status: undefined};
        await controller.getProjects(req, res);

        expect(res.status)
            .toEqual(StatusCodes.BAD_REQUEST);
    })

    controllerTests.forEach(testCase => {
        it(testCase.description, async () => {
            const controller = new ProjectsController({} as Logger, {} as ProjectsService);
            const req = {params: testCase.requestParams};
            const res = {status: undefined};
            await controller.getProjects(req, res);
    
            expect(res.status)
                .toEqual(testCase.expectedStatus);
        })
    });

})