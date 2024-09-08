import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuario acessa o portal', () => {
    cy.visit('https://sampleapp.tricentis.com/101/')
})

And('navega para cabecalho do site', siteheader => {
    cy.navegarParaCabecalho()
})

//And('clica o botao Automovel', () => {
  //cy.clicarBotaoAutomovel()
//})