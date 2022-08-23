const fs = require ('fs').promises
const path = require('path')
const fizzbuzz = require("./fizzbuzz")
main()
async function main(){
    const filepath = path.join(__dirname, 'input.txt')
    const dados = await fs.readFile(filepath, 'utf8');
    await fs.appendFile("output.txt", dados+'\n')
    const max = Number(dados)
    fizzbuzz(max)
};
