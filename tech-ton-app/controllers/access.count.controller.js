const AccessCountModel = require("../model/access.count.model")

exports.incrementAccessCount = async (req, res) => {
    try {
        const accessCount = await AccessCountModel.incrementAccessCount(req, res);
        res.status(201).json(accessCount)
    } catch (error) {
        res.status(400).json({ error: 'Could not increment access count' });
    }
}

exports.getAccessCount = async (req, res) => {
    try {
        const accessCount = await AccessCountModel.getAccessCount(req, res);
        res.status(201).json(accessCount)
    } catch (error) {
        res.status(400).json({ error: 'Could not increment access count' });
    }
}