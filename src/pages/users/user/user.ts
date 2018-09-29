import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html',
})
export class UserPage implements OnInit{
    public name:string = 'Pavle';

    constructor(
        private navParams:NavParams,
        private navCtrl:NavController
    ){}

    ngOnInit(){
        this.name=this.navParams.data;
    }    

    private onConfirmButtonClicked(){
        this.navCtrl.popToRoot();
    }
}