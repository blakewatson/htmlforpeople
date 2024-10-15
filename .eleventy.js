const markdownIt = require('markdown-it');
const markdownItToc = require('markdown-it-table-of-contents');
const markdownItAnchor = require('markdown-it-anchor');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
  })
    .use(require('markdown-it-block-embed'))
    .use(markdownItToc, { includeLevel: [1, 2, 3] })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
    });

  eleventyConfig.setLibrary('md', md);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPairedShortcode('aside', (content, label) => {
    return `<aside class="aside"><p class="aside-label">${label}</p>${md.render(content)}</aside>`;
    3;
  });

  eleventyConfig.addShortcode('current', (slug, currentSlug) => {
    console.log('slug', slug);
    console.log('currentSlug', currentSlug);
    return slug === currentSlug ? 'aria-current="page"' : '';
  });

  // if NO_RELOAD node environment variable is found, disable live reloading
  if (process.env.NO_RELOAD) {
    eleventyConfig.setServerOptions({
      liveReload: false,
    });
  }

  return {
    dir: {
      input: 'src',
    },
  };
};
