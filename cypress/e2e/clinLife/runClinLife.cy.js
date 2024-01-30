import { enterQuestionnaire } from './codeSnippet.js';
import addCustomCommands from './customCommands.js';

addCustomCommands();

describe('Automate ClinLife Study Screener', () => {
  before(() => {
    cy.visit('/');
    
  })

  it('will enter all the answers and submit the Questionnaire ', () => {
    enterQuestionnaire();

  });

});

