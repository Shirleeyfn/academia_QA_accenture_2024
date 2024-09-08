const BTN_PROXIMO = '#nextsendquote'
const LBL_TABELA = '#priceplans'
const BTN_PRECOCOTACAO = '#selectsilver'

Cypress.Commands.add('selecionarPrecoCotacao', () => {
    cy.get(BTN_PRECOCOTACAO).eq(0)
    
})

//Cypress.Commands.add('clicarBotao', () => {
   // cy.get(BTN_PROXIMO).click()
    
//})
