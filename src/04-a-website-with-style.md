---
title: "A website with style"
permalink: "a-website-with-style/"
layout: "base.njk"
---

# A website with style

I think our website is nice. It has a quiet simplicity to it that is welcoming in a world full of distractions. On the other hand it does look very plain and _un-styled_.

We’re seeing the browser’s default styles—the way it displays text and images when it hasn’t been given any further instruction on how they should look. But most websites you visit don’t look this way. They have been designed to look differently. They have been given instructions for what fonts to use, what colors, what page layout.

In the land of HTML, we are only concerned with _what things are_—this thing is a heading, this other thing is a paragraph, here is an image, and so on. To define *how things look* the browser uses HTML’s sibling language, Cascading Style Sheets, or CSS.

One way to include CSS is by using the `<style>` tag and putting CSS code directly into it. For example, consider the following:

```html
<style>
	body {
		font-family: "Gill Sans", sans-serif
	}
</style>
```

If you included this code somewhere on your webpage, it would change the font of the `<body>` tag—in effect all of the visible text on the page. This CSS _ruleset_ is basically saying, "Set the font of the body to Gill Sans or, if that font isn't available, set it to whatever your default sans-serif font is."

That's a totally valid way to do CSS. But often you will find that folks opt to put their style rules in a separate file. Something like `styles.css`. The main reason for doing that is that it makes it easier to share styles across multiple pages—it prevents you needing to copy and paste your `<style>` tag around to each page you create.

CSS is a powerful language. Every website you see is using it. All of those intricate designs, much of the animation, and the positioning of images and typography—that's CSS.

But there is also a learning curve to CSS. And while I totally encourage you to explore it, this book is _HTML_ for People—I want to keep the focus on HTML. But that's okay! We can still use CSS to make our website look nice without having to write all of it ourselves.

**Note:** If you’re interested in diving more into CSS, that’s great! I have [a bonus chapter](/css-basics) at the end of this book that introduces more CSS and links out to other resources.

## CSS frameworks

Even professional web developers who know CSS often use pre-written CSS as a starting point. We are going to do something similar. Some CSS frameworks are made for web developers—they include a lot of bells and whistles and require that you write your HTML code in a very specific way. But there are other frameworks that are aimed for simpler websites. They make your HTML look nice without you having to do much extra work. They're called *classless CSS frameworks*.

For our purposes, that’s perfect.  we'll use one called [Simple.css](https://simplecss.org/). But here are some other ones you might want to take a look at. They’re similar in spirit but with different styles.

