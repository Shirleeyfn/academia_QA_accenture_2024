const BTN_PROXIMO = '#nextenterproductdata'
const INPUT_PRIMEIRONOME = '#firstname'
const INPUT_SOBRENOME = '#lastname'
const INPUT_DATANASCIMENTO = '#birthdate'
const BTN_PAIS = '#country'
const INPUT_CEP = '#zipcode'
const INPUT_OCUPACAO = '#occupation'
const BTN_PASSATEMPO = '#speeding'

Cypress.Commands.add('preencherPrimeiroNome', () => {
    cy.get(INPUT_PRIMEIRONOME).type('Shirley')

})
Cypress.Commands.add('preencherSobrenome', () => {
    cy.get(INPUT_SOBRENOME).type('Nascimento')

})
Cypress.Commands.add('preencherDataNascimento', () => {
    cy.get(INPUT_DATANASCIMENTO).type('09/07/2000')

})
Cypress.Commands.add('selecionarPais', () => {
    cy.get(BTN_PAIS).should('exist')
    cy.get(BTN_PAIS).select('Brazil') // dropdown

})
Cypress.Commands.add('preencherCep', () => {
    cy.get(INPUT_CEP).type('54730123')

})
Cypress.Commands.add('selecionarOcupacao', () => {
    cy.get(INPUT_OCUPACAO).should('exist')
    cy.get(INPUT_OCUPACAO).select('Farmer') // dropdown

})
Cypress.Commands.add('selecionarPassatempo', () => {
    cy.get(BTN_PASSATEMPO).eq(0) // checkbox

})
Cypress.Commands.add('clicarBotao', () => {
    cy.get(BTN_PROXIMO).click({ force: true })

})