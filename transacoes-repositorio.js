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
}

module.exports = TransacoesRepositorio