- [Water.css](https://watercss.kognise.dev/)
- [Sakura](https://oxal.org/projects/sakura/)
- [Pico](https://picocss.com/)

All of these will make your HTML look nice and give you a great starting point for a basic website. Get used to using stuff other people have made because there’s a lot of great stuff out there!

## Simple.css

I encourage you to check out the [Simple.css website](https://simplecss.org/), particularly the [demo page](https://simplecss.org/demo), as it shows you how to use all the different HTML elements and what they look like with Simple. Let’s download Simple.css.

The [Simple.css docs](https://github.com/kevquirk/simple.css/wiki/Getting-Started-With-Simple.css) give us a few ways to get started, but for simplicity’s sake (see what I did there) I’m going to give you the URL to the CSS file:

<https://cdn.simplecss.org/simple.css>

Don’t be intimidated by all the code in there! You don’t need to understand it right now (or ever, really). Just hit _File > Save Page As_ in your browser (_Command-S_ on macOS and _Control-S_ on Windows) and save this file in your website project folder where your `index.html` file is.

Alright, you’ve got it saved and we'll add it to the page in a moment. But first let's do a little housekeeping.

## Organizing our files

So far, we only have three files—our webpage, an image file, and the `simple.css` file we just downloaded. But we're going to be adding more files soon. Let’s create a couple of folders and move things around. We want our new file structure to look like this:

- `css` folder
	- `simple.css`
- `images` folder
	- `space.jpg`
- `index.html`

Nice and clean. If you’re using Visual Studio Code, you can create files and folders directly in the sidebar. Hover your mouse over your files and you’ll see these buttons.

![](/assets/img/vscode-new-folder.png)

Once you make the changes, if you reload the page in the browser you will notice that our image is no longer working. Notice how the browser falls back to showing the `alt` text we provided in place of the image.

![](/assets/img/a-website-with-style-1.png)

We can fix this by updating the image's `src` value. Add the folder name and a slash before the filename.

```html
<img src="images/space.jpg" alt="Photograph of space with stars and stardust.">
```

## Adding Simple.css to the page

We can add a _stylesheet_ to our page similar to how we added the image. We'll use a `<link>` tag which will reference the CSS file. We'll put it in the `<head>` of our site.

```html
<head>
	<title>Blake's Homepage</title>
	<meta charset="utf-8">

	<link rel="stylesheet" href="css/simple.css">
</head>
```

The `<link>` tag is _self-closing_—there isn't a closing tag. We need to give it two _attributes_. `rel` specifies what relationship the file we're linking has with our webpage. CSS files are called _stylesheets_ so we provide that as the relationship (singular). The `href` is where we specify the file, including the folder path.

**Note:** One point I will clarify because it is a little confusing. What people typically call "links" on a webpage—clickable text or images—are made with the `<a>` tag as we saw previously. They typically refer to a destination to navigate to when clicked. The `<link>` tag is specifying a file that we want to link to our page and what that file's relationship is. We are using it to connect a stylesheet. Another common relationship is to define an icon for the site, for example.

Just like that, our website is transformed. We are now seeing a centered page, larger text, and a sans-serif font.

![](/assets/img/a-website-with-style-2.png)

## Adding a header, footer, and main content

We can see that the Simple.css file took immediate effect. But things will look even better once we add some sections to our website that Simple.css expects—a `<header>` for the title of the website, and `<main>` for the main content area. We didn't use these earlier, and they are not required, but using them is a best practice.

And this is totally optional, but we might as well add a `<footer>` too while we're at it. Sometimes people will put copyright here. Sometimes people have large footers with lots of links to things. Sometimes just their name. I'm going to keep it simple but you can add what you want here.

So we'll put our website's name in a `<header>` tag and put our main content in the `<main>` tag. Then we will add a `<footer>` with a little info.

```html
<body>
	<header>
		<h1>Blake's Homepage</h1>
	</header>

	<main>
		PAGE CONTENT GOES HERE
	</main>

	<footer>
		<p>Made with ❤️ and ☕️ by Blake Watson.</p>
	</footer>
</body>
```

Having made these adjustments, we get some special styling for our website title, and paragraphs and lists are spaced more appropriately.

![](/assets/img/a-website-with-style-3.png)

{% aside 'Note' %}
If you are following along and notice that your website has a dark background with light text that's okay! Simple.css recognizes if you (the site's visitor) have your system in dark mode and, if so, uses a dark theme for the website. If you want to override this behavior, check out the bonus chapter [Customizing Simple.css](/customizing-simple-css).
{% endaside %}

## Update the live site

Let’s put our new stuff online! The way Neocities works, you can't upload folders via the upload button. You will either need to create the folder in the dashboard by clicking "New Folder." Or, you can drag r folder from your computer on to the drop zone.

![](/assets/img/a-website-with-style-4.png)

It's probably easier to drag the folders over, but if you do create them manually, you will need to open each folder and upload its contents. Once a folder is created you can hover your mouse over it to see options. You’ll want to click "Manage" to open the folder. From there you can click "Upload" to upload the appropriate files to that folder.

To move existing files, you do it by renaming them. For example, if I want to move `space.jpg` down into the images folder, you can click "Rename" then include the folder in the path: `images/space.jpg`.

![](/assets/img/a-website-with-style-5.png)

A little cumbersome, but hopefully not too bad. Whichever way you do it, just make sure the files in Neocities match what you have on your computer.

## Up next

We didn't add a lot in terms of writing code in this chapter but we set ourselves up for success by getting organized, acquiring some styles, and sectioning our webpage.

The rest of this web book will be focused on building out our website. In the next chapter, we'll add an about page.

[Adding an about page](/adding-an-about-page)