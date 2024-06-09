---
title: "Add content to your website"
permalink: "add-content-to-your-website/"
layout: "base.njk"
---

# Add content to your website

First things first; pat yourself on the back because you now have a live, homemade website! Now it’s time to make it more interesting.

**Windows users:** If you are trying to open your `index.html` file in Notepad but you don’t see it in your website folder when using _File > Open_, find the _Text Documents_ dropdown in the bottom right corner of the Open window and change it to _All Files_.

## Add a heading

Let’s give it a name! It depends on what kind of site you’re making, of course, but mine is going to be a personal homepage. Everyone and their mom has a social media profile. But those are boring and same-y. We deserve *more*. And our old friend, the personal homepage, is a perfect place to start.

```plaintext
Blake's Homepage

My name is Blake. I enjoy making websites and teaching others to do the same.
```

Nice! Let’s view it in the browser.

![](/assets/img/add-content-1.png)

Well that’s not what we wanted. Our text has been slammed together on one line. What gives?!

It’s because we’re missing something—the _markup_ in Hypertext _Markup_ Language. We need to tell the browser that we want our site name to be a heading. In HTML, you can have up to six levels of headings. We’re gonna set our site name as the most prominent heading, a _level 1 heading_, or `<h1>`.

What is this weird pill-looking code I just wrote? It’s called an HTML tag. We wrap parts of our page in tags to tell the web browser what they are. Let’s do that now.

```html
<h1>Blake's Homepage</h1>

<p>My name is Blake. I enjoy making websites and teaching others to do the same.</p>
```

Here we’ve separated the two elements of our page and wrapped each of them inside tags. We’re saying our site name should be a level 1 heading and our first paragraph should be, well, a _paragraph_—that’s what the `p` stands for.

Notice that a pair of tags has an _opening_ tag and a _closing_ tag. The closing tag looks identical to the opening tag, except it begins with a slash, `/`.

Go ahead save the file and reload the browser. This is often the flow of making a website. You change some code. Save it. Then hit reload on your browser. Then feel the power coursing through your veins as you create a website from nothing!

![](/assets/img/add-content-2.png)

Whoa, that’s much better! Let’s keep going by adding some more content.

## Linking to other websites

You ever wonder why it’s called _the web_? Like what does that even mean? The special sauce that makes it a web is the _hyperlink_, or as we normally call it, a _link_. You know, it’s the often blue, often underlined text that you can click to be transported to another page, site, image, cat video, or anything!

It’s made possible by the _anchor_ element, or “A tag,” as people call it. It looks like this:

```html
<a>This will go somewhere eventually</a>
```

Whatever is inside the `<a>` tags becomes clickable. But where does the link take us? Currently, nowhere. We need to specify a destination. We can do that by giving the `<a>` an _attribute_ called `href`. It’s the _hypertext reference_—it’s where you want to go when you click the link.

```html
<a href="https://www.wikipedia.org/">Go to Wikipedia</a>
```

Let’s add a link on our website. Pick one of your favorite websites. Or something fun and interesting.

```html
<h1>Blake's Homepage</h1>

<p>My name is Blake. I enjoy making websites and teaching others to do the same.</p>

<p>Check out these cool web games at <a href="https://neal.fun/">Neal.fun</a>!
```

Save and reload!

![](/assets/img/add-content-3.png)

With the help of the humble `<a>` tag, your website becomes a part of the living, breathing web. There are over a hundred different HTML tags, but you don’t need to memorize them all to start building a website. You can do a lot with a little. Let’s look at a few more tags that can get you started.

## Lists of things

List lovers, this set of tags is for you. To add a bulleted list, we’ll use the _unordered list_ element, `<ul>`. The `<ul>` defines the list, while the _list item_ tag, `<li>`, defines each point in the list. Like this:

```html
<ul>
    <li>The first thing</li>
    <li>Another thing</li>
    <li>And lastly, this thing</li>
</ul>
```

This will become a bulleted list like so:

- The first thing
- Another thing
- And lastly, this thing

If you want you want a numbered list instead, change `<ul>` to `<ol>` (for _ordered list_). That’s it! It will be numbered instead.

1. The first thing
2. Another thing
3. And lastly, this thing

Let’s add a list to our website. Here’s the full site so far:

```html
<h1>Blake's Homepage</h1>

<p>My name is Blake. I enjoy making websites and teaching others to do the same.</p>

<p>Check out these cool web games at <a href="https://neal.fun/">Neal.fun</a>!</p>

<h2>Favorite board games</h2>

<ul>
    <li>Dungeons & Dragons</li>
    <li>Risk</li>
    <li>Pandemic</li>
</ul>

<h2>How to make a website</h2>

<ol>
    <li>Create an HTML file</li>
    <li>Write some HTML in it</li>
    <li>Open it with your web browser</li>
</ol>
```

Hey this thing is slowly starting to look like a website now!

![](/assets/img/add-content-4.png)

You’ll notice I snuck a new tag in there without mentioning it. It’s a _level 2 heading_, or `<h2>` tag. Headings are good for adding some structure to a page. Headings make it easier for your visitors to find what they’re looking for.

