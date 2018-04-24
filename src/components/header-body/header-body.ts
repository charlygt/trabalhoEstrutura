import { Component } from '@angular/core';

/**
 * Generated class for the HeaderBodyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-body',
  templateUrl: 'header-body.html'
})
export class HeaderBodyComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderBodyComponent Component');
    this.text = 'Hello World';
  }

}
