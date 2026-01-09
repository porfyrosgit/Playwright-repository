import {test,expect} from '@playwright/test';
import {login_demoblaze2} from './demoblaze.login.expectingDatasetJson.POclass.ts'; 
import data from "./data/login_creds_dataset.json";

// console.log("DBG complete json...\n",data);
let TestNo=1;
for (const user of data){      //looping over pairs of json credentials along with validity status

    // 1. DYNAMIC TEST ID No SNAPSHOT: Lock the current number into this variable
const currentID = TestNo;
const username=user.username;
// console.log("dbg json username= ",username);
const password=user.password;
// console.log("dbg json username= ",password);
const validity=user.validity;
// console.log("dbg json validity= ",validity);

test(`IAT-${currentID} run test with external dataset`,async({page})=>{      //loop iteration runs test with a data triplet
console.log(`dbg IAT-${currentID} testing json username: ${username} json password: ${password} with validity: ${validity}\n`);

const login_user=new login_demoblaze2(page);  
   //instantiating the imported class with new object login_user
await page.goto('https://www.demoblaze.com/');  
await login_user.login(username,password)
await expect(login_user.welcome_message).toHaveText(`Welcome ${username}`);

});
TestNo+=1;

}
