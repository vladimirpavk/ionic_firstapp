import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-user',
    template: 'user.html'
})
export class UserPage{
    public name:string;
}