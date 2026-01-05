import { Page, Locator } from '@playwright/test';
import { BASE_URL } from '../../util/constants';

export class FlipkartPage {
  readonly page: Page;
  readonly modalClose: Locator;
  readonly loginLocator: Locator;
  readonly accountBtn: Locator;
  readonly loginInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalClose = page.locator('button:has-text("✕")');
    this.loginLocator = page.getByText(/Login|Log in|Sign in/i).first();
    this.accountBtn = page.locator('a[href*="account"], button[aria-label*="account"], a:has-text("My Account")');
    this.loginInput = page.locator('input[type="text"], input[type="email"], input[type="tel"], input[name="phone"]');
  }

  async goto() {
    await this.page.goto(BASE_URL, { waitUntil: 'networkidle' });
  }

  async closeModalIfVisible() {
    if (await this.modalClose.count() > 0 && await this.modalClose.first().isVisible()) {
      await this.modalClose.first().click();
    }
  }

  async openLogin() {
    if (await this.loginLocator.count() > 0) {
      await this.loginLocator.click();
    } else if (await this.accountBtn.count() > 0) {
      await this.accountBtn.first().click();
    }
  }
}
