---
title: 'Intermission: installing a local web server'
summary: 'Learn how to run a webserver on your computer, giving you powerful features for serving your website locally.'
permalink: 'intermission-installing-a-local-web-server/'
tags: chapter
layout: 'chapter.njk'
---

# Intermission: installing a local web&nbsp;server

HTML is an approachable language, which was one reason I wanted to make this web book. It’s forgiving. If you remember the first chapter—that first website we made that was just a sentence or two—you’ll recall that we didn’t use a single HTML tag. But we could still open the file in the browser and see our content. We put that file on the web, and it worked! You can start simply and layer on the complexity as needed.

We're now at one of those points. In the next chapter, we'll create a fun page with jokes, tabletop gaming resources, and embedded YouTube videos.

Unfortunately, YouTube videos won’t work with the way we've been previewing our site—opening HTML files with the web browser. For the most part, that’s a perfectly okay way to preview HTML. But in cases where we are fetching data from other websites—like streaming video—we'll need to mimic a real-life web server.

A web server is a program that makes a website available at an address. When you visit that address with a web browser, you get the website. We'll install and run one of these so that our website is available at a local address—that is, one that’s only accessible to our computer, not everyone on the internet.

I’ll give you several options based on the operating system and technical knowledge needed. So you don’t need to read everything. Use the links below to jump to the section that applies to you.

