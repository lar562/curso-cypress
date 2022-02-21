///<reference types="cypress"/>

describe('Work if basic elements', () => {

    //Hooks - Vai executar antes de todos os testes
    before(() => {
        cy.visit('https://www.w3schools.com/')
    })

    //Esse é executado antes de cada teste
    // beforeEach(() => {
    //     cy.reload() //Recarrega a tela
    // })

    it('Text', () => {
        cy.get('body').should('contain', 'Learn')
        cy.get('.learntocodeh1').should('contain', 'Learn')
            //Have.text precisa passar exatamente o texto
        cy.get('.learntocodeh1').should('have.text', 'Learn to Code')
    })

    //Trabalhando com testes em links
    it('Links', () => {
        cy.get('h4 > a').click()
            //Depois que eu cliquei no link valido se a URL apresentada é a mesma passada como parâmetro 
            //no Should
        cy.url().should('be.equal', 'https://www.w3schools.com/where_to_start.asp')
    })

    //Campos de input de texto
    it.only('Text Fields', () => {
        //Método para escrever alguma informação dentro do campo é o TYPE
        //O backspace apaga a informação que foi inserida no campo, caractere por caractere
        //O clear vai limpar tudo que foi inserido no campo
        cy.get('#search2').type('HTML 125345{backspace}{backspace}')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 }) //Selectall tbm exclui
            // cy.get('#search2').should('have.value', 'HTML') //Value pega o valor inserido no input

        //Sempre que tiver um elemento #nome\:nome, colocar mais uma barra #nome\\:nome
    })

})