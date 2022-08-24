const express = require('express')

const TransacoesRepositorio = require("./transacoes-repositorio")

const app = express()
const port = 3000
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('/transacoes', (req, res) => {
  const repositorio = new TransacoesRepositorio()
  const transacoes = repositorio.listarTransacoes()
  res.send(transacoes)
})

app.post('/transacoes', (req, res) => {
  const repositorio = new TransacoesRepositorio()
  console.log(req.body)
  const transacao = {
    valor: 15,
    descricao: "pastel"
  }
  repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
