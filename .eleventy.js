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
    return slug === currentSlug ? 'aria-current="page"' : '';
  });

  // if NO_RELOAD node environment variable is found, disable live reloading
  if (process.env.NO_RELOAD) {
    eleventyConfig.setServerOptions({
      liveReload: false,
    });
  }

  // sort chapter collection by fileSlug
  eleventyConfig.addCollection('sortedChapter', function (collection) {
    return collection
      .getFilteredByTag('chapter')
      .sort(
        (a, b) =>
          parseInt(a.fileSlug.substr(0, 2)) - parseInt(b.fileSlug.substr(0, 2)),
      );
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
