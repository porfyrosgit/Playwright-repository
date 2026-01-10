
import{Page,type Locator,expect} from '@playwright/test';


export class login_demoblaze{
    private readonly page:Page;
    private readonly loginlink:Locator;
    private readonly user_field:Locator;
    private readonly pass_field:Locator;
    public readonly loginbutton:Locator;     //public to be exposed for use in test file 
    public readonly welcome_text:Locator;    //public to be exposed for use in test file 
    

constructor(page:Page){
this.page=page;
this.loginlink=page.getByRole('link',{name:'Log in'});
this.user_field=page.locator('#loginusername');
this.pass_field=page.locator('#loginpassword');
this.loginbutton=page.getByRole('button', {name:'Log in'});
// this.welcome_text=getByRole('link',{name:`Welcome${username}`});  
this.welcome_text=page.locator('#nameofuser');
this.welcome_message=this.welcome_text;
}

async login(username:string,password:string):Promise<void>   //Promise<void> : no need for login to return any value
{
  await this.loginlink.click();
  await this.user_field.waitFor({state:'visible'});
  await this.user_field.fill(username);
  await this.pass_field.fill(password);
  await this.loginbutton.click() ;

}

}













//https://demoblaze.com/index.html     username: samfischer  password: the usual one in restricted form lowercase