describe('Pizza Ordering!', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('input[id="size-dropdown"]');
    const pepperoniInput = () => cy.get('input[name=pepperoni]');
    const mushroomsInput = () => cy.get('input[name=mushrooms]');
    const pineappleInput = () => cy.get('input[name=pineapple]');
    const peppersInput = () => cy.get('input[name=peppers]');
    const specialInput = () => cy.get('input[name=special]');
    const orderInput = () => cy.get('input[id="order-button"]');

    it('sanity check', () => {
        expect(1 + 1).to.equal(2);
    })

    it('can add text to the box', () => {
        nameInput()
            .should('have.value', '')
            .type('Obi Toppin')
            .should('have.value', 'Obi Toppin');

        specialInput()
            .should('have.value', '')
            .type('extra pineapples please')
            .should('have.value', 'extra pineapples please');
    })

    it('can select multiple toppings', () => {
        pepperoniInput().click();
        mushroomsInput().click();
        pineappleInput().click();
        peppersInput().click();
    })

    it('can submit the form', () => {
        nameInput().type('Obi Toppin');
        pineappleInput().click();
        specialInput().type('extra cheese');
        orderInput().should('not.be.disabled');
    })
})