- [Visual Studio Code (cross-platform)](<#visual-studio-code-(cross-platform)>)
- [macOS](#macos)
- [Windows and cross-platform](#windows-and-cross-platform)
- [Python and PHP (cross-platform)](<#python-and-php-(cross-platform)>)

## Visual Studio Code (cross-platform)

Microsoft publishes a VS Code extension called [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). It runs your site on a local web server and auto-refreshes as you change it. You can install it from that link or click the extensions icon and search for it.

![A screenshot of the Visual Studio Code Extensions Marketplace displaying the "Live Preview" extension page. The extension is created by Microsoft and has a description, ratings, usage instructions, and installation button visible.](/assets/img/intermission-installing-a-local-web-server-1.webp)

Once installed, you’ll notice a _Show Preview_ option when you right-click a file.

![A VS Code window is open showing HTML code. The file "index.html" is selected on the left sidebar, while a context menu over index.html is open with the option "Show Preview" highlighted.](/assets/img/intermission-installing-a-local-web-server-2.webp)

Clicking it will open a side panel with a web view at a local address. You can either use that preview, open it in the browser by navigating to the address, or click _Open in Browser_ in the address bar menu.

![Screenshot of a VS Code window. On the left side is HTML code for a personal webpage. On the right side, the webpage preview shows "Blake's Homepage" with navigation buttons and an image of a starry night sky. The URL is highlighted in a navigation bar.](/assets/img/intermission-installing-a-local-web-server-3.webp)

## macOS

I'm a Mac user myself, so I can highly recommend the excellent [WorldWideWeb](https://iconfactory.com/worldwideweb/) app. It’s free for our purposes but has a Pro upgrade that will automatically reload the page when you make changes.

It works by telling it your website folder and then clicking the play button.

![Screenshot of app window titled "WorldWideWeb" is displayed, showing two main sections: "Website Folder" and "Web Server." The "Website Folder" section includes a folder icon labeled "my-site," and the "Web Server" section has a play button labeled "Server is stopped." Red arrows point to each icon.](/assets/img/intermission-installing-a-local-web-server-4.webp)

Once you click the play button, your site will be available at some address. Click _Open Browser_ to visit that URL in your default browser.

![Screenshot of the same window. The interface shows a website folder named "my-site" and a web server with the URL "http://blakes-mac-studio.local:8080". There are icons for folder actions and buttons labeled "Reveal in Finder" and "Open Browser". The URL and Open Browser button are highlighted.](/assets/img/intermission-installing-a-local-web-server-5.webp)

And now notice that we’re seeing our site at our shiny new web address.

![A browser window titled "Blake's Homepage" with navigation links for Home, Blog, About, and Resume. The main section features an image of a starry night sky with colorful nebulae. A red arrow points to the URL bar at the top of the screen.](/assets/img/intermission-installing-a-local-web-server-6.webp)

## Windows and cross-platform

For Windows users, I have two options for you. If you’re using Visual Studio Code, I recommend jumping to that section and checking out Microsoft's Live Preview extension.

Otherwise, try [Simple Web Server](https://simplewebserver.org/). Once you’ve installed it, you can click the button to create a new server.

<img src="/assets/img/intermission-installing-a-local-web-server-7.webp" alt="A screenshot of the Simple Web Server application. The screen shows 'You haven't created any servers yet' in the center with a server icon above it. At the bottom right corner, there is a yellow button labeled 'New Server,'' highlighted by a red arrow." style="max-height: 600px; margin-inline: auto">

You can then point it to your website folder by clicking the folder icon button and selecting the appropriate folder.

<img src="/assets/img/intermission-installing-a-local-web-server-8.webp" alt="The image shows the 'Add Server' window from the Simple Web Server application. It includes fields for 'Folder path' and 'Port,' with options for Basic Options, Advanced Options, and Error Pages. Buttons labeled 'Cancel' and 'Create Server' are at the bottom." style="max-height: 600px; margin-inline: auto">

Once you have created the server, you’ll see it in the server list. Click it to open it. From there, you’ll see the URL where your site is available, and you can click the link to open it in your default browser.

<img src="/assets/img/intermission-installing-a-local-web-server-9.webp" alt="A Simple Web Server window titled 'Edit Server' shows options for a running web server. The URL highlighted is 'http://127.0.0.1:8080' and appears clickable. There are fields for folder path, port (set to 8080), and a checkbox for local network accessibility. At the bottom are cancel and save changes buttons." style="max-height: 600px; margin-inline: auto">

{% aside 'Note' %}
Simple Web Server is cross-platform and works on macOS and Linux as well. That said, I recommend WorldWideWeb for Mac users unless you need multiple servers running simultaneously.
{% endaside %}

## Python and PHP (cross-platform)

This is a more technical option. You don’t have to be an elite hacker, but you will need to run a command-line program from your terminal app.

### Python

If you don’t have either on your machine, Python is the easiest to set up. Go to the [Python downloads page](https://www.python.org/downloads/) and download the installer for your system (get version 3).

Open a terminal window and `cd` to your website directory. Then, run this command to start the Python development server.

```bash
python3 -m http.server
```

This will make your site available at `localhost` on whatever port it specifies (usually 8000). So your site address would be `http://localhost:8000`.

### PHP

Installing PHP is out of scope for this book, but it’s available for nearly all systems. PHP was born as a website technology and, as I'll discuss in a bonus chapter, [PHP is handy for reusing HTML snippets](/reusable-html-with-php) (like the nav menu) across multiple pages.

If PHP is on your system, you can run the PHP development server similarly to the Python example above.

```bash
php -S localhost:8000
```

This will make your site available at `http://localhost:8000`.

## Relative vs. absolute URLs

Thus far, since we've been opening our website files directly in the browser, we've needed to use relative URLs. Relative URLs are written from the perspective of the current file. For example, if I am on a sub-page and want to link to a top-level page, I need to use the `..` syntax to "move up" a level and find the destination page.

When running a web server, we can use absolute URLs. An absolute URL is always written from the perspective of the topmost level (the _topmost level_ meaning the folder that we told the web server to use). No matter what sub-page I'm on, I could link to the website homepage as follows.

```html
<a href="/">Go to the homepage</a>
```

The slash represents the topmost level (I could also have written `/index.html` but that isn’t needed because web servers will automatically use it if it exists). If I wanted to link to the `about.html` page, I could do that as follows.

```html
<a href="/about.html">Go to the About page</a>
```

The cool thing is that it doesn't matter what page I'm on—it can be a top-level page or a sub-page. This path will always lead to the About page, no matter where the current page is. Say we're on a page that’s nested down in a folder.

```html
<!-- imagine we are currently on a blog page /blog/my-post.html-->
<h1>My blog post</h1>

<!-- instead of this, which *does* work -->
<a href="../about.html">About</a>

<!-- we can do this -->
<a href="/about.html">About</a>
```

We didn't use absolute URLs earlier because we weren't using a web server. Had we tried to use absolute URLs when opening our website directly in the browser, the slash would have pointed toward the top-level folder of your _entire computer_, which is certainly not what we wanted.

Now that we're using a web server, I'll leave it up to you if you'd like to go back and change all the paths, but it does make copying and pasting the menu easier. Creating links between pages is more straightforward when using absolute URLs.

## Up next

Now that we have a local web server, our website can interact more easily with other websites. Next, we'll make a page with assorted fun stuff, including embedded videos from YouTube!
