///<reference types="cypress"/>

describe('Cypress basic', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //Pausa a execução do teste
        // cy.pause()

        //Should é minha arssertiva, faz mesma coisa que o expect
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        //Outra forma de fazer a mesma ação de cima
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo') //Para não ficar repetindo o Should pode-se usar o AND

        //Pega o título da página, imprime no Console da página e o valor é inserido no input de pesquisa
        //da página

        let syncTitle

        cy.title().then(title => {
            console.log(title)
            cy.get('#formNome').type(title)

            syncTitle = title
        })

        //Pegando o valor atraz da função do Java Script. Aqui o cypress não está gerenciando
        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })


        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })

    })

    //It.only vai executar somente esse teste
    it('Should find and interact with an element', () => {
        cy.visit('https://www.w3schools.com/')

        //Clicar no botão da página
        cy.get('.w3-center > [href="/html/default.asp"]').click()
    })
})