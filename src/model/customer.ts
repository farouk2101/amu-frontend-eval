// src/app/model/client.ts

// Représentons une tâche par tout objet qui aurait :
export type Customer = {
    id: number;
    fullName: string;
    email: string;
}

export type Customers= Customer[];