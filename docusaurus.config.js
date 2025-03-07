import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const organizationName = "danibcorr";
const projectName = "web";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Web",
  url: `https://${organizationName}.github.io`,
  baseUrl: "/web/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",
  trailingSlash: true,

  organizationName,
  projectName,

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
    localeConfigs: {
      es: {
        label: "Español",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          path: "blog",
          routeBasePath: "blog",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "machine-learning",
        path: "docs/machine-learning",
        routeBasePath: "docs/machine-learning",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "others-3d-printing",
        path: "docs/others/3d-printing",
        routeBasePath: "docs/others/3d-printing",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "others-music-sound",
        path: "docs/others/music-sound",
        routeBasePath: "docs/others/music-sound",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "others-telecom",
        path: "docs/others/telecom",
        routeBasePath: "docs/others/telecom",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "description",
        content: "Documentation and Blog on Web and Machine Learning.",
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      disableSwitch: false,
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Inicio",
      logo: {
        alt: "Logo",
        src: "img/logo motivo.svg",
        srcDark: "img/logo motivo dark.svg",
      },
      items: [
        {
          label: "Machine Learning",
          position: "left",
          items: [
            {
              type: "doc",
              docId: "intro",
              label: "Machine Learning Wiki",
              docsPluginId: "machine-learning",
            },
            {
              to: "blog",
              label: "Posts",
            },
          ],
        },
        {
          label: "Otros",
          position: "left",
          items: [
            {
              type: "doc",
              docId: "music",
              label: "Música/Sonido",
              docsPluginId: "others-music-sound",
            },
            {
              type: "doc",
              docId: "3d-printing",
              label: "Impresión 3D",
              docsPluginId: "others-3d-printing",
            },
            {
              type: "doc",
              docId: "telecom",
              label: "Redes Móviles",
              docsPluginId: "others-telecom",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Bazo Correa. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["bash", "makefile"],
    },
  },
};

module.exports = config;
