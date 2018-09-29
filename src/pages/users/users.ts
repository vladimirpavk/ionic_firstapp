import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  
  constructor(private navCtrl:NavController){}
  
  public buttonClicked(name:string){
    this.navCtrl.push(UserPage, name);
    //console.log(name);
  }
}
