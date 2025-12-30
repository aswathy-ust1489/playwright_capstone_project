import { test as base, expect as baseExpect } from '@playwright/test';
import { FlipkartPage } from '../pages/flipkart.page';
import { AmazonPage } from '../pages/amazon.page';

type MyFixtures = {
  flipkart: FlipkartPage;
  amazon: AmazonPage;
};

export const test = base.extend<MyFixtures>({
  flipkart: async ({ page }, use) => {
    await use(new FlipkartPage(page));
  },
  amazon: async ({ page }, use) => {
    await use(new AmazonPage(page));
  },
});

export const expect = baseExpect;

export type { MyFixtures };
