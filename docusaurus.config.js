// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zui",
  tagline: "The Zed user interface.",
  url: "https://zui.brimdata.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  stylesheets: ["https://use.typekit.net/nll6rzm.css"],
  organizationName: "brimdata",
  projectName: "zui",
  trailingSlash: false,

  plugins: [
    // This plugin allows, e.g, docs/ to be a symlink to ../zui/docs/.
    function (context, options) {
      return {
        name: "allow-symlinks-plugin",
        configureWebpack(config, isServer, utils) {
          return { resolve: { symlinks: false } };
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) =>
            `https://github.com/brimdata/zui/edit/main/docs/${docPath}`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-CV1VB9VF13",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/zui-social-image.jpg",
      metadata: [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@brimdata" },
        { name: "twitter:image:alt", content: "Zui Desktop Application Image" },
      ],
      navbar: {
        title: "Zui",
        logo: {
          alt: "Zed Logo",
          src: "img/zed-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "README",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://zed.brimdata.io/docs",
            label: "Zed Docs",
            position: "right",
          },
          {
            href: "https://github.com/brimdata",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://www.brimdata.io/join-slack/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/brimdata",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Brim Data, Inc.",
                href: "https://www.brimdata.io/",
              },
              {
                label: "GitHub",
                href: "https://github.com/brimdata/zui",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brim Data, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "WZNIEWJ5O6",
        apiKey: "5b2387711eca356fb0d654336ae3f740",
        indexName: "zed-brimdata",
        externalUrlRegex: "zed\\.brimdata\\.io",
      },
    }),
};

module.exports = config;
