import { Page } from '@playwright/test';

export class MenuPage {

    constructor(private page: Page) {}

    menuBtn = '#react-burger-menu-btn';
    logoutBtn = '#logout_sidebar_link';

    async logout() {
        await this.page.click(this.menuBtn);
        await this.page.click(this.logoutBtn);
    }
}