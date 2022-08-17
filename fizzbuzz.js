function fizzbuzz(max) {
    for (let c = 1; c <= max; c++) {
        let mensagem = ""
        if (c % 3 === 0) {
            mensagem = mensagem + "Fizz";

        }
        if (c % 5 === 0) {
            mensagem = mensagem += "Buzz";

        }
        if (mensagem.length === 0) {
            mensagem = String(c);
        }
        console.log(mensagem);
    };
};

module.exports = fizzbuzz