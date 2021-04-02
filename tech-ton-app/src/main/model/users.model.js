const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' })

let options = {}
if(process.env.IS_OFFLINE){
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000"
  }
}

const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient(options);

exports.createUser = async (req, res) => {
  const { userId, name } = req.body;
  validRequest(req, res);
  try {
    const params = {
      TableName: USERS_TABLE,
      Item: {
        userId: userId,
        name: name,
      },
    };
    await dynamoDb.put(params).promise()
    res.status(201).json({ userId, name });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Could not create user' });
  }
}

exports.getUser = async (req, res) => {
  try {
    const params = {
      TableName: USERS_TABLE,
      Key: {
        userId: req.params.userId,
      },
    }
    const result = await dynamoDb.get(params).promise()
    if (result.Item) {
      const { userId, name } = result.Item;
      res.status(200).json({ userId, name });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Could not get user' });
  }
}

function validRequest(req, res) {
  const { userId, name } = req.body;
  if (typeof userId !== 'string') {
    res.status(400).json({ error: 'userId must be a string' });
  } else if (typeof name !== 'string') {
    res.status(400).json({ error: 'name must be a string' });
  }
}