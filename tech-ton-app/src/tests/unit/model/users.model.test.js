const UserModel = require("../../../main/model/users.model");
const httpMocks = require("node-mocks-http");
const createUser = require("../../mock/create-user.json");
const createUserInvalid = require("../../mock/create-user-invalid.json");

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
    it("Should return 201 and create user", async () =>{
        req.body = createUser
        await UserModel.createUser(req,res);
        expect(res.statusCode).toBe(201);
        expect(res._getJSONData()).toStrictEqual(createUser);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("Should return 400 with invalid user", async () =>{
        req.body = createUserInvalid
        await UserModel.createUser(req,res);
        expect(res.statusCode).toBe(400);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("Should handle 'could not create user' and return 400", async () =>{
        await UserModel.createUser(req,res);
        expect(res.statusCode).toBe(400);
        expect(res._isEndCalled()).toBeTruthy();
    });
})

describe("UserModel.getUser", () => {
    it("Should have a getUser function", () =>{
        expect(typeof UserModel.getUser).toBe("function");
    });
    it("Should return 200 and get user", async () =>{
        req.params.userId = "896fe8db-346e-4cbe-98b8-ee837872acda";
        await UserModel.getUser(req, res);
        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(createUser);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("Should handle 'user not found' and return 404", async () =>{
        req.params.userId = "1";
        await UserModel.getUser(req, res);
        expect(res.statusCode).toBe(404);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("Should handle 'could not create user' and return 400", async () =>{
        await UserModel.getUser(req, res);
        expect(res.statusCode).toBe(400);
        expect(res._isEndCalled()).toBeTruthy();
    });
})