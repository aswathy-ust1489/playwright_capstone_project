import { Page } from '@playwright/test';

export class ProductsPage {

    constructor(private page: Page) {}

    backpack = '#add-to-cart-sauce-labs-backpack';
    cartIcon = '.shopping_cart_link';

    async addProductToCart() {
        await this.page.click(this.backpack);
    }

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}