import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    productName = '.inventory_item_name';

    async validateProduct() {
        await expect(this.page.locator(this.productName)).toContainText('Sauce Labs Backpack');
    }
}