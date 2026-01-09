
import{Page,Locator,expect} from '@playwright/test';


export class login_demoblaze2{
    private readonly page:Page;
    private readonly loginlink:Locator;
    private readonly user_field:Locator;
    private readonly pass_field:Locator;
    private readonly loginbutton:Locator;
    private readonly welcome_text:Locator;
    public welcome_message:Locator;


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

//TODO: write event listener to listen for pop dialog "user does not exist" (unrelated to html elements)

async login(username:string,password:string):Promise<void>   //TODO: what kind of promise does it return ?
{
  await this.loginlink.click();
  await this.user_field.waitFor({state:'visible'});
  await this.user_field.fill(username);
  await this.pass_field.fill(password);
  await this.loginbutton.click();
  await this.welcome_text.waitFor({state:'visible'});

  
//   await this.welcome_text  //TODO: Not sure how i will validate the expected username there

this.welcome_message=this.welcome_text;  

}


}













//https://demoblaze.com/index.html     username: samfischer  password: the usual one in restricted form lowercase