So far we’ve got a lot of words, but you know what’s worth a thousand of them?

## Add images to your website

Let’s add a cool image to our website. While it might be tempting to go to Google images and grab the first thing you find, that’s not the way to go. You have to make sure you have a right to use the image. There are a lot of places on the web to find images to use (look for images with a Creative Commons license). For simplicity, let’s use the popular free image site, [Unsplash](https://unsplash.com).

I found a cool image of space. I downloaded the small-size version of it and I renamed it `space.jpg`, to make it easier to refer to. Find an image you like and drop it in the folder next to your `index.html`.

You can add it to your page using the _image tag_, or `<img>`. Unlike the tags we’ve seen so far, the `<img>` tag is _self-closing_. That means there isn’t a closing tag. It looks like this:

```html
<img src="space.jpg" alt="Photograph of space with stars and stardust.">
```

Just like with the `<a>` tag, the `<img>` tag uses attributes to provide more information about how you want to use the tag.

Tell your image tag the _source_ of your image, that is, where it’s located, by using the `src` attribute. In this example, we’re saying the image is in the same folder as our `index.html` page (as opposed to being in a subfolder), and specifying that the filename of the image is `space.jpg`.

We also need to provide a description of the image in case some of our visitors are unable to see it. This could happen for several reasons—maybe our visitor is blind and uses a screen reader to access websites. Or maybe a glitch causes the image not to load for some reason. If that happens, our _alternative_ text, or `alt` text, will be shown instead.

Let’s save and refresh the browser.

![](/assets/img/add-content-5.png)

I resized the window so the whole page would fit in the screenshot, but if yours needs to be scrolled, that’s totally fine!

## Give your website a head and a body

I haven’t been totally honest with you so far. I’ve been having you take a shortcut. We’ve been writing _only_ the stuff the browser will display in our `index.html` file. But every website has an invisible section. And now yours needs it.

Remember how most elements are wrapped in tags? We actually need to wrap the whole page in a tag—the HTML tag. An HTML page is further divided into an invisible `<head>` section that has information about your site, and the `<body>`, which is where all of your content goes.

```html
<html>

    <head>
        info about your site goes here
    </head>

    <body>
        stuff you want to show up on your page goes here
    </body>

</html>
```

One final addition to make our HTML document official is to add a `doctype` line at the very beginning of the document. This is needed for historical reasons mostly but it tells the browser, “Hey I’m an official HTML document so please proceed to display me accordingly!” It’s fine to just copy and paste that line and move on.

```html
<!doctype html>
<html>
    
    <head>
        ...
    </head>

    <body>
        ...
    </body>

</html>
```

For now, let’s put two things in the `<head>`—a title tag and meta tag.

```html
<head>
    <title>Blake's Homepage</title>
    <meta charset="utf-8">
</head>
```

The `<title>` tag controls the text that appears in the browser tab for your website, as well as the name of your site when it shows up in search results. Nice!

The `<meta>` tag can be used multiple times to provide the browser extra info about your page. In this case we’re telling it which _character set_ to use. All you need to know here is that UTF-8 text means special symbols and emoji will appear like you would expect them to.

**Note:** If you’re getting confused by all the extra tags here, just know that you can copy and paste this starting code structure so that you don’t have to remember it all right now!

Here’s the whole `index.html` file for reference:

```html
<!doctype html>
<html>

    <head>
        <title>Blake's Homepage</title>
        <meta charset="utf-8">
    </head>

    <body>
        <h1>Blake's Homepage</h1>

        <img src="space.jpg" alt="Photograph of space with stars and stardust.">

        <p>My name is Blake. I enjoy making websites and teaching others to do the same.</p>

        <p>Check out these cool web games at <a href="https://neal.fun/">Neal.fun</a>!</p>

        <h2>Favorite board games</h2>

        <ul>
            <li>Dungeons & Dragons</li>
            <li>Risk</li>
            <li>Pandemic</li>
        </ul>

        <h2>How to make a website</h2>

        <ol>
            <li>Create an HTML file</li>
            <li>Write some HTML in it</li>
            <li>Open it with your web browser</li>
        </ol>
    </body>

</html>
```

## Update your live website

These changes are looking pretty good. Let’s publish it to the world. Head over to [your Neocities dashboard](https://neocities.org/dashboard). You’ll see the starting files plus the `index.html` file you uploaded in Part 1 of this series. To make things a bit cleaner, I’m switching to the list view and deleting the PNG image and CSS file that was there.

![](/assets/img/add-content-6.png)

Now click the _Upload_ button or just drag your updated files (the index page and the image) onto the file list.

Once you’ve done that, click the link to your site at the top of the dashboard. That’s your newly-updated LIVE website that you made from scratch. How cool!

![](/assets/img/add-content-7.png)

## Up next

This is part two of HTML for People. In part three, we’re going to take a brief intermission and get a text editor made for writing HTML.

[Intermission: upgrade your text editor](/intermission-upgrade-your-text-editor)