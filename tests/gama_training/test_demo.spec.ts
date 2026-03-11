import {test, expect} from '@playwright/test';

test.describe('Gama Training - Demo', () => {
    test('Assignment 1', async ({page}) => {
        await page.goto('https://demoqa.com/');
        await page.locator('h5:has-text("Elements")').click();
        await page.locator('span:has-text("Text Box")').click();
        const fullName = page.getByRole('textbox', { name: 'Full Name' });
        await expect(fullName).toBeVisible();
        await expect(fullName).toBeEnabled();
        await expect(fullName).toBeEditable();
        await expect(fullName).toBeEmpty();
        await fullName.click();
        await fullName.fill('Aswathy S');   
        await page.pause();    

    });

    test('Select Red and validate', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.waitForTimeout(8000);
        await page.locator('#colors').scrollIntoViewIfNeeded();
        await page.locator('#colors').selectOption('Red');
        const isRedSelected = await page.locator(
            '#colors option[value="Red"]'
        ).isChecked();
        expect(isRedSelected).toBe(true);
    });



    test('Print DemoQA web table values', async ({ page }) => {
      await page.goto('https://demoqa.com/webtables');

      const rows = await page.locator('table tr');

      const rowCount = await rows.count();

      for (let i = 0; i < rowCount; i++) {
        const rowText = await rows.nth(i).innerText();
        console.log(rowText);
      }
   });
})