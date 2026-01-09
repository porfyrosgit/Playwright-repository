import {test,expect} from '@playwright/test';


import {login_demoblaze} from './demoblaze_login_POclass.js';


test('demoblaze site tests',{tag:['@master']},async({page})=>{

    //navigate to demoblaze site
    await page.goto('https://demoblaze.com/index.html');

let username='samfischer';
let password='splintercell';
   
const userlogin1=new login_demoblaze(page);  // instantiating the class with new object userlogin1

await userlogin1.login(username,password); //calling login method on the imported class object userlogin1

await expect(userlogin1.welcome_message).toContainText(`Welcome ${username}`);  //asserting that the logged in username appears with the Welcome text


})
