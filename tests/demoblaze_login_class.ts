
export class login_demoblaze{
    private readonly page:Page;
    private readonly loginbutton:locator;
    private readonly usernamefield:locator;
    private readonly username:string;
    private readonly passwordfield:locator;
    private readonly password:string;
    private readonly dialoglogin:locator;
    private readonly usergreetingtext:locator;


    constructor(page){
        this.page=page;
        this.loginbutton=page.locator('#login2');
        this.usernamefield=page.locator('#loginusername');
        //this.username=page.locator('#username');
        this.passwordfield=page.locator('#loginpassword'); 
        //this.password=page.locator('#password');
        this.dialoglogin=page.locator('button:has-text("Log in")');
        this.usergreetingtext=page.locator('#nameofuser');

    }

    async login(username,password):Promise<string>{
    
        await this.loginbutton.click();
        await this.usernamefield.waitFor({state:'visible'});             //username field visible
        await this.usernamefield.fill(username);
        await this.passwordfield.waitFor({state:'visible'});            //password field visible
        await this.passwordfield.fill(password);
        await this.dialoglogin.click();
        await this.usergreetingtext.waitFor({state:'visible'});
        console.log(`retrieved string is ${await this.usergreetingtext.textContent()}`);
        return await this.usergreetingtext.textContent();
    }





}



//https://demoblaze.com/index.html     username: samfischer  password: the usual one in restricted form lowercase