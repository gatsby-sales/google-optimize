import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Google Optimize`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtag/js?id=G-0M4VLT4RRY`,
    `https://www.googleoptimize.com/optimize.js?id=OPT-PBML2V3`,
  ],
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
};

export default config;
