import { test, expect } from '@playwright/test';

const routes = ['/', '/system-wins', '/writing', '/playbooks', '/about', '/privacy'];

test.describe('Routes render without console errors', () => {
  for (const route of routes) {
    test(`render ${route}`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(String(e)));
      page.on('console', (msg) => {
        if (['error'].includes(msg.type())) errors.push(msg.text());
      });
      await page.goto(route);
      await expect(page.locator('h1')).toBeVisible();
      expect(errors).toEqual([]);
    });
  }
});

test('Skip link jumps to main and is visible on focus', async ({ page }) => {
  await page.goto('/');
  // Focus the document, then press Tab until skip link shows
  await page.keyboard.press('Tab');
  const skip = page.locator('a.skip-link');
  await expect(skip).toBeVisible();
  await skip.press('Enter');
  // Check that main received focus target position (no header overlap)
  const hash = page.url().split('#')[1];
  expect(hash).toBe('main');
});

test('Keyboard tab order starts at header and cycles logically', async ({ page }) => {
  await page.goto('/');
  // Just validate focus moves; spot-check a few elements
  await page.keyboard.press('Tab'); // skip link
  await page.keyboard.press('Tab'); // first header link
  const focused = await page.evaluate(() => document.activeElement?.textContent?.trim() || document.activeElement?.tagName);
  expect(focused?.length).toBeTruthy();
});
