export function enterQuestionnaire() {

    cy.acceptSiteCookies();
    cy.startStudy();
    cy.getStarted();

    //Question 1
    cy.checkRadioButton(0);
    cy.clickNextButton().wait(300);

    //Question 2
    cy.checkRadioButton(1);
    cy.clickNextButton();

    //Question 3
    cy.checkRadioButton(1);
    cy.clickNextButton();

    //Question 4
    cy.selectEverydayActivities();
    cy.clickNextButton();

    //Question 5
    cy.checkRadioButton(0);
    cy.clickNextButton();

    //Question 6
    cy.enterAge();
    cy.clickNextButton();

    //Question 7
    cy.enterHeight();
    cy.enterWeight();
    cy.clickNextButton();

    //Question 8
    cy.selectGender();
    cy.clickNextButton();

    cy.enterZipCode();
    cy.clickNextButton().wait(600);

    cy.clickConfirmButton();

    //Validate the registration is successful
    cy.contains('Bra! Du uppfyller de initiala kriterierna för denna studie.');
}