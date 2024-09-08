const BTN_PROXIMO = '#nextenterinsurantdata'
const BTN_FABRICANTE = '#make'
const INPUT_DESEMPENHO_MOTOR = '#engineperformance'
const INPUT_DATA_FABRICACAO = '#dateofmanufacture'
const INPUT_NUMERO_ASSENTOS = '#numberofseats'
const BTN_TIPO_COMBUSTIVEL = '#fuel'
const INPUT_PRECO_LISTA = '#listprice'
const INPUT_QUILOMETRAGEM_ANUAL = '#annualmileage'


Cypress.Commands.add('selecionaFabricante', () => {
    cy.get(BTN_FABRICANTE).should('exist')
    cy.get(BTN_FABRICANTE).select('Honda') // dropdown
})
Cypress.Commands.add('preencherDesempenhoMotor', () => {
    cy.get(INPUT_DESEMPENHO_MOTOR).type('20')

})
Cypress.Commands.add('preencherDataFabricacao', () => {
    cy.get(INPUT_DATA_FABRICACAO).type('10/30/2010')

})
Cypress.Commands.add('selecionarNumeroAssentos', () => {
    cy.get(INPUT_NUMERO_ASSENTOS).should('exist')
    cy.get(INPUT_NUMERO_ASSENTOS).select('5') // dropdown
})
Cypress.Commands.add('selecionarTipoCombustivel', () => {
    cy.get(BTN_TIPO_COMBUSTIVEL).should('exist')
    cy.get(BTN_TIPO_COMBUSTIVEL).select('Petrol') //dropdown

})
Cypress.Commands.add('preencherPrecoLista', () => {
    cy.get(INPUT_PRECO_LISTA).type('50000')

})
Cypress.Commands.add('preencherQuilometragemAnual', () => {
    cy.get(INPUT_QUILOMETRAGEM_ANUAL).type('18000')

})
Cypress.Commands.add('clicarBotao', () => {
    cy.get(BTN_PROXIMO).click({ force: true })

})


