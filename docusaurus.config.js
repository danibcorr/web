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
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  stylesheets: ["/css/custom.css"],
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
    colorMode: {
      disableSwitch: false,
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Daniel Bazo Correa",
      logo: {
        alt: "Logo",
        src: "img/logo motivo.svg",
        srcDark: "img/logo motivo dark.svg",
      },
      items: [
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
