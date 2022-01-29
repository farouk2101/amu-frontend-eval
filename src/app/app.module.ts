import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: CreateCustomerComponent },
  { path: ":id", component: CustomerComponent },
  { path: ":id/invoices/add", component: AddInvoiceComponent }
]

@NgModule({
  declarations: [
    AppComponent, CreateCustomerComponent, HomeComponent, NavbarComponent, CustomerComponent, AddInvoiceComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
