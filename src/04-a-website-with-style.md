---
title: 'A website with style'
summary: 'Learn about CSS and see how to link an external stylesheet like Simple.css to your website.'
permalink: 'a-website-with-style/'
tags: chapter
layout: 'chapter.njk'
---

# A website with style

I think our website is nice. Its quiet simplicity is welcoming in a world full of distractions. However, it does look very plain and _un-styled_.

We’re seeing the browser’s default styles—how it displays text and images without further instructions on how they should look. But most websites you visit don’t look this way. They have been designed to look differently. Their designers have given instructions for what fonts to use, what colors, and what page layout.

In the land of HTML, we are only concerned with _what things are_—this thing is a heading, this other thing is a paragraph, here is an image, and so on. To define _how things look_ the browser uses HTML’s sibling language, Cascading Style Sheets, or CSS.

One way to include CSS is by using the `<style>` tag and putting CSS code directly into it. For example, consider the following:

```html
<style>
  body {
    font-family: 'Gill Sans', sans-serif;
  }
</style>
```

If you included this code somewhere on your webpage, it would change the font of the `<body>` tag—in effect, all of the visible text on the page. This CSS _ruleset_ says, "Set the body font to Gill Sans or, if that font isn't available, set it to whatever your default sans-serif font is."

{% aside 'Note about fonts' %}
Serif fonts look like this. They have small strokes, called _serifs_, that protrude a bit from the larger ones. You will typically find these in books and newspapers.

<p class="sans-serif">Sans-serif fonts are those <em>without</em> serifs and typically have a more simplified shape to their serif counterparts. They look like this. They are popular on the web and for user interfaces.</p>

<p class="mono">Monospaced fonts look kind of like typewriter text. Each letter takes up an equal amount of width, which is handy if you want to line things up. They are a popular choice for displaying computer code.</p>
{% endaside %}

That's a totally valid way to use CSS. But you will often find people putting their style rules in a separate file. Something like `styles.css`. The main reason for doing that is that it makes it easier to share styles across multiple pages—it prevents you from copying and pasting your `<style>` tag around to each page you create.

CSS is a powerful language. Every website you see is using it. All of those intricate designs, much of the animation, and the positioning of images and typography—that's CSS.

However, there is also a learning curve to CSS. And while I totally encourage you to explore CSS, this book is _HTML_ for People—I want to keep the focus on HTML. But that's okay! We can still use CSS to make our website look nice without writing everything ourselves.

{% aside 'Note' %}
If you’re interested in learning more about CSS, that’s great! I have [a bonus chapter](/css-basics) at the end of this book that introduces more CSS and links to other resources.
{% endaside %}

## CSS frameworks

Even professional web developers who know CSS will use pre-written CSS as a starting point. We will do something similar. Some CSS frameworks are made for web developers—they include a lot of bells and whistles and require that you write your HTML code in a particular way. However, other frameworks are designed for simpler websites. They make your HTML look nice without you doing much extra work. They're called _classless CSS frameworks_.

For our purposes, that’s perfect. We'll use one called [Simple.css](https://simplecss.org/). But here are some other ones you might want to look at. They’re similar in spirit but with different styles.

