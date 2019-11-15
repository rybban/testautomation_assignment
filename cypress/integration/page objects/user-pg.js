const createButton = '#j_idt50 > a.btn.btn-primary'
const userButtonTextCreateUser = 'Create New User'

const entryElementBase = '#j_idt50 > table > tbody > tr:nth-child('
const firstEntry = '#j_idt50 > table > tbody > tr:nth-child(1) > td:nth-child(1)'
//ind('td').contains('yanne_alencar@hotmail.com').nextAll().contains('View').click()


const userTable = '#j_idt50'

function checkIfUserPage(cy){
    cy.get(createButton).contains(userButtonTextCreateUser)
}

function clickEditButtonOnEntry(cy, entry){
    const entryElementBaseComplete = entryElementBase + entry + ')'
    
    cy.get(entryElementBaseComplete).contains('Edit').click()
    
}

module.exports ={
    checkIfUserPage, clickEditButtonOnEntry
}

