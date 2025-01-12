import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coding Bareng Bootcamp",
  description: "Vitepress doc",
  base: '/Coding-Bareng-Bootcamp/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Join Us', link: '/join-us' },
      { text: 'GitHub', link: 'https://github.com/Coding-Bareng-Bootcamp' }
    ],

    sidebar: [
      {
        text: 'Curriculums',
        items: [
          { text: 'Frontend', link: '/frontend-curriculum' },
          { text: 'Backend', link: '/backend-curriculum' },
          { text: 'UI/UX', link: '/ui-ux' },
          { text: 'Scripting', link: '/scripting' },
          { text: 'Cybersecurity', link:'/cybersecurity' }
        ]
      },
      { text: 'About Us', link: '/about' },
      { text: 'Join', link: '/join' },
      { text: 'Terms & Contidions', link: '/terms-conditions' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Coding-Bareng-Bootcamp' }
    ]
  }
})
