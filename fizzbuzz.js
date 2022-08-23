function fizzbuzz(numero) {
    let mensagem = "";
    if (numero % 3 === 0) {
        mensagem = mensagem + "Fizz";
    }
    if (numero % 5 === 0) {
        mensagem = mensagem + "Buzz";
    }
    if (mensagem.length === 0) {
        mensagem = String(numero);
    }
    return mensagem;
}

module.exports = fizzbuzz