- [Water.css](https://perma.cc/5936-VK4J)
- [Sakura](https://perma.cc/F6E4-EU58)
- [Pico](https://picocss.com/)

These will make your HTML look nice and give you a great starting point for a basic website. Get comfortable using stuff other people have made because there’s a lot of great stuff out there!

## Simple.css

I encourage you to check out the [Simple.css website](https://simplecss.org/), particularly the [demo page](https://simplecss.org/demo), as it shows you how to use different HTML elements and what they look like with Simple. Let’s download Simple.css.

The [Simple.css docs](https://perma.cc/XA5E-E59Q) give us a few ways to get started, but for simplicity’s sake (see what I did there?), I’ll give you the URL to the CSS file:

<https://cdn.simplecss.org/simple.css>

Don’t be intimidated by all the code in there! You don’t need to understand it right now (or ever, really). Just hit _File > Save Page As_ in your browser (_Command-S_ on macOS and _Control-S_ on Windows) and save this file in your website project folder where your `index.html` file is.

Alright, you’ve saved it, and we'll add it to the page soon. But first, let's do a little housekeeping.

## Organizing our files

So far, we only have three files—our webpage, an image file, and the `simple.css` file we just downloaded. But we'll add more files soon. Let’s create a couple of folders and move things around. We want our new file structure to look like this:

- `css` folder
  - `simple.css`
- `images` folder
  - `space.jpg`
- `index.html`

Nice and clean. Using Visual Studio Code, you can create files and folders directly in the sidebar. Hover your mouse over your files, and you’ll see these buttons.

<img src="/assets/img/vscode-new-folder.webp" alt="Screenshot of VS Code window with a folder named 'MY-SITE' highlighted. Inside the folder, there are two files: 'index.html' and 'space.jpg.' A large red arrow points to the 'New Folder' button in the top-right corner of the editor." style="max-width: 450px">

Once you make the changes, if you reload the page in the browser, you will notice that our image no longer works. Notice how the browser falls back to showing the `alt` text we provided in place of the image.

![Screenshot of "Blake's Homepage." It includes sections: a brief statement about the author, favorite board games, and a guide on how to make a website. The page has plain black text on a white background. One image is present but it is not functioning correctly—the image alt text displays instead, "Photograph of space with stars and stardust."](/assets/img/a-website-with-style-1.webp)

This is because we moved the `space.jpg` image file relative to our homepage. It’s now located in a folder called `images`. We can fix this by updating the image's `src` value. Add the folder name and a slash before the filename.

```html
<img src="images/space.jpg" alt="Photograph of space with stars and stardust.">
```

{% aside 'More about URLs' %}
When we need to provide the location of files in our website—whether it’s a link to another page or the location of an image—we can provide what’s called a _relative URL_.

When you’re on the `index.html` page, you can think of that as your current location. If you want to reference an image, you need to tell the browser how to find it. A relative URL is one way to do that. It describes how to get "from here to there," so to speak.

Similar to how a URL in your browser works, you use slashes to separate levels in the URL. The URL, `images/space.jpg`, means "look for a folder called `images` at the current level, then inside there, look for a file called `space.jpg`."
{% endaside %}

## Adding Simple.css to the page

We can add a _stylesheet_ to our page similarly to how we added the image. We'll use a `<link>` tag to reference the CSS file. We'll put it in our site's `<head>` tag.

```html
<head>
  <title>Blake's Homepage</title>
  <meta charset="utf-8">

  <link rel="stylesheet" href="css/simple.css">
</head>
```

The `<link>` tag is _self-closing_—there isn't a closing tag. We need to give it two _attributes_. `rel` specifies the relationship the file we're linking has with our webpage. CSS files are called _stylesheets_ so we provide that as the relationship (singular). The `href` is where we specify the file, including the folder path.

{% aside 'Note' %}
What people typically call "links" on a webpage—clickable text or images—are made with the `<a>` tag, as we saw previously. They typically refer to a destination to navigate to when clicked.

The `<link>` tag specifies a file we want to link to our page and what that file's relationship is. We are using it to connect a stylesheet. Another typical relationship is to define an icon for the site, for example.
{% endaside %}

Just like that, our website transforms. We now see a centered page, larger text, and a sans-serif font.

![Screenshot of "Blake's Homepage" with updated styling using Simple.css. The typography has changed: the title "Blake's Homepage" is now bold and larger, creating a more prominent header. The previously broken image now displays correctly, showing a colorful photograph of a starry space scene. The text is more visually structured with better spacing, and the sections are clearly defined with bold headings for "Favorite board games" and "How to make a website." The overall layout appears cleaner and more organized with improved readability.](/assets/img/a-website-with-style-2.webp)

## Adding a header, footer, and main content

We can see that the Simple.css file took immediate effect. But things will look even better once we add some sections to our website that Simple.css expects—a `<header>` for the website's title and `<main>` for the main content area. We didn't use these earlier—they aren't required—but using them is a best practice.

And this is totally optional, but we might as well add a `<footer>` too while we're at it. Sometimes, people put copyright info here. Sometimes, people have large footers with lots of links to things. Sometimes, it's just their name. I'll keep it simple, but you can add what you want here.

So we'll put our website's name in a `<header>` tag and our main content in the `<main>` tag. Then, we'll add a `<footer>` with a bit of info.

```html
<body>
  <header>
    <h1>Blake's Homepage</h1>
  </header>

  <main>PAGE CONTENT GOES HERE</main>

  <footer>
    <p>Made with ❤️ and ☕️ by Blake Watson.</p>
  </footer>
</body>
```

After these adjustments, our website title has some special styling, and paragraphs and lists are spaced more appropriately.

![Screenshot of "Blake's Homepage" with additional styling enhancements. The page now includes a clear header at the top with a light background color, making the title "Blake's Homepage" stand out more. The spacing between sections has been improved for better readability, and a new footer has been added at the bottom, containing the text. This footer provides a personalized touch. The overall layout feels more structured and visually balanced](/assets/img/a-website-with-style-3.webp)

{% aside 'Note' %}
If you are following along and notice that your website has a dark background with light text, that's okay! Simple.css recognizes if you (the site's visitor) have your system in dark mode and, if so, uses a dark theme for the website. To override this behavior, check out the bonus chapter [Customizing Simple.css](/customizing-simple-css).
{% endaside %}

## Update the live site

Let’s put our new stuff online! In Neocities, you can't upload folders using the upload button. You either need to create the folder in the dashboard by clicking "New Folder, " or you can drag the folder from your computer to the drop zone.

![Screenshot of a Neocities dashboard for "Blake's Homepage." The page shows file management options, including uploading files, creating new files, and new folders. Blake's webpage URL and editing options are visible, highlighted by a red arrow pointing at the "New Folder" button.](/assets/img/a-website-with-style-4.webp)

It's probably easier to drag the folders over, but if you create them manually, you must open each folder and upload its contents. Once a folder is created, you can hover your mouse over it to see options. You’ll want to click "Manage" to open the folder. From there, you can click "Upload" to upload the appropriate files to that folder.

Move existing files by renaming them. For example, if I want to move `space.jpg` down into the images folder, I can click "Rename" and include the folder in the path: `images/space.jpg`.

![A pop-up window titled "Rename / Move" shows a file path "images/space.jpg" being edited.](/assets/img/a-website-with-style-5.webp)

It's cumbersome but not too bad. Whichever way you do it, ensure the files in Neocities match what you have on your computer.

## Up next

We only added a little in terms of writing code in this chapter, but we set ourselves up for success by getting organized, acquiring some styles, and sectioning our webpage.

The rest of this web book will focus on building our website. In the next chapter, we'll add an About page.
