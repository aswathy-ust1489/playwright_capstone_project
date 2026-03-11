import { test } from '@playwright/test';
import { ProductsPage } from '../../pages/gama_training/ProductsPage';
import { LoginPage } from '../../pages/gama_training/LoginPage';
import { CartPage } from '../../pages/gama_training/CartPage';
import { MenuPage } from '../../pages/gama_training/MenuPage';

test('SauceDemo Purchase Flow', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const menu = new MenuPage(page);

    await login.login('standard_user', 'secret_sauce');
    console.log('Login successful');

    await products.addProductToCart();
    console.log('Product added to cart');

    await products.goToCart();
    console.log('Navigated to cart');

    await cart.validateProduct();
    console.log('Product validation successful');

    await menu.logout();
    console.log('Logout successful');

});