import {test,expect} from '@playwright/test';
import {login_demoblaze} from './demoblaze_login_POclass.ts'; 
import data from "../login_creds_dataset.json";

test.describe.configure({mode:'serial'});

// console.log("DBG complete json...\n",data);
let TestNo=1;    //counter initialization for dynamic test ID naming
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

const login_user=new login_demoblaze(page);  
   //instantiating the imported class with new object login_user
await page.goto('https://www.demoblaze.com/');  
await login_user.login(username,password)

if (validity=='valid'){                                     //assert condition ,valid creds
await login_user.welcome_message.waitFor({state:'visible'});
await expect(login_user.welcome_message).toHaveText(`Welcome ${username}`);  //assert Welcome username
}
else if(validity=='invalid'){                              //assert conditions, invalid creds
await expect(login_user.welcome_message).not.toBeVisible;   //ToBeImroved: event listener to catch and verify popup text
}

});
TestNo+=1;  //counter increase for dynamic test ID naming

};



