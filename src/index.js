const api = require('./api')
const express = require('express');
const cors = require('cors')
const server = express();
const port = process.env.PORT || 5000;

server.use(cors());

server.use(express.json());

server.listen(port);

server.get('/', (req, res) => {
  return res.send({message: "Olá deu boa"})
})

server.get('/languages/:id&:order', async (req, res) => {
  const { id, order} = req.params;
  try {
    const { data } = await api.get(`search/repositories?q=language:${id}&order=${order}`);

    return res.send(data);
    
  } catch (error) {
    res.send({ error: error.message })
  }
})

console.log(`server is running in localhost:${port}`)