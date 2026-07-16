import { defineConfig } from 'vitepress'

const baseUrl = 'https://brand-guide.covalida.com'
const description =
  'The official COVALIDA brand guide — logo, color, typography, iconography and digital application standards for consistent, on-brand design.'

export default defineConfig({
  lang: 'en-US',
  title: 'Brand Guide',
  titleTemplate: ':title | COVALIDA',
  description,
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    image: { lazyLoading: true },
  },

  sitemap: {
    hostname: baseUrl,
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#008080' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'COVALIDA Brand Guide' }],
    ['meta', { name: 'og:title', content: 'COVALIDA — Brand Guide' }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { name: 'og:image', content: `${baseUrl}/og-image.png` }],
    ['meta', { name: 'og:url', content: baseUrl }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'COVALIDA — Brand Guide' }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: `${baseUrl}/og-image.png` }],
  ],

  themeConfig: {
    logo: { light: '/brand/covalida-icon.svg', dark: '/brand/covalida-icon.svg' },
    siteTitle: 'Brand Guide',

    nav: [
      { text: 'Overview', link: '/' },
      {
        text: 'Foundations',
        items: [
          { text: 'Brand & Values', link: '/brand/' },
          { text: 'Logo', link: '/logo/' },
          { text: 'Color', link: '/colors/' },
          { text: 'Typography', link: '/typography/' },
          { text: 'Iconography', link: '/iconography/' },
          { text: 'Imagery', link: '/imagery/' },
        ],
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture/' },
          { text: 'Covalida Core', link: '/architecture/core' },
          { text: 'Covalida Tech & Trust', link: '/architecture/tech-trust' },
          { text: 'Covalida Traceability', link: '/architecture/traceability' },
          { text: 'Covalida Circularity', link: '/architecture/circularity' },
          { text: 'Covalida Training', link: '/architecture/training' },
          { text: 'Accreditation & Trust', link: '/architecture/accreditation' },
        ],
      },
      {
        text: 'Application',
        items: [
          { text: 'Digital Media', link: '/digital/' },
          { text: 'UI Components', link: '/components/' },
          { text: 'Accessibility', link: '/accessibility/' },
        ],
      },
      { text: 'Downloads', link: '/downloads/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Overview', link: '/' }],
      },
      {
        text: 'Brand Foundations',
        items: [
          { text: 'Brand & Values', link: '/brand/' },
          { text: 'Logo', link: '/logo/' },
          { text: 'Logo Variants', link: '/logo/variants' },
          { text: 'Construction & Clear Space', link: '/logo/construction' },
          { text: 'Misuse', link: '/logo/donts' },
        ],
      },
      {
        text: 'Color System',
        items: [
          { text: 'Palette', link: '/colors/' },
          { text: 'Scales & Tints', link: '/colors/scales' },
          { text: 'Semantic Colors', link: '/colors/semantic' },
          { text: 'Methodology', link: '/colors/methodology' },
        ],
      },
      {
        text: 'Typography',
        items: [
          { text: 'Type System', link: '/typography/' },
          { text: 'Hierarchy', link: '/typography/hierarchy' },
          { text: 'Font Stack', link: '/typography/font-stack' },
        ],
      },
      {
        text: 'Iconography',
        items: [{ text: 'Symbol & Icon Set', link: '/iconography/' }],
      },
      {
        text: 'Imagery',
        items: [{ text: 'Photography Direction', link: '/imagery/' }],
      },
      {
        text: 'Brand Architecture',
        items: [
          { text: 'The Five Pillars', link: '/architecture/' },
          { text: 'Covalida Core', link: '/architecture/core' },
          { text: 'Covalida Tech & Trust', link: '/architecture/tech-trust' },
          { text: 'Covalida Traceability', link: '/architecture/traceability' },
          { text: 'Covalida Circularity', link: '/architecture/circularity' },
          { text: 'Covalida Training', link: '/architecture/training' },
          { text: 'Accreditation & Trust', link: '/architecture/accreditation' },
        ],
      },
      {
        text: 'Digital Applications',
        items: [
          { text: 'Overview', link: '/digital/' },
          { text: 'Web & UI', link: '/digital/web' },
          { text: 'Social Media', link: '/digital/social-media' },
          { text: 'Email & Newsletter', link: '/digital/email' },
          { text: 'Trust Center', link: '/digital/trust-center' },
        ],
      },
      {
        text: 'UI Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'Buttons', link: '/components/buttons' },
          { text: 'Badges & Status', link: '/components/badges' },
          { text: 'Forms', link: '/components/forms' },
        ],
      },
      {
        text: 'Accessibility',
        items: [
          { text: 'WCAG 2.1', link: '/accessibility/' },
          { text: 'Contrast Checks', link: '/accessibility/contrast' },
        ],
      },
      {
        text: 'Resources',
        items: [
          { text: 'Downloads', link: '/downloads/' },
          { text: 'Design Tokens', link: '/downloads/tokens' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/covalida/COM-CorporateIdentity' },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/covalida/COM-CorporateIdentity/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
    },

    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',

    footer: {
      message:
        'Brand assets © COVALIDA Compliance. Site code licensed under <a href="https://github.com/covalida/COM-CorporateIdentity/blob/main/LICENSE">MIT</a>.',
      copyright: `© ${new Date().getFullYear()} COVALIDA Compliance. All rights reserved.`,
    },
  },
})
