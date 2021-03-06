import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InstellingenPage} from "../instellingen/instellingen";

@Component({
    selector: 'page-parkeren',
    templateUrl: 'parkeren.html'
})
export class ParkerenPage {

    constructor(public navCtrl: NavController) {

    }

    goBack() {
        this.navCtrl.pop();
    }

    goToSettings() {
        this.navCtrl.push(InstellingenPage);
    }
}
