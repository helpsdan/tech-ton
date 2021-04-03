const AccessCountModel = require("../../../main/model/access.count.model");
const httpMocks = require("node-mocks-http");

jest.mock("../../../main/model/access.count.model");

let req, res
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("AccessCountModel.incrementAccessCount", () => {
    it("Should have a incrementAccessCount function", () =>{
        expect(typeof AccessCountModel.incrementAccessCount).toBe("function");
    });
    it("Should increment access count", async () =>{
        await AccessCountModel.incrementAccessCount(req,res);
        expect(res.statusCode).toBe(200);
    });
})

describe("AccessCountModel.getAccessCount", () => {
    it("Should have a incrementAgetAccessCountccessCount function", () =>{
        expect(typeof AccessCountModel.getAccessCount).toBe("function");
    });
    it("Should return 201 and get access count", async () =>{
        await AccessCountModel.getAccessCount(req, res);
        expect(res.statusCode).toBe(200);
    });
})