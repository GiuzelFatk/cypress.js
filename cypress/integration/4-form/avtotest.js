
describe('автотесты для формы логина и пароля', function () {
   it('забыли пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('carpinka@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
    })
})
describe('автотесты для формы логина и пароля', function () {
   it('позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
    })
})


describe('автотесты для формы логина и пароля', function () {
   it('негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLovestudio5');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('автотесты для формы логина и пароля', function () {
   it('негативный кейс, кириллица', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('Кириллица1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('автотесты для формы логина и пароля', function () {
   it('негативный кейс, строчные', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iloveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('автотесты для формы логина и пароля', function () {
   it('негативный кейс, цифры', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('897698671');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('автотесты для формы логина и пароля', function () {
   it('негативный кейс, без цифры', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('автотесты для формы логина и пароля', function () {
   it('негативный кейс, 6 знаков', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLove1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('автотесты для формы логина и пароля', function () {
   it('негативный кейс, не правильный логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('ger@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
    })
})