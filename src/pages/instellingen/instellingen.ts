import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ParkerenPage} from "../parkeren/parkeren";

@Component({
    selector: 'page-instellingen',
    templateUrl: 'instellingen.html'
})
export class InstellingenPage {

    constructor(public navCtrl: NavController) {

    }

    goBack() {
        this.navCtrl.pop();
    }

    goToSettings() {
        this.navCtrl.push(InstellingenPage);
    }
}
