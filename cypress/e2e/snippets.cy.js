/* describe('simple test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
    // cy.get("div").as("outer-div")

    cy.intercept("GET", "https://jsonplaceholder.typicode.com/comments", {fixture: "comments.json"}).as('getComments');
  })

  it('should console log fruit names', () => {
    cy.get('ul > li').each(($listItem) => {
      console.log($listItem.text())
    })
  })

  it('should get list length', () => {
    cy.get('ul > li').its('length')
  })

  it('should console log input value', () => {
    cy.get('input').invoke('val')
  })

  it('should button with myAttribute', () => {
    cy.get('button').then($button => {
      const myAttribute = $button.attr('myAttribute')
      cy.wrap(myAttribute).should('eq', 'buttonAttribute')
    })
  })

  it('should pass all assertions', () => {
    cy.get('ul').should('be.visible')
    cy.get('ul').should('not.be.empty')
    cy.get('ul').should('have.attr', 'myAttr', 'myAttrValue').and("have.id", 'fruits-list')
    cy.get('ul').children().should('have.length.at.least', 1).should('have.length.at.most', 3)
    cy.get('ul').children().first().should('have.text', 'apples')
    cy.get('ul').children().last().should('not.contain', 'oranges')
  })

  it('should click button and change input text', () => {
    cy.get('input').type('new input text')
    cy.get('button').click()
  })

  it('should contain fruits', () => {
    cy.contains("oranges")
    cy.get("@outer-div").contains("oranges")
    cy.contains("ul", "oranges")
    cy.contains("Fruits")
  })

  it('should select by alias', () => {
    cy.get('div').as('my-div')
    cy.get('@my-div')
  })

  it('should select correct elements', () => {
    cy.get('div').find('ul') 	// -> <ul id="fruits-list">...</ul>
    cy.get('ul').first() 		// -> <li>apples</li>
    cy.get('ul').last() 		// -> <li>bananas</li>
    cy.get('ul').parent() 		// -> <div id="outer-div">...</div>
  	cy.get('ul').children() 	// -> [ <li></li>, ... ]
  })

  it('should select correct elements', () => {
    cy.get("input")
    cy.get(".my-class")
    cy.get("div > ul")
    cy.get('ul li:first')
    cy.get('[custom-attribute="example"]')
    cy.get("a[href*='/api/user']")
    cy.get('[id^=local-]')
    cy.get('[id$=-remote]')
  })

}) */