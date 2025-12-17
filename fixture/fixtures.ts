import { test as base, expect as baseExpect } from '@playwright/test';
import { FlipkartPage } from '../pages/flipkart.page';

type MyFixtures = {
  flipkart: FlipkartPage;
};

export const test = base.extend<MyFixtures>({
  flipkart: async ({ page }, use) => {
    await use(new FlipkartPage(page));
  },
});

export const expect = baseExpect;

export type { MyFixtures };
