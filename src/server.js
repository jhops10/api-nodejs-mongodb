const express = require('express');
const AuthController = require('./controllers/authController.js')

const port = 3333;

const app = express();

app.use(express.json());

app.use('/auth', AuthController);

app.listen(port, () => {
  console.log(`Server is runnuning at port ${port}`);
});