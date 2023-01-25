describe('Тестирование login.qa.studio', function () {
    
    it('1. Проверка авторизации с валидными логином и паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(`german@dolnikov.ru`);
        cy.get('#pass').type(`iLoveqastudio1`);
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click()
        })
        
        it('2. Проверка формы восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('dyadya_vasya@mail.ru');
            cy.get('#restoreEmailButton').click()
            cy.contains('Успешно отправили пароль на e-mail')
        })    

        it('3. Проверка авторизации с невалидными паролем', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type(`german@dolnikov.ru`);
            cy.get('#pass').type(`iLo222veqastudio1`);
            cy.get('#loginButton').click();
            cy.contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').click()
        })
        
            it('4. Проверка авторизации с невалидными логином', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type(`german4444@dolnikov.ru`);
            cy.get('#pass').type(`iLoveqastudio1`);
            cy.get('#loginButton').click();
            cy.contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').click()
        })

        it('5. Проверка авторизации с невалидными логином без собаки', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type(`german_dolnikov.ru`);
            cy.get('#pass').type(`iLoveqastudio1`);
            cy.get('#loginButton').click();
            cy.contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon').click()
        })

        it('6. Проверка авторизации с валидными логином и паролем с приведением логина к строчным буквам', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type(`GerMan@Dolnikov.ru`);
            cy.get('#pass').type(`iLoveqastudio1`);
            cy.get('#loginButton').click();
            cy.contains('Авторизация прошла успешно');
            cy.get('#exitMessageButton > .exitIcon').click()
        })
     
})