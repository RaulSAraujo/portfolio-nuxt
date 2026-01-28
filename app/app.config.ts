export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  footer: {
    credits: `© Raul S. Araujo ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/raulsaraujo/',
        'target': '_blank',
        'aria-label': 'LinkedIn'
      },
      {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://www.instagram.com/raul.saraujo/',
        'target': '_blank',
        'aria-label': 'Instagram'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/RaulSAraujo',
        'target': '_blank',
        'aria-label': 'GitHub'
      }
    ]
  }
})
