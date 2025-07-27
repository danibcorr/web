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
    locales: ["es", "en"],
    localeConfigs: {
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
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
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "machine learning, deep learning, artificial intelligence, portfolio, web",
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
      hideOnScroll: true,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Bazo Correa`,
    },
  },
};

module.exports = config;
