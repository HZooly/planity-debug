export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://d2skjte8udjqxw.cloudfront.net/widget/production/polyfills.latest.js' },
        { src: 'https://d2skjte8udjqxw.cloudfront.net/widget/production/app.latest.js' }
      ]
    },
  },
})
