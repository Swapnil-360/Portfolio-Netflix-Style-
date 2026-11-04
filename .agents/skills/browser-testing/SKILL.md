---
name: browser-testing
description: Browser Automation, Playwright & Visual E2E Verification. Use this skill to automate browser navigation, test responsive layouts across mobile and desktop, capture screenshots, audit console errors, and verify user journeys against a live running application.
---

# Browser Testing & Visual Automation Runbook

This skill equips the agent to conduct real-world verification on running web applications using headless/headful browsers and Playwright automation.

## 1. Local Server Life Cycle

Before running browser tests:
1. Ensure the web application is built:
   `npm run build`
2. Start the development or preview server on a standard port (e.g., `http://localhost:5173` or `http://localhost:3000`).
3. Verify server responsiveness before running tests.

---

## 2. Playwright Test Suite Architecture

Standard test script structure for full journey verification:

```ts
import { test, expect } from '@playwright/test';

test.describe('Series Portfolio Visual & Interaction Suite', () => {
  test('Desktop & Mobile Verification', async ({ page }) => {
    // 1. Desktop Viewport Test
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:5173');

    // Verify title and hero elements
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=THE SERIES')).toBeVisible();

    // Verify console error cleanliness
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.error(`Browser Console Error: ${msg.text()}`);
      }
    });

    // 2. Navigation & Modal Verification
    const playIntroBtn = page.locator('text=Play Intro');
    if (await playIntroBtn.isVisible()) {
      await playIntroBtn.click();
      await page.waitForTimeout(500);
      await page.keyboard.press('Escape');
    }

    // 3. Mobile Viewport Audit (Pixel 7 / iPhone 14 Pro: 390x844)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:5173');

    // Confirm no horizontal body blowout
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);

    // Verify Back to Top button
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(400);
    const topBtn = page.locator('button[aria-label="Back to top"]');
    await expect(topBtn).toBeVisible();
  });
});
```

---

## 3. Responsive Breakpoint Matrix

When running browser verification, always test across these three standard viewports:
1. **Mobile:** `375 x 812` (iPhone SE / Standard Mobile)
2. **Tablet:** `768 x 1024` (iPad Mini / Portrait Tablet)
3. **Desktop:** `1440 x 900` (MacBook / Standard HD Desktop)

### Critical Inspection Checklist:
- [ ] No horizontal scrollbars on document body.
- [ ] Modals, dialogs, and drawer sheets close cleanly via Escape key and backdrop clicks.
- [ ] Fixed overlays (e.g. BackToTop, Navbar, Toast) remain anchored to the viewport.
- [ ] All external links open with `target="_blank"` and `rel="noreferrer"`.
- [ ] Form inputs validate email patterns and show inline feedback.

