const BTN_AUTOMOVEL = '#nav_automobile'
const CABECALHO_ID = '#header'


Cypress.Commands.add('navegarParaCabecalho', header => {
   cy.get(BTN_AUTOMOVEL).eq(0).click()
 })
 
//Cypress.Commands.add('ClicarBotaoAutomovel', () => {
   //cy.get(BTN_AUTOMOVEL).eq(0).click()

//})

