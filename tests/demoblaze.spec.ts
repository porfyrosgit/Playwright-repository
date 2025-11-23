import {test,expect} from '@playwright/test';


import {login_demoblaze} from './demoblaze_login_class.js';


test('demoblaze site tests',{tag:['@master']},async({page})=>{

    //navigate to demoblaze site
    await page.goto('https://demoblaze.com/index.html');
   
const userlogin1=new login_demoblaze(page);

userlogin1.username='samfischer';
userlogin1.password='splintercell';

const loggedinuser=await userlogin1.login(userlogin1.username,userlogin1.password);

await expect(loggedinuser).toEqual(`Welcome ${userlogin1.username}`);


})
