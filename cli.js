//const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processsaTexto(caminhoDeArquivo) {
    const Resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log(Resultado);
}

processsaTexto(caminho);