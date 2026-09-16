import { test, expect } from '@playwright/test';

test.describe('Application E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render application title and navigation elements', async ({ page }) => {
    await expect(page.locator('header, nav, body')).toContainText('<%= projectName %>');
    await expect(page.getByRole('link', { name: /home/i }).first()).toBeVisible();
  });

  test('should toggle dark/light theme mode', async ({ page }) => {
    const themeBtn = page.getByRole('button', { name: /mode|theme|light|dark/i }).first();
    await expect(themeBtn).toBeVisible();

    const htmlElement = page.locator('html');
    const initialClass = (await htmlElement.getAttribute('data-theme')) || (await htmlElement.getAttribute('class')) || '';

    await themeBtn.click();
    const updatedClass = (await htmlElement.getAttribute('data-theme')) || (await htmlElement.getAttribute('class')) || '';

    expect(updatedClass).not.toBe(initialClass);
  });

  test('should interact with the interactive counter', async ({ page }) => {
    const counterBtn = page.getByRole('button', { name: /count is/i }).first();
    if (await counterBtn.isVisible()) {
      await expect(counterBtn).toContainText('Count is 0');
      await counterBtn.click();
      await expect(counterBtn).toContainText('Count is 1');
    }
  });

  test('should assert non-existent elements are not visible', async ({ page }) => {
    await expect(page.getByText('NonExistentUnexpectedElement12345')).not.toBeVisible();
    await expect(page.locator('.non-existent-class-xyz')).toHaveCount(0);
  });

  <% if (isFullstack) { %>
  test('should perform CRUD operations on items from UI perspective', async ({ page }) => {
    await page.goto('/#/items');
    await expect(page.getByText(/Fullstack CRUD|API/i).first()).toBeVisible();

    const input = page.getByPlaceholder(/title/i).first();
    await expect(input).toBeVisible();
    await input.fill('Playwright Test Item');

    const addButton = page.getByRole('button', { name: /add/i }).first();
    await addButton.click();

    await expect(page.getByText('Playwright Test Item')).toBeVisible();

    const deleteButton = page.getByTitle(/delete/i).or(page.getByRole('button', { name: /✕|delete|remove/i })).first();
    if (await deleteButton.isVisible()) {
      await deleteButton.click();
      await expect(page.getByText('Playwright Test Item')).not.toBeVisible();
    }
  });
  <% } %>
});
