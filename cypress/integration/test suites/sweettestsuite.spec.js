import faker from 'faker'
import * as loginFuncs from '../page objects/index-pg'
import * as dashboardFuncs from '../page objects/dashboard-pg'
import * as bedroomFuncs from '../page objects/bedroom-pg'
import * as billFuncs from '../page objects/bill-pg'
import * as clientFuncs from '../page objects/client-pg'
import * as reservationFuncs from '../page objects/reservation-pg'
import * as userFuncs from '../page objects/user-pg'
import * as editUserFuncs from '../page objects/edit-user-pg'
import * as viewUserFuncs from '../page objects/view-user-pg'
const targets = require('../targets')


describe('such test such wow', () => {

    beforeEach(() => {
        cy.visit(targets.BASE_URL)
    })

   /*
    afterEach(() => {
        dashboardFuncs.performLogout(cy)
        loginFuncs.checkLoginPageTitle(cy)
    })
*/
    

    it('Login as normal user', () => {
        loginFuncs.checkLoginPageTitle(cy)
        loginFuncs.performLogin(cy, targets.USERNAMENORMAL, targets.PASSWORD)
        dashboardFuncs.checkDashboardPageTitle(cy)
        
    })

    it('Logout as normal user', () => {
        loginFuncs.performLogin(cy, targets.USERNAMENORMAL, targets.PASSWORD)
        dashboardFuncs.performLogout(cy)
        loginFuncs.checkLoginPageTitle(cy)
    })


    //Goes through all menu options on side menu
    it('Menu tour as normal user', () => {
        loginFuncs.performLogin(cy, targets.USERNAMENORMAL, targets.PASSWORD)
        dashboardFuncs.checkDashboardPageTitle(cy)
        cy.get(dashboardFuncs.dashboardHeader).click()
        dashboardFuncs.checkDashboardPageTitle(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonBedroom).click()
        bedroomFuncs.checkIfBedroomPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonBill).click()
        billFuncs.checkIfBillPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonClient).click()
        clientFuncs.checkIfClientPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonReservation).click()
        reservationFuncs.checkIfReservationPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonUser).click()
        userFuncs.checkIfUserPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonDashboard).click()
        dashboardFuncs.checkDashboardPageTitle(cy)
    })


    //Goes through all menu options on side menu
    it('Menu tour as admin user', () => {
        loginFuncs.performLogin(cy, targets.USERNAMEADMIN, targets.PASSWORD)
        dashboardFuncs.checkDashboardPageTitle(cy)
        cy.get(dashboardFuncs.dashboardHeader).click()
        dashboardFuncs.checkDashboardPageTitle(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonBedroom).click()
        bedroomFuncs.checkIfBedroomPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonBill).click()
        billFuncs.checkIfBillPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonClient).click()
        clientFuncs.checkIfClientPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonReservation).click()
        reservationFuncs.checkIfReservationPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonUser).click()
        userFuncs.checkIfUserPage(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonDashboard).click()
        dashboardFuncs.checkDashboardPageTitle(cy)

    })

   
    it('Edit user as normal user', () => {
        loginFuncs.performLogin(cy, targets.USERNAMENORMAL, targets.PASSWORD)
        dashboardFuncs.checkDashboardPageTitle(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonUser).click()
        userFuncs.checkIfUserPage(cy)
        userFuncs.clickEditButtonOnEntry(cy, 2)  //the number is which row to try to edit
        cy.title().should('eq', 'Access Denied!')
    })

      it('Edit user as admin user', () => {
        loginFuncs.performLogin(cy, targets.USERNAMEADMIN, targets.PASSWORD)
        dashboardFuncs.checkDashboardPageTitle(cy)
        cy.get(dashboardFuncs.dashboardMenuButtonUser).click()
        userFuncs.checkIfUserPage(cy)
        userFuncs.clickEditButtonOnEntry(cy, 1)

        editUserFuncs.checkEditUserPageTitle(cy)
        editUserFuncs.setStatusInactive(cy)
        editUserFuncs.clickSave(cy)

        viewUserFuncs.checkIfViewUserPage(cy)
        viewUserFuncs.checkIfUserIsInactive(cy)
        viewUserFuncs.clickEdit(cy)

        editUserFuncs.setStatusActive(cy)
        editUserFuncs.clickSave(cy)

        viewUserFuncs.checkIfViewUserPage(cy)
        viewUserFuncs.checkIfUserIsActive(cy)
    })

    /*
    it('First test', () => {
        cy.log('Hello worldddddd! 1')
        cy.visit("http://rbt-course:8080/hotel/faces/login/login.xhtml")
        //cy.wait(5000)
        cy.contains("Please, login!")
        cy.get('#login').clear()
        cy.get('#login').type("jp")
        cy.get('#senha').type("1010")
        cy.get('#loginBtn').click()
        //cy.wait(2000)
        cy.contains("Hotel Accommodadion")
    })

    it('secondd test', () => {
        cy.log('Hello worldddddd! 2')
        cy.get('#wrapper > nav > ul > li.dropdown > a').click()
        cy.get('#wrapper > nav > ul > li.dropdown.open > ul > li > a').click()
        cy.contains("Please, login!")
    })

    it('third', () => {
        cy.log('Hello worldddddd! 3')


    })

    it('go through list and click view if contains ', () => {
        cy.get(':nth-child(5) > a').click()
        cy.get('#j_idt50').find('td').contains('yanne_alencar@hotmail.com').click()
        cy.get('#j_idt50').find('td').contains('yanne_alencar@hotmail.com').nextAll().contains('View').click()
    })

    it('test faker', () =>{
        faker.locale = 'sv'
        var fakename = faker.name.firstName()
        cy.log(fakename)
        fakename = faker.name.firstName()
        cy.log(fakename)
        fakename = faker.name.firstName()
        cy.log(fakename)
        fakename = faker.name.firstName()
        cy.log(fakename)
    })

    */

})