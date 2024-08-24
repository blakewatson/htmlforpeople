---
title: "Customizing Simple.css"
permalink: "customizing-simple-css"
layout: "base.njk"
---

# Customizing Simple.css

Simple.css gives us a foundation for a nice, clean website. But it also provides a means of customization without a ton of extra work on our part. It uses a feature of CSS called _custom properties_ (often called _variables_). These variables allow us to change colors and fonts in one place with minimal coding needed.

## Peeking inside Simple.css

To find out what variables we have access to, we're going to open the `simple.css` file we added to our site previously. Don’t be deterred by how much code is in the file. We're only concerned with a little bit of it. At the top of the file, you will see some code that looks like the following.

```css
/* Global variables. */
:root,
::backdrop {
  /* Set sans-serif & mono fonts */
  --sans-font: -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir,
    "Nimbus Sans L", Roboto, "Noto Sans", "Segoe UI", Arial, Helvetica,
    "Helvetica Neue", sans-serif;
  --mono-font: Consolas, Menlo, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  --standard-border-radius: 5px;

  /* Default (light) theme */
  --bg: #fff;
  --accent-bg: #f5f7ff;
  --text: #212121;
  --text-light: #585858;
  --border: #898EA4;
  --accent: #0d47a1;
  --accent-hover: #1266e2;
  --accent-text: var(--bg);
  --code: #d81b60;
  --preformatted: #444;
  --marked: #ffdd33;
  --disabled: #efefef;
}
```

We're getting into a bit of CSS syntax here, but it’s perhaps not as scary as it first appears. Let’s break it down.

In CSS, text that's in between `/*` and `*/` is ignored by the browser. It’s just a way for you to write your own notes, called _comments_. In this case, the comments help to separate the code into related groups.

The bit that says `:root` means that the following block of code—the part between the squiggly brackets, `{}`—applies to the whole page. Ignore `::backdrop` for now.

Inside the squiggly brackets we find a list of _properties_. We've seen CSS properties in a previous chapter. For example, we used `columns: 2` on the resume page to arrange a bulleted list into two columns. In that case, `columns` is a _property_ and `2` is a _value_.

Any property that starts with `--` is a _custom property_, or _variable_. It’s a way to reuse a value in multiple places. For example, if we had a variable `--accent: blue`, we could make different elements use the `--accent` color. And if we ever decided to make the accent another color, say `red`, we could update it in the one place—by writing `--accent: red`—and every element that’s using the `--accent` variable will be updated automatically.

Looking back at the Simple.css code above, we can see that we have two groups of variables. There are properties related to the fonts being used followed by a list of color-related variables that represent what Simple calls the "default (light) theme."

We'll look at fonts later. Let’s first look at the colors.

Most of the color variables in this case are represented as hex codes. All you need to know about hex codes is they are one of several ways you can specify a color in CSS. Go to just about any search engine and search for "color picker." You’ll be greeted with a widget you can use to pick out a color and retrieve its hex code along with other formats.

Okay so how do we set our own colors? Do we just change them here inside `simple.css`? You *could* do that; it would work. But there’s a better way.

## Creating a custom stylesheet

CSS stands for _Cascading Style Sheets_. The _cascading_ bit is particularly useful. Putting it simply, it means the order of CSS rules matter—rules that come later override rules before them. For our purposes, it means we can create our own CSS file and, so long as it’s processed by the browser _after_ `simple.css` is, the rules we write there will take precedence. So we're not _changing_ `simple.css`. We're _overriding_ it.

Create a file in your `assets/css` folder called `custom.css`.

Now let’s hook it up to the site. You’ll need to do this for every page on your site, but let’s start with the homepage, the top-level `index.html` file. In the `<head>` section, we're already referencing `simple.css` with a `<link>` tag. Let’s do the same for our new `custom.css` file right underneath. Order matters here. We want our stylesheet to come after Simple's so we can override its variables.

