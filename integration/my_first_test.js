it('google test', function(){
    cy.visit('https://google.com')
    // get AcceptCookies(){  return cy.xpath('//*[@id="L2AGLb"]/div')     }
    cy.get('.gLFyf').type('Automation step by step process')

})