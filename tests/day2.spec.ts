import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // navigate to the demo nopCommerce digital downloads page    //comment2be deleted

  await page.goto('https://demo.nopcommerce.com/digital-downloads');

  const logo:Locator=page.getByAltText('nopCommerce demo store');
  await expect(logo).toBeVisible;

  const Searchstore:Locator=await page.getByLabel('Search store');
  await expect(Searchstore).toBeVisible();
  await Searchstore.fill('iphone 16');

  await page.waitForTimeout(2000);

  const searchbutton:Locator=page.getByRole('button',{name:'Search'});
  await searchbutton.click();

  await page.waitForTimeout(2000);

  const itemgrid:Locator=page.locator('.item-grid');
  await expect(itemgrid).toContainText('Apple iPhone 16');

  await page.waitForTimeout(5000);

});











/*  // smoke check: page title contains 'nopCommerce'
  const title = await page.title();
  expect(title.toLowerCase()).toContain('nopcommerce');

  // Example: click the first product (if present) and assert navigation
  const firstProduct = page.locator('.product-item').first();
  if (await firstProduct.count()) {
    await firstProduct.click();
    await expect(page).toHaveURL(/product/);
  }
*/
