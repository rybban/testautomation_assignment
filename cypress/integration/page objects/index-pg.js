const loginPageTitle = 'Hotel Accomodation - login page'
const loginLabel = 'Please, login!'
const loginTextField = '#login'
const passwordTextField = '#senha'
const loginButton = '#loginBtn'
const t4qImg = '#j_idt21'

function checkLoginPageTitle(cy){
    cy.title().should('eq', loginPageTitle)
}

function performLogin(cy, username, password){
    cy.contains(loginLabel)
    cy.get(loginTextField).clear()
    cy.get(loginTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
}


module.exports = {
    performLogin, checkLoginPageTitle
}