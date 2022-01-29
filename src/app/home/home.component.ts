import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/model/customer';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <h1>Liste des clients</h1>
    <button type="button" class="btn btn-primary" routerLink="/create">Créer un client</button>
    <div class="list-group">
      <a  *ngFor="let customer of customers" [routerLink]="'/' + customer.id" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col">{{ customer.fullName }}</div>
          <div class="col">{{ customer.email }}</div>
        </div>
      </a>
    </div>
  </div>
  
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  customers: Customers = [];

  constructor(private supabase: SupabaseService) { }

  async ngOnInit() {
    this.customers = await this.supabase.getCustomers();
  }

}
