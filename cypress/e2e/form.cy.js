import pos from '../fixtures/pos.json'
import channel from '../fixtures/channel.json'

describe('Form test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5001');
    cy.intercept({
      method: 'GET',
      url: '/api/pos'
    }, pos)

    cy.intercept({
      method: 'GET',
      url: '/api/channel'
    }, channel)
  })


  it('Should render all labels', () => {
    cy.get("[data-test='text_input:label:First name'").should('contain', 'First name');
    cy.get("[data-test='text_input:label:Last name'").should('contain', 'Last name');
    cy.get("[data-test='text_input:label:Email'").should('contain', 'Email');
    cy.get("[data-test='text_input:label:Business name'").should('contain', 'Business name');
    cy.get("[data-test='text_input:label:Business size'").should('contain', 'Business size');
    cy.get("[data-test='text_input:label:Business type'").should('contain', 'Business type');
    cy.get("[data-test='text_input:label:Point of Sale used by business'").should('contain', 'Point of Sale used by business');
    cy.get("[data-test='text_input:label:Delivery Channel used by business'").should('contain', 'Delivery Channel used by business');
  })

  it('Should not submit if errors are present', () => {
    cy.get("[id='personalInfo.firstName'").type(123);
    cy.get("[id='personalInfo.lastName'").type(123);
    cy.get("[id='personalInfo.email'").type(123);
    cy.get("[id='businessInfo.businessName'").type(123);
    cy.get("[id='businessInfo.businessSize'").type('hi');
    cy.get("[id='businessInfo.businessType'").type('SMB');
    cy.get("[data-test='button:submit'").type('SMB');

    cy.get("[data-test='text_input:error:businessInfo.deliveryChannel']").should('exist')
  })

  it('Should save form state when refreshing', () => {
    cy.get("[id='personalInfo.firstName'").type(123);
    cy.reload()
    cy.wait(200)
    cy.get("[id='personalInfo.firstName']").should('exist').should('have.value', 123);
  })
  
})