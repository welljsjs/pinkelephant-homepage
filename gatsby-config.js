module.exports = {
  siteMetadata: {
    title: "The Pink Elephant",
    description: "Eine Sammlung von The Pink Elephant",
    keywords:
      "gatsby,math,microeconomics,computer science,code,software,maths,economics,law",
    lang: "de",
  },
  pathPrefix: `/gtc`,
  plugins: [
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "The Pink Elephant Collection",
    //     // icon: "src/images/favicon.svg",
    //     short_name: "The Pink Elephant",
    //     start_url: "/",
    //     background_color: "#ffffff",
    //     theme_color: "#161616",
    //     display: "browser",
    //   },
    // },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        // mediumAccount: "carbondesign",
        // repository: {
        //   baseUrl:
        //     "https://github.com/carbon-design-system/gatsby-theme-carbon",
        //   subDirectory: "/packages/example",
        // },
        name: "The Pink Elephant Collection",
        shortName: "The Pink Elephant",
        backgroundColor: "#ffffff",
        themeColor: "#161616",
        iconPath: "src/images/favicon.svg",
        withWebp: true, // true, false (default false)
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-mermaid",
            options: {
              launchOptions: {
                executablePath: require("chrome-paths").chrome,
              },
              language: "mermaid",
              theme: "dark",
              viewport: {
                width: 200,
                height: 200,
              },
              mermaidOptions: {
                themeCSS: ".node rect { fill: cornflowerblue; }",
              },
            },
          },
          {
            resolve: "gatsby-remark-graphviz",
          },
        ],
        remarkPlugins: [require("remark-grid-tables"), require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
  ],
};
