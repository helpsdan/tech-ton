const AccessCountModel = require("../model/access.count.model")

exports.incrementAccessCount = async (req, res) => {
    await AccessCountModel.incrementAccessCount(req, res);
    res.status(201);
}

exports.getAccessCount = async (req, res) => {
    await AccessCountModel.getAccessCount(req, res);
}