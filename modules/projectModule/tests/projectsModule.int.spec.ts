import { IProjectRequest } from "../../../common/projectRequest";
import { container } from "../../../core/dependencyInjection.config";
import { ProjectsContext } from "../projectsModule.context";

describe('Projects Context Integration Tests', () => {

    let projectsContext: ProjectsContext;
    
    beforeAll(async () => {
        projectsContext = container.get(ProjectsContext)
    })
    afterAll(async () => {
        //
    })

    it(`Given single projectRequest id - when 'getProjects' called - expect {name: 'ProjectA', 'id: 1}`, async () => {

        const projectsRequest: IProjectRequest = {
            ids: [1]
        }
        const data = await projectsContext.getProjects(projectsRequest);

        expect(data)
            .toEqual({name: 'ProjectA', 'id': 1});
    })



})