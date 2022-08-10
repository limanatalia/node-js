//const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
    throw new Error(erro.code, 'não há arquivo no caminho');
}

// ASYNC AWAIT
async function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        console.log(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

//function pegaArquivo(caminhoDoArquivo) {
//    const enconding = 'utf-8';
//    fs.promises
//        .readFile(caminhoDoArquivo, enconding)
//        .then((texto) => console.log(texto))
//        .catch((erro) => trataErro(erro))
//}

//function pegaArquivo(caminhoDoArquivo) {
//    const enconding = 'utf-8';
//    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
//        if (erro) {
//            trataErro(erro);
//        }
//        console.log(texto);
//    })
//}

pegaArquivo('./arquivos/texto1.md');