import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Customer, Customers } from 'src/model/customer';
import { Invoice, Invoices } from 'src/model/Invoice';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

 constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getCustomers(): Promise<Customers> {
    const { data, error } = await this.supabase.from("customers").select();

    if (error || data == null) {
      console.log(error);
      return [];
    }

    return data;
  }

  async getCustomer(id: number): Promise<Customer|null> {
    const { data, error } = await this.supabase.from("customers").select().eq("id", id).single();

    if (error || data == null) {
      console.log(error);
      return null;
    }

    return data;
  }

  async addCustomer(fullName: string, email: string): Promise<Customer|null> {
    const { data, error } = await this.supabase.from("customers").insert([{ fullName, email }]).single();

    if (error || data == null) {
      console.log(error);
      return null;
    }

    return data;
  }

  async addInvoice(id_customer: number, amount: number, status: string): Promise<Invoice|null> {
    const { data, error } = await this.supabase.from("invoices").insert([{ id_customer, amount, status}]).single();

    if (error || data == null) {
      console.log(error);
      return null;
    }

    return data;
  }

  async getInvoices(id_customer: number): Promise<Invoices>{
    const { data, error } = await this.supabase.from("invoices").select().eq("id_customer", id_customer);

    if (error || data == null) {
      console.log(error);
      return [];
    }

    return data;
  }
}
