/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview', 'getting-started/use-cases'],
    },
    {
      type: 'category',
      label: 'Monitoring',
      items: ['monitoring/monitoring'],
    },
  ],

  api: [
    {
      type: 'category',
      label: 'API Documentation',
      items: ['api/exchange', 'api/usage'],
    },
  ],

};

export default sidebars;
