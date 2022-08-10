//const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaURLs = require('./http-validacao');

const caminho = process.argv;

async function processsaTexto(caminhoDeArquivo) {
    const Resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log('links validados'), await validaURLs(Resultado);
    } else {
        console.log('links validados'), Resultado;
    }
    console.log(Resultado);
}

processsaTexto(caminho);