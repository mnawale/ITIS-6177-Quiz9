const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app=express();
const port=3000;


app.use(cors());

app.get('/Hello',(req,res) => {
    res.send('Hello world!');
});

app.get('/say', (req, res) => {
    var keyword = req.query.keyword;
    console.log("testing :",keyword);
  const data = axios.get
  ('https://7mprpw4qp1.execute-api.us-east-1.amazonaws.com/default/myfunction?',{
    params: {
      keyword: keyword
    }
  })
  .then((resp) => {
    res.send(resp.data);

  });
});


app.listen(port,()=> {
    console.log(`API served at http://localhost:${port}`)
});