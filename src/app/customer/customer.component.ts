import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/model/customer';
import { Invoices } from 'src/model/Invoice';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-customer',
  template: `
  <div *ngIf="customer != null" class="container">
    <h2>Fiche de {{ customer.fullName }}<br>
    ({{ customer.email }})
    </h2>
    <button type="button" class="btn btn-primary" routerLink="/">Retour aux clients</button>
    <table class="table table-striped table-hover">
      <thead>
        <th>Montant</th>
        <th>Etat</th>
      </thead>
      <tbody>
        <tr *ngFor="let invoice of invoices">
          <td>{{ invoice.amount }} €</td>
          <td>{{ translateStatus(invoice.status) }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-primary" routerLink="invoices/add">Créer une facture</button>
  </div>
  `,
  styles: [
  ]
})
export class CustomerComponent implements OnInit {

  customer: Customer|null = null;
  invoices: Invoices|null = null;

  constructor(private route: ActivatedRoute, private supabase: SupabaseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const id = +params["id"];
      this.customer = await this.supabase.getCustomer(id);
      this.invoices = await this.supabase.getInvoices(id);
    });
  }

  translateStatus(status: string) {
    return status == "SENT" ? "Envoyée" : "Payée";
  }
}