```html
<head>
    <title>Blake's Homepage</title>
    <meta charset="utf-8">

    <link rel="stylesheet" href="css/simple.css">
    <link rel="stylesheet" href="css/custom.css">
</head>
```

{% aside 'Note' %}
This will work on the homepage but, for other pages, remember to update the file path accordingly (it'll be the same as the `simple.css` filepath).
{% endaside %}

Now, let’s add some overrides. In our `custom.css` file we'll first set up a `:root` code block similar to the one in `simple.css`. Then let’s take one of the variables, say `--bg` (the _background_ color), and set it to `red`.

```css
:root {
  --bg: red;
}
```

{% aside 'Note' %}
There’s nothing magic about the variable name, `--bg`. The creator of Simple.css decided to call it that, so that’s what we'll need to use to override it.
{% endaside %}

If you reload the page, you should see an admittedly hideous red background. Let's pick a better color. You can search for a [color picking tool](https://www.google.com/search?q=color+picker) of your choice on the web, use one of the many [named CSS colors](https://htmlcolorcodes.com/color-names/), or, if you are using Visual Studio Code, use the built-in color picker by hovering over a color value.

![](/assets/img/customizing-simple-css-1.png)

But before we start picking out colors, let's talk about dark mode.

## Dark mode

By default, Simple supports both light mode and dark mode automatically based on the visitor's system setting. You may have noticed this already if you have dark mode turned on in your own system settings. If we take a look at the `simple.css` file we can see the dark mode version of all of the variables just below the other variables we looked at previously.

```css
/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root,
  ::backdrop {
    color-scheme: dark;
    --bg: #212121;
    --accent-bg: #2b2b2b;
    --text: #dcdcdc;
    --text-light: #ababab;
    --accent: #ffb300;
    --accent-hover: #ffe099;
    --accent-text: var(--bg);
    --code: #f06292;
    --preformatted: #ccc;
    --disabled: #111;
  }
  /* Add a bit of transparency so light media isn't so glaring in dark mode */
  img,
  video {
    opacity: 0.8;
  }
}
```

This block is using a feature of CSS called _media queries_. The `@media` rule in this case is specifying that if the user has indicated a preference for dark mode, the style rules inside the block should apply.

The first of the rules sets the default color scheme to dark and then _redefines_ the color variables that it is applying to the root document (ie, the whole page). The second rule makes images and video slightly transparent so as not to appear "so glaring in dark mode."

We don't know whether the visitor to our website prefers light mode or dark mode, so we should set appropriate colors for both modes. If you want, you could copy over these two code blocks (ie, the "Global variables" block and the "Dark theme" block) from `simple.css` into your `custom.css` file and then proceed to change the color values as desired. Or you could just specify the ones you want to change. Either way, make sure you have the right colors in the right section.

## An example customization

For the default light theme I decided to stick with only named CSS colors as a fun exercise. You can think of named colors like a box of crayons—there are quite a few of them but they don't represent every possible color. But they are an easy way to refer to colors in a human-friendly way.

On the other hand, I felt the dark mode colors needed a more nuanced touch. I used the built-in color picker in Visual Studio Code to select a few specific colors. They are represented in the `rbg` format here, just because that's what the editor did by default when I selected the colors.

This is the code I put in my `custom.css` file.

```css
:root {
    --bg: mintcream;
    --border: darkslategray;
    --accent-bg: honeydew;
    --text: darkslategray;
    --accent: mediumvioletred;
    --accent-hover: mediumvioletred;
    --marked: mediumspringgreen;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
    :root,
    ::backdrop {
      color-scheme: dark;
      --bg: rgb(17, 18, 18);
      --border: rgb(80, 90, 90);
      --accent-bg: rgb(35, 35, 36);
      --text: ghostwhite;
      --accent: lightskyblue;
      --accent-hover: lightblue;
      --marked: gold;
    }
}
```

And here is a side by side preview of how the blog index page looks in light mode and dark.

![](/assets/img/customizing-simple-css-2.png)

## Choosing accessible colors

Some color combinations can make text hard to read because of limited contrast. You want to make sure that there is plenty of contrast between your text color and your background color.

You can rely on your own eyes to an extent, but everyone is different. Fortunately there are standards around how much contrast text should have. You can use a handy [contrast checker like this one](https://coolors.co/contrast-checker). You give it two colors and it will tell you if there is sufficient contrast between them.

## Changing the font

I glossed over this earlier, but you may have noticed that above the color variables defined in `simple.css`, there were a couple of variables related to fonts. One of them in particular, `--sans-font`, is responsible for most of the text on the page (the other one, `--mono-font` being used for things like showing code as I am doing in this paragraph).

If you aren't familiar, _sans-serif_ fonts are those that don't have _serifs_, the little feet-like protrusions that you find on other fonts like Times New Roman. By default, this is what Simple uses for most text on the page. But we can override that variable with whatever we want.

First, a quick explanation about fonts on the web.

## Fonts on the web

Any person visiting your website can only see fonts that are installed on their system. That means if you, the author of the webpage, specify in CSS some random font you downloaded from a website, _you_ will see that font on the webpage. But your visitors will see a _fallback_, unless they also happen to have that font installed.

That's why in CSS, you will typically see multiple fonts specified. If the first font specified isn't available on the visitor's computer or device, the browser will try the next one, and so on.

```css
body {
  /* the first font needs quotes because the name includes spaces */
  font-family: "Some Rando Font", Georgia, serif;
}
```

The above style rule is setting font for the `<body>`. The browser will first try to use "Some Rando Font." if that isn't available on the visitor's device, it will attempt to use Georgia instead. If _that_ isn't available, we've told the browser to use any `serif` font it has available.

Here's a good reference for finding [fonts that are commonly found on people's devices](https://practicaltypography.com/system-fonts.html), if you find out what options you have. You always want to provide a handful of decent fallbacks as well.

Sometimes you have a font that you _really_ want visitors to see even though you know they aren't going to have it installed on their system already. Fortunately, there is a way to deal with this. They're called _web fonts_. They are a bit too involved to cover here, but I will cover them briefly in the next chapter, [CSS basics](/css-basics).

## Changing the font

Let's say we decide to use a serif font. Even though Simple is calling the variable `--sans-font`, there is nothing magical about the variable name. We can set it to whatever we want. Let's use Georgia, which is always a pleasure to read.

We can override Simple's `--sans-font` variable inside of the `:root` block so that it will apply to the whole page.

```css
:root {
    --sans-font: Georgia, "Times New Roman", serif;
    --bg: mintcream;
    --border: darkslategray;
    --accent-bg: honeydew;
    --text: darkslategray;
    --accent: mediumvioletred;
    --accent-hover: mediumvioletred;
    --marked: mediumspringgreen;
}
```

We specified the font, Georgia, but we also provided two fallback options. For our second choice, we specified Times New Roman. Note that this one needed to be inside double quotes because the name has spaces in it.

For the third option, we are using a CSS keyword, `serif`. That tells the browser to use whatever it's default serif is. Often times that will be Times New Roman. Other keywords you have available here are `sans-serif`, `monospace`, and `cursive`, [among others](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#syntax)

Here’s a look at one of the blog posts set in Georgia.

![](/assets/img/customizing-simple-css-3.png)

## Make it yours

I chose Simple.css for this book because it makes HTML look good without any extra work. But I also chose it for its ability to be customized with a handful of CSS variables. Even though it’s just colors and fonts, there are endless possibilities for making your site unique.

I encourage you to explore the world color and experiment with different combinations. In the next bonus chapter, I'll cover even more CSS so that you can go beyond Simple and write your own styles.

[CSS basics](/css-basics)