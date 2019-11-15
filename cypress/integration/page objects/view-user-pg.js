const userStatusValue = '#j_idt51 > table > tbody > tr:nth-child(6) > td:nth-child(2)'
const pageTitle = 'View'
const createButton = '#j_idt51 > a:nth-child(9)'

const editButton = '#j_idt51 > a:nth-child(7)'

function clickEdit(cy){
    cy.get(editButton).click()
}

function checkIfViewUserPage(cy){
    cy.title().should('eq', pageTitle)
    cy.contains('Create New User')
}

function checkIfUserIsInactive(cy){
    cy.get(userStatusValue).contains('INACTIVE')
}

function checkIfUserIsActive(cy){
    cy.get(userStatusValue).contains(new RegExp("^" + 'ACTIVE' + "$", "g"))
   // cy.get(userStatusValue).should('eq','ACTIVE')
    
    cy.log(userStatusValue.value)
    //cy.get(userStatusValue).expect(userStatusValue).to.have.value('ACTIVE')
}

module.exports ={
    checkIfUserIsInactive, 
    checkIfUserIsActive,
    clickEdit, 
    checkIfViewUserPage
}