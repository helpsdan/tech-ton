const AccessCountController = require("../../../main/controllers/access.count.controller");
const AccessCountModel = require("../../../main/model/access.count.model");
const accessCount = require("../../mock/access-count.json");
const httpMocks = require("node-mocks-http");

jest.mock("../../../main/model/access.count.model")

let req, res
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("AccessCountController.incrementAccessCount", () => {
    it("Should have a incrementAccessCount function", () =>{
        expect(typeof AccessCountController.incrementAccessCount).toBe("function");
    });
    it("Should call incrementAccessCount", async () =>{
        await AccessCountController.incrementAccessCount(req, res);
        expect(AccessCountModel.incrementAccessCount).toBeCalled();
    });
    it("Should increment access count", async () =>{
        AccessCountModel.incrementAccessCount.mockReturnValue(accessCount);
        await AccessCountController.incrementAccessCount(req, res);
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled).toBeTruthy()
    });
})

describe("AccessCountController.getAccessCount", () => {
    it("Should have a incrementAgetAccessCountccessCount function", () =>{
        expect(typeof AccessCountController.getAccessCount).toBe("function");
    });
    it("Should call getAccessCount", async () =>{
        await AccessCountController.getAccessCount(req, res);
        expect(AccessCountModel.getAccessCount).toBeCalled();
    });
    it("Should get access count", async () =>{
        AccessCountModel.getAccessCount.mockReturnValue(accessCount);
        await AccessCountController.getAccessCount(req, res);
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled).toBeTruthy()
    });
})