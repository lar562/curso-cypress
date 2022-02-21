// Todo teste começa com a função IT no cypress. Que é o escopo do teste
// Para o VSCode reconhecer essa função, basta inserir no arquivo o comando abaixo:

///<reference types="cypress"/>

it('A external test...', () => {

})

// Agrupa testes. Caso eu não queira que algum teste seja executado, basta eu inserir na linha de comando
// o método SKIP ou ONLY
describe('Should group test..', () => {
    it.skip('Internal test...', () => {

    })

    describe('This test here...', () => {
        it('Internal test...', () => {

        })

    })

    describe('This test here...', () => {
        it('Internal test...', () => {

        })

    })

    it.skip('Test...', () => {

    })

})