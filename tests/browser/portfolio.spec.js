import { test, expect } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';

// Publicly linked routes; legacy eleving/product-os aliases are outside this MVP.
const routes = ['home', 'mogo', 'ai-workflow', 'design-systems', 'fleet', 'banking', 'ukmedia', 'about'];

for (const route of routes) {
  test(`${route}: renders with usable content and media`, async ({ page }, testInfo) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(route === 'home' ? './' : `./#${route}`);
    expect(response.ok()).toBeTruthy();
    await expect(page.locator('h1')).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    // Trigger lazy media and intersection-observer reveal effects before capture.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
        window.scrollTo(0, y);
        await new Promise(resolve => setTimeout(resolve, 80));
      }
      await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
      document.querySelectorAll('video').forEach(video => video.pause());
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500); // Existing 80ms hero timer and CSS reveal transitions.
    const name = `${route}-${testInfo.project.name}`;
    await mkdir('qa-evidence', { recursive: true });
    await page.screenshot({ path: `qa-evidence/${name}.png`, fullPage: true, animations: 'disabled' });
    const evidence = await page.evaluate(() => ({
      title: document.title,
      headings: [...document.querySelectorAll('h1,h2,h3')].map(el => el.innerText),
      text: document.body.innerText.slice(0, 16000),
      brokenImages: [...document.images].filter(img => !img.complete || !img.naturalWidth).map(img => img.getAttribute('src')),
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    }));
    await writeFile(`qa-evidence/${name}.json`, JSON.stringify({ route, viewport: testInfo.project.name, ...evidence, errors }, null, 2));
    expect.soft(evidence.text.length).toBeGreaterThan(200);
    expect.soft(evidence.brokenImages, 'Broken images').toEqual([]);
    expect.soft(evidence.overflow, 'Horizontal overflow').toBe(false);
    expect.soft(errors, 'Uncaught browser errors').toEqual([]);
  });
}

test('home case links and About navigation work', async ({ page }) => {
  await page.goto('./');
  for (const route of routes.filter(route => !['home', 'about'].includes(route))) {
    const link = page.locator(`a[href="#${route}"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(new RegExp(`#${route}$`));
    await expect(page.locator('h1')).toBeVisible();
    await page.goto('./');
  }
  await page.getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/#about$/);
  await expect(page.locator('h1')).toBeVisible();
});
