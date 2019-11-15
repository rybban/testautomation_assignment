const editUserPageTitle = 'Edit User'

const editUserSaveButton = '#j_idt51 > a.btn.btn-primary'

const userStatusDropdown = '#userStatusId'
const userStatusChoiceActive = '#userStatusId > option:nth-child(2)'

const userStatusChoiceInactive = '#userStatusId > option:nth-child(3)'

const userStatusChoiceInactiveText = 'INACTIVE'
const userStatusChoiceActiveText = 'ACTIVE'

function checkEditUserPageTitle(cy){
    cy.title().should('eq', editUserPageTitle)
}

function setStatusActive(cy){
    cy.get(userStatusDropdown).select(userStatusChoiceActiveText)
}

function setStatusInactive(cy){
    cy.get(userStatusDropdown).select(userStatusChoiceInactiveText)
    
}

function clickSave(cy){
    cy.get(editUserSaveButton).click()
}

module.exports = {
    setStatusActive, setStatusInactive, checkEditUserPageTitle, clickSave
}