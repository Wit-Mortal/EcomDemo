const { expect } = require('@wdio/globals')

describe('Add to Cart Functionality', () => {
    it('TC-001: Ensure a simple product can be added to the cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com/');
        await browser.maximizeWindow();
        // Step 1: Navigate to a simple product
        const product = $('a.product-item-link'); // Select the first product
        await product.waitForExist();
        await product.click();

        // Step 2: Click "Add to Cart"
        const addToCartBtn = $('button#product-addtocart-button');
        await addToCartBtn.waitForClickable();
        const chooseSize = $(`//div[contains(@aria-labelledby,'size')]/div[1]`);
        const chooseColor = $(`//div[contains(@aria-labelledby,'color')]/div[1]`);
        await chooseSize.click();
        await chooseColor.click();
        await addToCartBtn.waitForClickable();
        await addToCartBtn.click();

        // Step 3: Verify confirmation message
        const successMessage = $('.message-success');
        await successMessage.waitForExist();
        const message = await successMessage.getText();
        expect(message).toContain('You added');

        // Step 4: Open the cart
        const cartIcon = $('a.showcart');
        await cartIcon.waitForClickable();
        await cartIcon.click();

        // Step 5: Verify product in the cart
        const cartItem = $('.product-item-name');
        await cartItem.waitForExist();
        expect(cartItem).toBeDisplayed();
    });

    it('TC-003: Ensure updating the quantity in the cart reflects accurately', async () => {
        // Step 1: Modify quantity
        const qtyInput = $('input.cart-item-qty');
        await qtyInput.waitForExist();
        await qtyInput.doubleClick();
        await browser.keys('Backspace');
        await qtyInput.setValue('2');

        // Step 2: Click "Update Cart"
        const updateCartBtn = $('button.update-cart-item');
        await updateCartBtn.waitForClickable();
        await updateCartBtn.click();

        // Step 3: Verify total price and quantity update
       await browser.pause(5000); // Wait for the cart to update
        const updatedQty = $('span.counter-number');
        const qtyValue = await updatedQty.getText();
        expect(Number(qtyValue)).toBeGreaterThan(1);
    });
});
