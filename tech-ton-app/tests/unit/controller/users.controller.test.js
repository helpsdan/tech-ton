const UsersController = require("../../../controllers/users.controller")
const UserModel = require("../../../model/users.model")
const httpMocks = require("node-mocks-http");
const createUser = require("../../mock/create-user.json");
const createUserNameNotString = require("../../mock/create-user-name-not-string.json");
const createUserUserIdNotString = require("../../mock/create-user-user-id-not-string.json");

jest.mock("../../../model/users.model")

let req, res
const userId = "896fe8db-346e-4cbe-98b8-ee837872acda";
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
})

describe("UsersController.createUser", () => {
    it("Should have a createUser function", () =>{

    });
    it("Should call createUser", () =>{

    });
    it("Should handle 'userId must be a string' and return 400", async () =>{

    });
    it("Should handle 'name must be a string' and return 400", () =>{

    });
    it("Should handle 'could not create user' and return 400", () =>{

    });
})

describe("UsersController.getUser", () => {
    it("Should have a getUser function", () =>{

    });
    it("Should call getUser", () =>{

    });
    it("Should return 200 and get user", () =>{

    });
    it("Should handle 'user not found' and return 404", () =>{

    });
    it("Should handle 'could not create user' and return 400", () =>{

    });
})