export type Invoice = {
    id: number;
    id_customer: number;
    amount: number;
    status: string;
}

export type Invoices = Invoice[];