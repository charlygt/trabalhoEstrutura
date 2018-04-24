import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PilhaPage } from '../pilha/pilha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(public navCtrl: NavController) {

  }

  pushPage(){
    let nomePagina = this.navCtrl.name;
    this.navCtrl.push(nomePagina);
  }

}
