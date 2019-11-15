const createButton = '#j_idt50 > a.btn.btn-primary'
const reservationButtonTextCreateReservation = 'Create New Hotel Reservation'

const reservationTable = '#j_idt50'

function checkIfReservationPage(cy){
    cy.get(createButton).contains(reservationButtonTextCreateReservation)
}

module.exports ={
    checkIfReservationPage
}

