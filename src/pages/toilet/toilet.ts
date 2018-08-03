import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

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
        this.navCtrl.pop();
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
