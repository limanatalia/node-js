const pegaArquivo = require('../index');

const arrayResult = [{
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}]

describe('pegaArquivo::', () => {
    it('deve ser uma funcao', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async() => {
        const result = await pegaArquivo('C:\Users\natal\OneDrive\Área de Trabalho\arquivos\projetos\nodejs\test\arquivos\texto1.md')
        expect(result).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async() => {
        const result = await pegaArquivo('C:\Users\natal\OneDrive\Área de Trabalho\arquivos\projetos\nodejs\test\arquivos\texto1_semlinks.md')
        expect(result).toBe('não há links');
    })
})