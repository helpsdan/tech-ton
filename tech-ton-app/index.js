const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'})

const router = require("./routes/router")
app.use(bodyParser.json({ strict: false }));

app.use(express.json());

app.use("/", router);

app.get('/', (req, res) => {
  res.json('<H1>Tech Ton APP on air!</H1>')
})

app.listen(3000, () => {
  console.log("Tech Ton APP is now running!");
})

module.exports.handler = serverless(app);