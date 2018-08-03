import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParkerenPage } from "../parkeren/parkeren";
import { ToiletPage } from "../toilet/toilet";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToParkeren() {
      this.navCtrl.push(ParkerenPage);
  }

  goToToilet() {
      this.navCtrl.push(ToiletPage);
  }
}
