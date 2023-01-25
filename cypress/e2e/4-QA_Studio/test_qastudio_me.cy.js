describe('Тестирование  https://testqastudio.me/', function () {
    
    it('1. Проверка покупки мебели в магазине', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Василий');
        cy.get('#billing_last_name').type('Пружинкин');
        cy.get('#billing_address_1').type('ул. Пушкина, д. 25, кв. 76');
        cy.get('#billing_city').type('Химки');
        cy.get('#billing_state').type('Московская область');
        cy.get('#billing_postcode').type('125689');
        cy.get('#billing_phone').type('89546464789');
        cy.get('#billing_email').type('dyadya_vasya@mail.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.')
        })
})