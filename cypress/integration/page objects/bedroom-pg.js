const createButton = '#j_idt50 > a.btn.btn-primary'
const bedroomButtonTextCreateBedroom = 'Create New Bedroom'

const bedroomTable = '#j_idt50'

function checkIfBedroomPage(cy){
    cy.get(createButton).contains(bedroomButtonTextCreateBedroom)
}

module.exports = {
    checkIfBedroomPage
}

