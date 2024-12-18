import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const organizationName = "danibcorr";
const projectName = "web";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Web page",
  url: `https://${organizationName}.github.io`,
  baseUrl: '/web/',
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/logo.ico",
  trailingSlash: false,

  organizationName,
  projectName,

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'machine-learning-wiki',
        path: 'docs/machine-learning-wiki',
        routeBasePath: 'docs/machine-learning-wiki',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
        // Esto permite ordenar los documentos por el frontmatter
        sidebarItemsGenerator: async function ({
          defaultSidebarItemsGenerator,
          ...args
        }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return sidebarItems;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'otros',
        path: 'docs/otros',
        routeBasePath: 'docs/otros',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
        // Configuración similar para la segunda wiki
        sidebarItemsGenerator: async function ({
          defaultSidebarItemsGenerator,
          ...args
        }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return sidebarItems;
        },
      },
    ],
  ],

  themeConfig:{
    colorMode: {
      // Esta opción oculta el botón de cambio de tema
      disableSwitch: true,
      defaultMode: 'light',
    },
    navbar: {
      title: "Inicio",
      logo: {
        alt: "Logo",
        src: "img/logo motivo.svg",
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: "left",
          label: "Wiki de Machine Learning",
          docsPluginId: "machine-learning-wiki",
        },
        {
          type: 'doc',
          docId: 'intro',
          position: "left",
          label: "Recursos Adicionales",
          docsPluginId: "otros",
        },        
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          type: 'localeDropdown', // Este es el ítem del selector de idioma
          position: 'right', // Posición en la barra de navegación
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `
        <p>
          Copyright © ${new Date().getFullYear()} Daniel Bazo Correa. 
          Construido con Docusaurus con la ayuda de <a href="https://github.com/LayZeeDK/github-pages-docusaurus" target="_blank" rel="noopener noreferrer">LayZeeDK</a>.
        </p>
      `,
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ['bash', 'makefile'],
    },
  },

  i18n: {
    // Idioma por defecto
    defaultLocale: 'es', 
    // Lista de idiomas disponibles
    locales: ['es', 'en'], 
    localeConfigs: {
      es: {
        label: 'Español',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
};

module.exports = config;