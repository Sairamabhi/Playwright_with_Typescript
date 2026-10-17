
import {test,expect} from "@playwright/test";


test("Test for Google application title and url validation",async({page})=>{

//open app
await page.goto("https://www.google.com/",{waitUntil:'load'});

//waitForLoadState():Returns when the required load state has been reached.
await page.waitForLoadState('domcontentloaded');

//get the title: title()
const appTitle:string=await page.title();

//validate title as Google
await expect(page).toHaveTitle("Google");//when assertion fail then error will appear after 5sec:hard assertion
console.log("Title matched...."+appTitle);

//validate current url
let appUrl:string=page.url();


//variable level full match
expect(appUrl).toBe("https://www.google.com/");

expect(appUrl).toContain("google.com");


//validate full url with base page level assertion
await expect(page).toHaveURL("https://www.google.com/");
console.log("Full url matched...."+appUrl);


//validate partial url
await expect(page).toHaveURL(/google/);
console.log("Partial url matched..."+appUrl);

/*
//to validate full title with if-else not required
if(appTitle === "Google")
{
    console.log("Test Pass...Title matched!");
    
}else{
    console.log("Test Fail.....Title not matched!");
    
}*/


})