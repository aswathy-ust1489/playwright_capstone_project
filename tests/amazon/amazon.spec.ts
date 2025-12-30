import { test, expect } from '../../fixture/fixtures';

test.describe('Amazon - Login flow', () => {
  test.beforeEach(async ({ amazon }) => {
    await amazon.goto();
    await amazon.closeModalIfVisible();
  });

  test('select login (POM)', async ({ amazon }) => {
    await amazon.openLogin();

    // Assert that a login input (email/text) is visible
    await expect(amazon.loginInput.first()).toBeVisible();
  });
});
