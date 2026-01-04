
//POM class todomvc

import {type Locator ,type Page} from '@playwright/test';

export class todomvc{
//class properties : Locator objects
readonly page: Page;
readonly inputbox:Locator;
readonly todolist:Locator;
cleaned_multitxt:string[];
cleaned_multitxt_length:number;



constructor(page:Page) //for initializing the properties to create an object
{    
    this.page=page;
    this.inputbox=page.getByPlaceholder("What needs to be done?");
    this.todolist=page.locator('.todo-list');
    this.cleaned_multitxt=[]
    this.cleaned_multitxt_length=0

}

async goto()
{
    await this.page.goto("https://demo.playwright.dev/todomvc/")
}
//methods to define the objects behavior of performing actions on the page

//method to add todo item(S)
async addtodo(multitxt:string)
{
    this.cleaned_multitxt=multitxt.split(',').map(s=>s.trim()).filter(s=>s.length>0);
    console.log('DBG cleaned multitxt=',this.cleaned_multitxt);

    this.cleaned_multitxt_length=this.cleaned_multitxt.length;
    console.log("cleaned multitxt_length =",this.cleaned_multitxt_length);
    
    for (const text of this.cleaned_multitxt) {

          await this.inputbox.fill(text);
          await this.inputbox.press("Enter");


    }
  

}

//method to remove all todo items
// async removealltodos()
// {
//     if (count>0){
//             await this.page.getByText('Mark all as complete');
//             await this.page.getByText('Mark all as complete').click();
//             await this.page.getByText('Clear completed').hover();
//             await this.page.getByText('Clear completed').click();
//          }
// }


}