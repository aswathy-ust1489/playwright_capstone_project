import { Page, Locator } from '@playwright/test';
import { AMAZON_BASE_URL } from '../util/constants';

export class AmazonPage {
  readonly page: Page;
  readonly modalClose: Locator;
  readonly loginLocator: Locator;
  readonly accountBtn: Locator;
  readonly loginInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalClose = page.locator('button:has-text("✕"), #attach-close_sideSheet-link, #nav-main button');
    this.loginLocator = page.getByText(/Login|Log in|Sign in|Hello, Sign in/i).first();
    this.accountBtn = page.locator('#nav-link-accountList, a#nav-your-amazon, a:has-text("Account")');
    this.loginInput = page.locator('input[type="email"], input[type="text"], input#ap_email');
  }

  async goto() {
    await this.page.goto(AMAZON_BASE_URL);
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
