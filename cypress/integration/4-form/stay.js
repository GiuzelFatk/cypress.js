describe('автотест логина и пароля', function () {
   it('мои заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.contains('Регистрация');
        cy.get('.auth-form > form > [type="email"]').type('carpinka@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('595959');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})


