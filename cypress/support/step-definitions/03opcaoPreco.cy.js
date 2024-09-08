import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('seleciona o preco da cotacao', () => {
    cy.selecionarPrecoCotacao() // 

})

Then('clica no botao {string}', (Proximo) => {
    cy.clicarBotao(Proximo)

})
