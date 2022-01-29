// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://localhost:4200/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://xiyiuivmttxsswuhyvxr.supabase.co/rest/v1";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJzZXJ2aWNlX3JvbGUiLCJpYXQiOjE2NDIxNDk2MDEsImV4cCI6MTk1NzcyNTYwMX0.5XBAIs97Mq0apn74W_UqAH0WxE4q0bI8jyx5ZVMvm3c";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices?id=gt.-1",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers?id=gt.-1",
    headers: {
      apiKey: API_KEY,
    },
  });
};
