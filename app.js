require ('dotenv/config')
const express = require('express')

const TransacoesRepositorio = require("./infra/sql-transacoes-repositorio")

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('/transacoes', async (req, res) => {
  const repositorio = new TransacoesRepositorio()
  const transacoes = await repositorio.listarTransacoes()
  let saldo = 0
  transacoes.transacoes.forEach((transacao) => {
    if (transacao.categoria === "Despesa") {
      saldo = saldo - transacao.valor
    }
    if (transacao.categoria === "Receita") {
      saldo = saldo + transacao.valor
    }
  })
  transacoes.saldo = saldo
  res.send(transacoes)
})

app.post('/transacoes', async (req, res) => {
  const repositorio = new TransacoesRepositorio()
  const transacao = req.body
  await repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
