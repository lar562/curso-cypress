///<reference types="cypress"/>

describe('Work with Iframes', () => {
    it('Deve preecher o campo de texto', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            //Contents traz os filhos dos elementos
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('Funciona?').should('have.value', 'Funciona?')

            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Alert Simples')
            })
            cy.wrap(body).find('#otherButton').click()
        })

    })

    it('Deve testar o frame diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
})