const UsersController = require("../../../main/controllers/users.controller");
const UserModel = require("../../../main/model/users.model");
const httpMocks = require("node-mocks-http");
const createUser = require("../../mock/create-user.json");

jest.mock("../../../main/model/users.model")

let req, res
const userId = "896fe8db-346e-4cbe-98b8-ee837872acda";
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("UsersController.createUser", () => {
    it("Should have a createUser function", () =>{
        expect(typeof UsersController.createUser).toBe("function");
    });
    it("Should call createUser", () =>{
        UsersController.createUser(req, res);
        expect(UserModel.createUser).toBeCalled();
    });
    it("Should create user", () =>{
        UserModel.createUser.mockReturnValue(createUser);
        UsersController.createUser(req, res);
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled).toBeTruthy()
    });
})

describe("UsersController.getUser", () => {
    it("Should have a getUser function", () =>{
        expect(typeof UsersController.getUser).toBe("function");
    });
    it("Should call getUser", () =>{
        UsersController.getUser(req, res);
        expect(UserModel.getUser).toBeCalled();
    });
    it("Should get user", () =>{
        UserModel.getUser.mockReturnValue(createUser);
        UsersController.getUser(req, res);
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled).toBeTruthy()
    });
})