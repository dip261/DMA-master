import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '717'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c58'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '003'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'aa2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '27a'),
    exact: true
  },
  {
    path: '/help',
    component: ComponentCreator('/help', '9f3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ce8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c55'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '991'),
            routes: [
              {
                path: '/docs/api/exchange',
                component: ComponentCreator('/docs/api/exchange', '977'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/docs/api/usage',
                component: ComponentCreator('/docs/api/usage', '086'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/docs/getting-started/overview',
                component: ComponentCreator('/docs/getting-started/overview', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/use-cases',
                component: ComponentCreator('/docs/getting-started/use-cases', '09e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Monitoring/',
                component: ComponentCreator('/docs/Monitoring/', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8e2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
