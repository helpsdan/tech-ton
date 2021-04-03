const request = require("supertest");
const app = require("../../../../index");
const createUser = require("../../mock/create-user.json");
const createUserInvalid = require("../../mock/create-user-invalid.json");

const endpoint = "/api/v1/user/"

describe("Get User" + endpoint, () => {
    it("Should get user", async () => {
        const userId = createUser.userId;
        const response = await request(app).get(endpoint+userId);
        expect(response.statusCode).toBe(200);
        expect(response.body.userId).toBe(createUser.userId);
        expect(response.body.name).toBe(createUser.name);
    });
    it("Should get user not found", async () => {
        const userId = "nonExistentUserId";
        const response = await request(app).get(endpoint+userId);
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe("User not found");
    });
});

describe("Create User" + endpoint, () => {
    it("Should create user with valid data", async () => {
        const response = await request(app).post(endpoint).send(createUser);
        expect(response.statusCode).toBe(201);
        expect(response.body.userId).toBe(createUser.userId);
        expect(response.body.name).toBe(createUser.name);
    });
    it("Should fail create user with invalid data", async () => {
        const response = await request(app).post(endpoint).send(createUserInvalid);
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("userId must be a string");
    });
});