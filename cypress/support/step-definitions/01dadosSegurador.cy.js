import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('preenche o campo primeiro nome', () => {
    cy.preencherPrimeiroNome()
})

And('preenche o campo sobrenome', () => {
    cy.preencherSobrenome()
})

And('insere a data de nascimento', () => {
    cy.preencherDataNascimento()
})

And('seleciona o pais', () => {
    cy.selecionarPais()
})

And('preenche o cep', () => {
    cy.preencherCep()
})

And('seleciona a ocupacao', () => {
    cy.selecionarOcupacao()
})

And('seleciona o passatempo', () => {
    cy.selecionarPassatempo()
})

And('clica no botao {string}', (Proximo) => {
    cy.clicarBotao(Proximo)
})