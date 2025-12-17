import { test, expect } from '../../fixture/fixtures';

test.describe('Flipkart - Login flow', () => {
  test.beforeEach(async ({ flipkart }) => {
    await flipkart.goto();
    await flipkart.closeModalIfVisible();
  });

  test('select login (POM)', async ({ flipkart }) => {
    await flipkart.openLogin();

    // Assert that a login input (phone/email/tel) is visible
    await expect(flipkart.loginInput.first()).toBeVisible();
  });
});
