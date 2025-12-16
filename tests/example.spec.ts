import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('flipkart: open site and select login', async ({ page }) => {
  // Navigate to Flipkart
  await page.goto('https://www.flipkart.com', { waitUntil: 'networkidle' });

  // If the initial login modal appears, close it (it has a ✕ button)
  const modalClose = page.locator('button:has-text("✕")');
  if (await modalClose.count() > 0 && await modalClose.first().isVisible()) {
    await modalClose.first().click();
  }

  // Click a visible Login / Log in / Sign in text link/button, with a fallback
  const loginLocator = page.getByText(/Login|Log in|Sign in/i).first();
  if (await loginLocator.count() > 0) {
    await loginLocator.click();
  } else {
    const accountBtn = page.locator('a[href*="account"], button[aria-label*="account"], a:has-text("My Account")');
    if (await accountBtn.count() > 0) {
      await accountBtn.first().click();
    }
  }

  // Assert that a login input (phone/email/tel) is visible
  const loginInput = page.locator('input[type="text"], input[type="email"], input[type="tel"], input[name="phone"]');
  await expect(loginInput.first()).toBeVisible();
});

