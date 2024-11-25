export default defineNuxtConfig({
  // Habilita as ferramentas de desenvolvimento
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:3333', // Define a URL base da API
    },
  },

  compatibilityDate: '2024-11-22',
});