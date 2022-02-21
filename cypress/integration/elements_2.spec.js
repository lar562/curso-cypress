///<reference types="cypress"/>

describe('Elements basics', () => {

    it('Radio Button', () => {
        cy.visit('https://www.4devs.com.br/gerador_de_cpf')
        cy.get('[id="pontuacao_nao"]')
            .click()
            .should('be.checked') //Verificando se o raddionButton está marcado
        cy.get('[id="pontuacao_sim"]')
            .should('not.be.checked') //Verificando se o raddionButton NÃO está marcado

        // Dá para verificar quantos radios buttons existem na página
        cy.get('[name="pontuacao"]') //==> pega o ID do radion buton
            .should('have.length', 2) // ===> Valida a quantidade   
    })



    it('Checkbox', () => {
        cy.visit('https://www.4devs.com.br/gerador_de_numeros_aleatorios')

        cy.get('[id="chk_unico"]').click()
            .should('be.checked')
            //Para selecionar todos os checkboxs, basta pegar o name do group dos radions buttons
    })


    it.only('Combobox', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('[data-test=dataEscolaridade]').select('1graucomp')

        //Pegou a quantidade de itens que tem o combobox
        cy.get('[data-test=dataEscolaridade] option').should('have.length', 8)

        //Vai listar cada elemento que tem no combobox
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = []
            $arr.each(function() {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
        })
    })

    it.only('Combo multiplo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])

        cy.get('[data-testid=dataEsportes]').then($el => {
            //Val() vazio é para recuperar o valor anterior
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
        })

        //EQL faz a mesma coisa que o deep.equal
        cy.get('[data-testid=dataEsportes]').invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
    })
})