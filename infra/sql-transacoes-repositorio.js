class SqlTransacoesRepositorio {
    listarTransacoes() {
        return transacoes;
    }

    criarTransacao(transacao) {
        const lista = transacoes.transacoes;
        lista.push(transacao);
    }
}

module.exports = SqlTransacoesRepositorio