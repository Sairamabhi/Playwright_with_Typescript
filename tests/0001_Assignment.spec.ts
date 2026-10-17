import { test, expect } from '@playwright/test';

test("Test for OrgHrm application title and url validation", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const title:string = await page.title();
    const url:string = await page.url();
    console.log("Page title : " + title);
    console.log("Page url : " + url);
    await expect(page, "Page title validation").toHaveTitle("OrangeHRM");
    await expect(page, "Full url validation").toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(url).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(url).toContain("orangehrmlive");
})