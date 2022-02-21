///<reference types="cypress"/>

describe('Helpers..', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Wrap', () => {
        const obj = { nome: 'User', idade: '23' }
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        // cy.get('#formNome').then($el => {
        //     // $el.val('Fuinciona via Jquery') ==> Objeto do Jquery
        //     cy.wrap($el).type('Funciona Cypress')

        // })

        const promisse = new Promise((resove, reject) => {
            setTimeout(() => {
                resove(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => {
            console.log('Encontrei primeiro botão')
        })

        // promisse.then(num => {
        //     console.log(num)
        // })

        cy.wrap(promisse).then(ret => {
            console.log(ret)
        })

        cy.get('#buttonList').then(() => {
            console.log('Encontrei segundo botão')
        })

        cy.wrap(1).should(num => {
            return 2;
        }).should('be.equal', '2')
    })

    //Its trabalha com as propriedades do objeto
    it.only('Its..', () => {
        const obj = { nome: 'User', idade: '23' }
            //Wrap gerencia a função pelo Cypress
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = { nome: 'User', idade: '23', endereco: { rua: 'dois' } }

        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'dois')

        //Validando elemento da página
        cy.title().its('length').should('be.equal', 20)
    })

    it.only('Invoke..', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1)
        cy.wrap({ fn: soma }).invoke('fn', 2, 5).should('be.equal', 7)

        //Validando o elemento da página
        cy.get('#formNome').invoke('val', 'Text')

        //Função window controla toda a janela da página
        cy.window().invoke('alert', 'Da pra ver?')
        cy.get('#resultado').invoke('html', '<input type="button" value="Hacked"')
    })
})