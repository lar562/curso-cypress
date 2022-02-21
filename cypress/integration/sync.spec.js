///<reference types="cypress"/>

describe('Esperas..', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').type('Funcionando')
    })

    it.only('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('Funcionando')
    })

    it.only('Uso do Find', () => {
        cy.get('#buttonList').click()

        cy.get('#lista li').find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Uso do Time Out', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout:1000}).should('exist')
        cy.get('#buttonList').click()
            //cy.wait(5000)
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '1')
    })

    it.only('Should versus Then', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li span').then($el => {
            console.log($el)
            expect($el).to.have.length(1)
        })

    })

})