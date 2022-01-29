import { Component } from '@angular/core';
import { Customers } from 'src/model/customer';
import { Invoice } from 'src/model/Invoice';

@Component({
  selector: 'app-root',
  template: `
  <div id="app">
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {}
