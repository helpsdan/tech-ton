const AccessCountModel = require("../model/access.count.model")

exports.incrementAccessCount = async (req, res) => {
    try {
        await AccessCountModel.incrementAccessCount(req, res);
    } catch (error) {
        res.status(400).json({ error: 'Could not increment access count' });
    }
}

exports.getAccessCount = async (req, res) => {
    try {
        await AccessCountModel.getAccessCount(req, res);
    } catch (error) {
        res.status(400).json({ error: 'Could not increment access count' });
    }
}