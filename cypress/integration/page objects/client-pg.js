const createButton = '#j_idt50 > a.btn.btn-primary'
const clientButtonTextCreateClient = 'Create New Client'

const clientTable = '#j_idt50'

function checkIfClientPage(cy){
    cy.get(createButton).contains(clientButtonTextCreateClient)
}

module.exports ={
    checkIfClientPage
}

