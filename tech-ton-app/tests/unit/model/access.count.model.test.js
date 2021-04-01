const AccessCountModel = require("../../../model/access.count.model")
const httpMocks = require("node-mocks-http");

jest.mock("../../../model/access.count.model")

let req, res
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("AccessCountModel.incrementAccessCount", () => {
    it("Should have a incrementAccessCount function", () =>{

    });
    it("Should return 201 and increment access count", () =>{

    });
    it("Should handle 'Could not increment access count' and return 400", () =>{

    });
})

describe("AccessCountModel.getAccessCount", () => {
    it("Should have a incrementAgetAccessCountccessCount function", () =>{

    });
    it("Should return 201 and get access count", () =>{

    });
    it("Should handle 'Could not get access count' and return 400", () =>{

    });
})