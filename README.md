<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Google Optimize w/Gatsby
</h1>

[Example site](https://googleoptimizedemo.gatsbyjs.io/)

A simple example of using Google Optimize A/B tests in a Gatsby site.

Using Optimize in your Gatsby pages should be done on a per-page basis, moreso _where_ the A/B test is happening on the page determines how you should approach it, specifically 'above-the-fold' vs 'below-the-fold'. The main differentiator: for 'above-the-fold' you need the 'anti-flicker' script provided by optimize.

`index.tsx` has the scripts to run optimize. The 'anti-flicker' script imo is a super hacky workaround for above-the-fold A/B tests where the starting HTML would be apparent before React hydrates; it includes a timeout that should be set as low as possible. For all other tests the 'anti-flicker' script should be removed.

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
