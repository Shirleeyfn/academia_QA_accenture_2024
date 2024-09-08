import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('insere a data de inicio', () => {
    cy.inserirDataInicio()

})
And('seleciona o valor do seguro', () => {
    cy.selecionaRValorSeguro()

})
And('seleciona a classificacao do merito', () => {
    cy.selecionarClassificacaoMerito()

})
And('seleciona o seguro de danos', () => {
    cy.selecionarSeguroDanos()

})
And('seleciona os produtos opcionais', () => {
    cy.selecionarProdutosOpcionais()

})
And('seleciona se quer carro de cortesia', () => {
    cy.selecionarCarroCortesia()

})

And('clica no botao {string}', (Proximo) => {
        cy.clicarBotao(Proximo)
        
})
