
import {todomvc} from './todomvc.POclass';
import {test,expect} from '@playwright/test';

//a test function is mandatory in the spec test file
test('Add todo item in list',async({page})=>{
    
const pageobject=new todomvc(page);

await pageobject.goto();
await page.waitForTimeout(2000); //DBG wait 2secs just to see the page load
await pageobject.addtodo('write POM class,write test case1, write test case2, import POM class in test cases');

const length:number=pageobject.cleaned_multitxt_length;
console.log("DBG cleaned multitxt length made it inside = ",length);

await page.waitForTimeout(2000); //DBG wait 2secs just to see the action performed

    
//assertion : there is now an items count visible on the page and the number is correct
await expect (pageobject.page.getByTestId('todo-count')).toBeVisible();
await expect (pageobject.page.getByTestId('todo-count')).toHaveText(new RegExp(`\\b${length}\\b`));




})