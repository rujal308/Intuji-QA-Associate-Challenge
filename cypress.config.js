import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    pageLoadTimeout: 120000,
  },
})
