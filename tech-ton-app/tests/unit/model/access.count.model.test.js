const AccessCountModel = require("../../../model/access.count.model");
const accessCount = require("../../mock/access-count.json");
const httpMocks = require("node-mocks-http");
const countapi = require('countapi-js');

jest.mock("../../../model/access.count.model");

let req, res
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("AccessCountModel.incrementAccessCount", () => {
    it("Should have a incrementAccessCount function", () =>{
        expect(typeof AccessCountModel.incrementAccessCount).toBe("function");
    });
    it("Should return 201 and increment access count", () =>{

    });
    it("Should handle 'Could not increment access count' and return 400", () =>{

    });
})

describe("AccessCountModel.getAccessCount", () => {
    it("Should have a incrementAgetAccessCountccessCount function", () =>{
        expect(typeof AccessCountModel.getAccessCount).toBe("function");
    });
    it("Should return 201 and get access count", () =>{

    });
    it("Should handle 'Could not get access count' and return 400", () =>{

    });
})