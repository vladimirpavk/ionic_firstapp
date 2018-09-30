import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit{

    private productName:string='';

  constructor(
      private navCtrl: NavController,
      private navParams: NavParams
    ) {}

  private onBuyButtonClicked(){
    this.navCtrl.popToRoot();
  }

  ngOnInit(){
    this.productName = this.navParams.data;
  }

}
