const BTN_PROXIMO = '#nextselectpriceoption'
const INPUT_DATA = '#startdate'
const INPUT_VALORSEGURO = '#insurancesum'
const INPUT_MERITO = '#meritrating'
const INPUT_SEGURODANOS = '#damageinsurance'
const BTN_PRODUTOSOPCIONAIS = '#EuroProtection'
const INPUT_CARROCORTESIA ='#courtesycar'


Cypress.Commands.add('inserirDataInicio', () => {
    cy.get(INPUT_DATA).type('10/10/2024')

})
Cypress.Commands.add('selecionaRValorSeguro', () => {
    cy.get(INPUT_VALORSEGURO).should('exist')
    cy.get(INPUT_VALORSEGURO).select('3.000.000,00') //  dropdown

})
Cypress.Commands.add('selecionarClassificacaoMerito', () => {
    cy.get(INPUT_MERITO).should('exist')
    cy.get(INPUT_MERITO).select('Bonus 1') // dropdown 

})
Cypress.Commands.add('selecionarSeguroDanos', () => {
    cy.get(INPUT_SEGURODANOS).should('exist')
    cy.get(INPUT_SEGURODANOS).select('No Coverage') // dropdown

})
Cypress.Commands.add('selecionarProdutosOpcionais', () => {
    cy.get(BTN_PRODUTOSOPCIONAIS).eq(0) // checkbox 

})
Cypress.Commands.add('selecionarCarroCortesia', () => {
    cy.get(INPUT_CARROCORTESIA).should('exist')
    cy.get(INPUT_CARROCORTESIA).select('No') // dropdown

})
    Cypress.Commands.add('clicarBotao', () => {
    cy.get(BTN_PROXIMO).click({ force: true })
    
})
