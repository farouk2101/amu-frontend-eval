import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Invoice } from 'src/model/Invoice';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-add-invoice',
  template: `
  <div class="container">
    <h2>Créer une facture</h2>
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
      <label class="form-label">Montant</label>
      <input name="amount" ngModel placeholder="500" type="number" class="form-control">
      <select name="status" ngModel="SENT" class="form-select">
        <option value="SENT">Envoyée</option>
        <option value="PAID">Payée</option>
      </select>
      <button type="submit" class="btn btn-primary">
        Enregistrer la facture
      </button>
    </form>

  </div>

  `,
  styles: [
  ]
})
export class AddInvoiceComponent implements OnInit {

  constructor(private supabase: SupabaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.route.params.subscribe(async params => {
      const id_customer = +params["id"];
      await this.supabase.addInvoice(id_customer, +f.form.value["amount"], f.form.value["status"]);
      this.router.navigate(["/" + id_customer]);
    });
  }
}
