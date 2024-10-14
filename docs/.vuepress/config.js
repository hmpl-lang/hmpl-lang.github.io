import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: "en-US",
  title: "HMPL.js",
  description: "Template language for displaying UI from server to client",
  port: 3000,

  theme: hopeTheme({
    logo: "/images/logo.svg",
    darkmode: "disable",
    navbar: [
      // NavbarLink
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Docs",
        link: "introduction.md",
      },
      {
        text: "GitHub",
        link: "https://github.com/hmpl-lang/hmpl",
      },
      {
        text: "Examples",
        link: "examples.md",
      },
      {
        text: "Blog",
        link: "https://hmpl-lang.github.io/blog",
      },
      {
        text: "Why hmpl?",
        link: "#why-hmpl",
      },
    ],

    iconAssets: "fontawesome-with-brands",

    sidebar: [
      {
        text: "Introduction",
        link: "introduction.md",
      },
      {
        text: "Installation",
        link: "installation.md",
      },
      {
        text: "Getting started",
        link: "getting-started.md",
      },
      {
        text: "hmpl",
        link: "hmpl.md",
        children: [
          {
            text: "compile",
            link: "hmpl.md#compile",
          },
          {
            text: "stringify",
            link: "hmpl.md#stringify",
          },
          {
            text: "Concept of context",
            link: "hmpl.md#concept-of-context",
          },
        ],
      },
      {
        text: "Request",
        link: "request.md",
        children: [
          {
            text: "src",
            link: "request.md#src",
          },
          {
            text: "method",
            link: "request.md#method",
          },
          {
            text: "after",
            link: "request.md#after",
          },
          {
            text: "indicators",
            link: "request.md#indicators",
          },
          {
            text: "repeat",
            link: "request.md#repeat",
          },
          {
            text: "memo",
            link: "request.md#memo",
          },
          {
            text: "autoBody",
            link: "request.md#autobody",
          },
          {
            text: "initId",
            link: "request.md#initid",
          },
        ],
      },
      {
        text: "Types",
        link: "types.md",
      },
      {
        text: "Webpack",
        link: "webpack.md",
      },
      {
        text: "Examples",
        link: "examples.md",
      },
      {
        text: "About",
        collapsible: false,
        expanded: true,
        prefix: "/about/",
        children: [
          {
            text: "Discussion and development of an open-source project",
            link: "discussion-and-development-of-an-open-source-project.md",
          },
          {
            text: "GitHub repository with examples",
            link: "github-repository-with-examples.md",
          },
          {
            text: "Server-side rendering",
            link: "server-side-rendering.md",
          },
        ],
      },
      {
        text: "Changelog",
        link: "changelog.md",
      },
    ],
    plugins: {
      search: true,
      backToTop: false,
      shiki: {
        langAlias: {
          hmpl: "html",
        },
        theme: "min-light",
      },
    },
  }),
  head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
  bundler: viteBundler(),
});