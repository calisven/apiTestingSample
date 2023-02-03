import { StatusCodes } from "http-status-codes";


export const controllerTests = [
    {
        description: `Given empty projectRequest ids - when 'getProjects' called - expect a status ${StatusCodes.BAD_REQUEST}`,
        requestParams: {ids: []},
        expectedStatus: StatusCodes.BAD_REQUEST
    },
    {
        description: `Given empty projectRequest ids - when 'getProjects' called - expect a status ${StatusCodes.OK}`,
        requestParams: {ids: [1]},
        expectedStatus: StatusCodes.OK
    },
];