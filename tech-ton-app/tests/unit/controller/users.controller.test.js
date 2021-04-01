const UsersController = require("../../../controllers/users.controller")

describe("UsersController.createUser", () => {
    it("should have a createUser function", () => {
        expect(typeof UsersController.createUser).toBe("function");
    })
})