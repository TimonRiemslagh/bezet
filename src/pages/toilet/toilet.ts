import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {InstellingenPage} from "../instellingen/instellingen";

@Component({
    selector: 'page-toilet',
    templateUrl: 'toilet.html'
})
export class ToiletPage {

    public male = true;
    public female = true;

    constructor(public navCtrl: NavController) {

    }

    goBack() {
        console.log('test');
        this.navCtrl.pop();
    }

    goToSettings() {
        this.navCtrl.push(InstellingenPage);
    }

    selectAll() {
        this.male = true;
        this.female = true;
    }

    selectMan() {
        this.male = true;
        this.female = false;
    }

    selectWoman() {
        this.male = false;
        this.female = true;
    }

}
