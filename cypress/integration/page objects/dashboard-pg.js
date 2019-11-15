const dashboardTitle = 'Dashboard'
const dashboardHeader = '#wrapper > nav > div.navbar-header > a'
const dashboardMenuButtonDashboard = '#side-menu > li:nth-child(2) > a'
const dashboardMenuButtonBedroom = '#side-menu > li:nth-child(3) > a'
const dashboardMenuButtonBill = '#side-menu > li:nth-child(4) > a'
const dashboardMenuButtonClient = '#side-menu > li:nth-child(5) > a'
const dashboardMenuButtonReservation = '#side-menu > li:nth-child(6) > a'
const dashboardMenuButtonUser = '#side-menu > li:nth-child(7) > a'

const logoutToggleDropdown = '#wrapper > nav > ul > li.dropdown > a'
const logoutButton = '#wrapper > nav > ul > li.dropdown.open > ul > li > a'

function checkDashboardPageTitle(cy){
    cy.title().should('eq', dashboardTitle)
}

function performLogout(cy){
    cy.get(logoutToggleDropdown).click()
    cy.get(logoutButton).click()
}

function checkIfList(cy){
    cy.title().should('eq', 'List')
}

module.exports ={
    dashboardHeader,
    dashboardMenuButtonBedroom,
    dashboardMenuButtonBill,
    dashboardMenuButtonClient,
    dashboardMenuButtonDashboard,
    dashboardMenuButtonReservation,
    dashboardMenuButtonUser,
    
    checkDashboardPageTitle, 
    performLogout,
    checkIfList
}
