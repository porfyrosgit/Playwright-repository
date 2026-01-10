import {test,expect,Page} from '@playwright/test';
import {login_demoblaze} from './demoblaze_login_POclass.ts'; 
import data from "../login_creds_dataset.json" with {type:'json'};

test.describe.configure({mode:'serial'});

let TestNo=1;    //counter initialization for dynamic test ID naming
for (const user of data){      //looping over pairs of json credentials along with validity status

    // 1. DYNAMIC TEST ID counter SNAPSHOT: Lock the current number into this variable
const currentID = TestNo;
const username=user.username;
const password=user.password;
const validity=user.validity;

test(`IAT-${currentID} login with external dataset`,async({page})=>{      //loop iteration runs test with a data triplet

console.log(`\ndbg IAT-${currentID}| testing username: ${username}| password: ${password}| validity: ${validity}\n`);


const login_user=new login_demoblaze(page);  
   //instantiating the imported class with new object login_user
await page.goto('https://www.demoblaze.com/');                                                                         


if (validity=='valid')
{                   //assert condition ,valid credentials
login_user.login(username,password)       //instantiation of login POM triggers click of native browser popup                      
await login_user.welcome_text.waitFor({state:'visible'})
await expect(login_user.welcome_text).toHaveText(`Welcome ${username}`)  //assert Welcome username
}
else if (validity=='invalid')
{                                     //assertinvalid credentials
//DIALOG LISTENER Promise.all - reliably listening for login native browser dialog. simultaneous listen & click 
const [dialog]=await Promise.all([
  page.waitForEvent('dialog'),
  login_user.login(username,password)             //instantiation of login POM triggers click of native browser popup
              
]);
const popuptext=dialog.message();             //optionally capture the popup text
console.log(`DBG popup text :${popuptext}`);   //optionally console.log the popup text

await expect(login_user.welcome_message).not.toBeVisible;  
await expect(popuptext).toMatch('User does not exist.');   //assert popup text
}

});
TestNo+=1;  //counter increase for dynamic test ID naming

};



