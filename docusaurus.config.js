import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const organizationName = "danibcorr";
const projectName = "web";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Daniel Bazo",
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
    "/css/custom.css",
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
        id: "machine_learning",
        path: "docs/machine_learning",
        routeBasePath: "docs/machine_learning",
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
        id: "others_3d_printing",
        path: "docs/others/3d_printing",
        routeBasePath: "docs/others/3d_printing",
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
        id: "others_music_sound",
        path: "docs/others/music_sound",
        routeBasePath: "docs/others/music_sound",
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
        id: "others_telecom",
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
        name: "keywords",
        content:
          "machine learning, deep learning, artificial intelligence, python programming, data science, neural networks, MLOps, software engineering, AI blog, tech tutorials, programming guides, model deployment, data engineering",
      },
      {
        name: "description",
        content:
          "Comprehensive Machine Learning Engineering blog featuring tutorials, best practices, and insights on AI, deep learning, Python programming, and modern software development techniques.",
      },
      {
        name: "author",
        content: "Daniel Bazo Correa",
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
              docsPluginId: "machine_learning",
            },
            {
              to: "blog",
              label: "Posts",
            },
          ],
        },
        {
          label: "Otros Intereses",
          position: "left",
          items: [
            {
              type: "doc",
              docId: "music",
              label: "Música/Sonido",
              docsPluginId: "others_music_sound",
            },
            {
              type: "doc",
              docId: "3d_printing",
              label: "Impresión 3D",
              docsPluginId: "others_3d_printing",
            },
            {
              type: "doc",
              docId: "mobile_network_architecture",
              label: "Redes Móviles",
              docsPluginId: "others_telecom",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Bazo Correa`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["bash", "makefile"],
    },
  },
};

module.exports = config;
