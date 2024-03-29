import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Probot",
  description: "A framework for building GitHub apps",
  base: "/probot-ng",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/probot-ng/probot-ng' },
    ],
    editLink: {
      pattern: 'https://github.com/probot-ng/probot-ng/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      // TODO: Use Algolia?
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/introduction' },
      { text: 'API', link: '/api' },
      { text: 'Apps', link: '/apps' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Hello World', link: '/hello-world' },
          { text: 'Developing an app', link: '/development' },
          { text: 'Receiving webhooks', link: '/webhooks' },
          { text: 'Interacting with GitHub', link: '/github-api' },
        ]
      },
      {
        text: "Advanced",
        items: [
          { text: "Configuration", link:  "/configuration" },
          { text: "Testing", link:  "/testing" },
          { text: "Simulate receiving webhooks", link:  "/simulating-webhooks" },
          { text: "Logging", link:  "/logging" },
          { text: "Deployment", link:  "/deployment" },
          { text: "HTTP routes", link:  "/http" },
          { text: "Pagination", link:  "/pagination" },
          { text: "Extensions", link:  "/extensions" },
          { text: "Persistence", link:  "/persistence" },
          { text: "Best practices", link:  "/best-practices" },
        ],
      },
      {
        text: "Upgrading from Probot",
        link: "/upgrading"
      }
    ],
  }
})
