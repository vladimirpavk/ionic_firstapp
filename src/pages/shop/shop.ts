import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController) {}

  private onBuyOutButtonClicked(){
    this.navCtrl.push(BuyoutPage, '');
  }

  private onProductButtonClicked(productName:string):void{
      this.navCtrl.push(BuyoutPage, productName);
  }
}
