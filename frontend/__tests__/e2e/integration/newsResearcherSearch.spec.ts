describe('Search News Researcher', () => {
    it('should search with the news researcher', () => {
        cy.visit('/news-researcher');
        cy.url().should('include', '/news-researcher');
        cy.get('*[aria-label*="Search field"]').type('test');
        cy.get('*[data-test*="articles container"]').first().should('be.visible')
    });
});
