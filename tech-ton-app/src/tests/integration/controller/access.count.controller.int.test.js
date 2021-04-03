const request = require("supertest");
const app = require("../../../../index");

const endpoint = "/api/v1/access-count/";

describe("Get Access Count", () => {
    it("Should get access count", async () => {
        const response = await request(app).get(endpoint);
        expect(response.statusCode).toBe(200);
    });
});

describe("Increment Access Count", () => {
   it("Should increment access count", async () => {
        const response = await request(app).post(endpoint);
        expect(response.statusCode).toBe(201);
   });
});