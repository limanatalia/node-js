//const chalk = require('chalk');
const fs = require('fs');

function ExtraiLinks(texto) {
    const regex = /\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm;
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({
            [temp[1]]: temp[2]
        })
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(erro.code, 'não há arquivo no caminho');
}

// ASYNC AWAIT
async function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        return ExtraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

//pegaArquivo('./arquivos/texto1.md');

module.exports = pegaArquivo;