const markdownIt = require('markdown-it');
const markdownItToc = require('markdown-it-table-of-contents');
const markdownItAnchor = require('markdown-it-anchor');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
  })
    .use(markdownItToc, { includeLevel: [1, 2, 3] })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
    })

  eleventyConfig.setLibrary('md', md);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPairedShortcode('aside', (content, label) => {
    return `<aside class="aside"><p class="aside-label">${label}</p>${md.render(content)}</aside>`;3
  })

  return {
    dir: {
      input: 'src'
    }
  }
}