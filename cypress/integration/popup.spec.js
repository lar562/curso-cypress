///<reference types="cypress"/>

describe('Work with Pop-up', () => {

    it('Deve testar o Pop-up diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })

    it.only('Deve verificar se o pop-up foi invocada', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('Winopen')

        })
        cy.get('#buttonPopUp').click()
            //O @ indica que essa variável está dentro de um alias
        cy.get('@Winopen').should('be.called')
    })
})

describe.only('With links', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('Che popup url', () => {

        //Verifica se existe um elemento na página que contém Popup 2
        cy.contains('Popup2')
            .should('have.prop', 'href') //Verificando a propriedade do elemento
            .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
    })

    it('Should access popup dinamicamente', () => {
        cy.contains('Popup2').then($a => {
            const href = $a.prop('href')
            cy.visit(href)
            cy.get('#tfield').type('funciona')
        })
    })

    it('Should force link same page', () => {
        cy.contains('Popup2').invoke('removeAttr', 'target').click()
        cy.get('#tfield').type('funciona')
    })
})