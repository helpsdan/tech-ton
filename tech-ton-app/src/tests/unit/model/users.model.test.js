const UserModel = require("../../../main/model/users.model");
const httpMocks = require("node-mocks-http");
const createUser = require("../../mock/create-user.json");
const createUserNameNotString = require("../../mock/create-user-name-not-string.json");
const createUserUserIdNotString = require("../../mock/create-user-user-id-not-string.json");

jest.mock("../../../main/model/users.model");

let req, res
const userId = "896fe8db-346e-4cbe-98b8-ee837872acda";
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("UserModel.createUser", () => {
    it("Should have a createUser function", () =>{
        expect(typeof UserModel.createUser).toBe("function");
    });
    it("Should return 201 and create user", () =>{

    });
    it("Should handle 'userId must be a string' and return 400", () =>{

    });
    it("Should handle 'name must be a string' and return 400", () =>{

    });
    it("Should handle 'could not create user' and return 400", () =>{

    });
})

describe("UserModel.getUser", () => {
    it("Should have a getUser function", () =>{
        expect(typeof UserModel.getUser).toBe("function");
    });
    it("Should return 200 and get user", () =>{

    });
    it("Should handle 'user not found' and return 404", () =>{

    });
    it("Should handle 'could not create user' and return 400", () =>{

    });
})