const addCustomCommands = () => {

    Cypress.Commands.add('acceptSiteCookies', () => {
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    });

    Cypress.Commands.add('startStudy', () => {
        cy.get('.css-18pjr84').click();
    });

    Cypress.Commands.add('getStarted', () => {
        cy.get(':nth-child(1) > .css-1ww2j1j > .css-bhikk6').click();
    });

    Cypress.Commands.add('clickNextButton', () => {
        cy.get('[data-cy="screenerButtonNext"]').click();
    });

    Cypress.Commands.add('checkRadioButton', (index) => {
        cy.get(`[data-cy="screenerRadioButton-${index}"]`).click();
    });

    Cypress.Commands.add('selectEverydayActivities', (index) => {
        cy.get('.css-1nyc4iz input[type="checkbox"]:lt(4)').check();
    });

    Cypress.Commands.add('clickConfirmButton', (index) => {
        cy.get('[data-cy="screenerPostalCodeConfirmationButton"]').click();
    });

    Cypress.Commands.add('enterAge', (index) => {
        cy.get('.css-951n7m').type('29');
    });

    Cypress.Commands.add('enterHeight', (index) => {
        cy.get('#metric').type('175');
    });

    Cypress.Commands.add('enterWeight', (index) => {
        cy.get('#us').type('62');
    });

    Cypress.Commands.add('selectGender', (index) => {
        cy.get('.gender > :nth-child(1)').click();
    });

    Cypress.Commands.add('enterZipCode', (index) => {
        cy.get('.css-951n7m').type('00100');
    });
}

export default addCustomCommands;