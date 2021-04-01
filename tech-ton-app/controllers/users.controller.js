const UsersModel = require("../model/users.model")

exports.createUser = (req, res) => {
    try {
        UsersModel.createUser(req, res);
    } catch (err) {
        res.status(400).json({ error: 'Could not create user' });
    }
}

exports.getUser = (req, res) => {
    try {
        UsersModel.getUser(req, res);
    } catch (error) {
        res.status(400).json({ error: 'Could not get user' });
    }
}