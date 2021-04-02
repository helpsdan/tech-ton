const UsersModel = require("../model/users.model")

exports.createUser = (req, res) => {
    UsersModel.createUser(req, res);
    res.status(201)
}

exports.getUser = (req, res) => {
    UsersModel.getUser(req, res);
}