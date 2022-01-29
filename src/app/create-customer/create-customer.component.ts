import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
selector: 'app-create-customer',
template: `
<div class="container">
  <h1>Nouveau Client</h1>
  <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
    <div>
      <label class="form-label">Nom Complet</label>
      <input name="fullName" ngModel placeholder="Jean Dupont" type="text" class="form-control">
    </div>
    <div>
      <label class="form-label">Email</label>
      <input name="email" ngModel placeholder="jean.dupont@exemple.com" type="email" class="form-control">
    </div>
    <div>
      <button type="submit" class="btn btn-primary">
        Enregistrer
      </button>
    </div>
  </form>
</div>

`,
styles: [
]
})
export class CreateCustomerComponent implements OnInit {

  constructor(private supabase: SupabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(f: NgForm) {
    await this.supabase.addCustomer(f.form.value["fullName"], f.form.value["email"]);
    this.router.navigate(["/"]);
  }
}
