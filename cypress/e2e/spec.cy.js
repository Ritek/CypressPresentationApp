describe('example webpage', () => {

    function getElementsText($elems) {
        return [...$elems].map(x => x.innerText);
    }

    beforeEach(() => {
        cy.intercept(
            'GET', 'https://jsonplaceholder.typicode.com/posts/1/comments',
            { fixture: 'comments.json' }
        ).as('comments');

        cy.visit('http://127.0.0.1:5500/webpage.html');

        cy.window().its('console').then((console) => {
            cy.spy(console, 'log').as('log');
            cy.spy(console, 'error').as('error');
        })

        cy.contains('div[class="card-header"]', 'Section 1').parent().as('section1');
        cy.contains('div[class="card-header"]', 'Section 2').parent().as('section2');
        cy.contains('div[class="card-header"]', 'Section 3').parent().as('section3');
    });

    it('should have Section 1 with expected elements', () => {
        const elements = ['elem 1', 'elem 2', 'elem 3', 'elem 4'];

        cy.get('@section1').find('span').then($elems => {
            return [...$elems].map(x => x.innerText);
        }).as('span-array');

        cy.get('@span-array').should('deep.equal', elements);

        cy.get('@section1').find('button').click();

        cy.get('@span-array').should('deep.equal', elements);
        cy.get('@section1').find('span').then(getElementsText).should('deep.equal', ['elem 1', 'elem 2', 'elem 4']);
    });

    it('should have Section 2 with paragraphs', () => {
        cy.get('@section2').find('p').should('have.length', 5);
    }); 

    it('should have Section 2 links', () => {
        cy.get('@section2').find('a').invoke('attr', 'href').should('contain', 'http://127.0.0.1:5500/index.html');
        cy.get('@section2').find('button').click();

        cy.url().should('include', 'http://127.0.0.1:5500/index.html');
    });

    it('should have Section 3 with form', () => {
        cy.get('@section3').find('form').within(form => {
            cy.contains('button', 'Submit').should('be.disabled');

            cy.get('input[type="text"]').type('123');
            cy.get('input[type="password"]').type('456');
            cy.get('input[type="number"]').should('not.be.disabled').should('have.attr', 'readonly', 'readonly');
            cy.get('select > option').eq(1).then(element => cy.get('select').select(element.val()));

            cy.get('button').should('not.be.disabled').click();
            cy.get('@log').invoke('getCalls')
                .then((calls) => calls[calls.length-1].lastArg)
                .should('deep.equal', {numberInput: '123', passwordInput: '456', select: 'option nr 2', textInput: '123'});

            cy.get('@error').should('have.length', 0);
        });
    });

});