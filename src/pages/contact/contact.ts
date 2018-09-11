import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 public myDate: String = new Date().toISOString();
  public event = {
    month: '1990-02-19',
    timeStarts: this.myDate,
    timeEnds: '1990-02-20'
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  //fonction perso
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'MERCI DE VOTRE VISITE!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }



}
