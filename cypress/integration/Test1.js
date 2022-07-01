/// <reference types="Cypress" />

describe('My First Test Suite', function(){
    
    it('My First Test Case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.wait(2000)
        cy.get(".search-keyword").type("ca")
        cy.get(".product").should('have.length',4)
    });
});