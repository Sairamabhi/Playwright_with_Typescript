
//add test runner
import { test } from "@playwright/test";

test("Test for Google application launch", async ({ page }) => {

    //To open any application
    await page.goto("https://www.google.com/");

    //Get the title of current page: title()
    console.log("Application title is: " + await page.title());

})
