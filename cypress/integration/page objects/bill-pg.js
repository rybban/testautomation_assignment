const createButton = '#j_idt50 > a.btn.btn-primary'
const billButtonTextCreateBill = 'Create New Bill'

const billTable = '#j_idt50'

function checkIfBillPage(cy){
    cy.get(createButton).contains(billButtonTextCreateBill)
}

module.exports ={
    checkIfBillPage
}

