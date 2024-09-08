import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('seleciona o fabricante', () => {
    cy.selecionaFabricante()
})

And('preenche o campo desempenho do motor', () => {
    cy.preencherDesempenhoMotor()
})

And('insere a data de fabricacao', () => {
    cy.preencherDataFabricacao()
})

And('seleciona o numero de assentos', () => {
    cy.selecionarNumeroAssentos()
})

And('seleciona o tipo de combustivel', () => {
    cy.selecionarTipoCombustivel()
})

And('prenche o preco de lista', () => {
    cy.preencherPrecoLista()
})

And('preenche a quilometragem anual', () => {
    cy.preencherQuilometragemAnual()
})

And('clica no botao {string}', (Proximo) => {
    cy.clicarBotao()
})