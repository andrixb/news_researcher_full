describe('Load News Researcher', () => {
    it('should navigate to the news researcher', () => {
        cy.visit('/news-researcher');
        cy.url().should('include', '/news-researcher');
    });
});
