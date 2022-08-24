class TransacoesRepositorio {
    transacoes = {
        transacoes: [
            {
                valor: 10,
                descricao: "Pastel"
            },
            {
                valor: 3,
                descricao: "Doce"
            }
        ]
    }

    listarTransacoes() {
        return this.transacoes
    }

    criarTransacao(transacao) {
        const lista = this.transacoes.transacoes
        lista.push(transacao)
    }
}

module.exports = TransacoesRepositorio