const express = require('express');

const port = 3333;

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    error: false,
    message: 'Acesso bem sucedido'
  })
});

app.listen(port, () => {
  console.log(`Server is runnuning at port ${port}`);
});