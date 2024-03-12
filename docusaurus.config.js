import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Enterprise DMA Platform',
  tagline: 'Sub title',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://capitalOne',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CapitalOne', // Usually your GitHub org/user name.
  projectName: 'DMA', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/',
      navbar: {
        title: 'DMA',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/getting-started/overview', label: 'Docs', position: 'right'},
          {to: '/docs/api/exchange', label: 'API', position: 'right'},
          {to: '/help', label: 'Help', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'FAQ',
                to: '/docs/intro',
              },
              {
                label: 'OverView',
                to: '/docs/intro',
              }
            ],
          },
          {
            items: [
              {
                label: 'Slack Channel',
                to: '/docs/intro',
              },
              {
                label: 'Email Our Product Manager',
                to: '/docs/intro',
              },
            ],
          },
          {
            items: [
              {
                label: 'Github',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Enterprise DMA Platform`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
