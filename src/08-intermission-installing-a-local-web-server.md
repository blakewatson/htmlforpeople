---
title: "Intermission: installing a local web server"
permalink: "intermission-installing-a-local-web-server/"
layout: "base.njk"
---

# Intermission: installing a local web server

HTML is an approachable language and that was one the reasons I wanted to make this web book. It’s forgiving. If you remember back to the very first part—that first website we made that was just a sentence or two—you’ll recall that we didn’t use a single HTML tag. But we were still able to open the file in the browser and see our content. We put that file on the web and it worked! As we discovered, you can start simple and layer on the complexity as needed.

We're now to one of those points. In the next part, we're going to make a fun page. It’ll have some jokes, some tabletop gaming resources, and embedded YouTube videos.

Unfortunately, YouTube videos won’t work with the way we've been previewing our site—just opening it with the web browser. For the most part that’s a perfect fine way to preview HTML. But in cases where we are fetching data from other websites—like streaming video—we'll need to mimic a real life web server.

You can think of a web server as a program that makes a website available at an address. Visit that address with a web browser and you get that website. We're going to install and run one of these so that our website is available at a local address—that is, one that’s only accessible to our computer, not everyone on the internet.

I’m going to give several options based on operating system and technical knowledge needed. So you don’t need to read everything. Use the links below to jump to the section that applies to you.

- [Visual Studio Code (cross-platform)](#visual-studio-code-(cross-platform))
- [macOS](#macos)
- [Windows and cross-platform](#windows-and-cross-platform)
- [Python and PHP (cross-platform)](#python-and-php-(cross-platform))

## Visual Studio Code (cross-platform)

Microsoft publishes a VS Code extension called [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). It runs your site on a local web server and auto-refreshes as you make changes to it. You can install it from that link or click the extensions icon and search for it

![](/assets/img/intermission-installing-a-local-web-server-1.png)

Once installed you’ll notice a _Show Preview_ option when you right-click a file.

![](/assets/img/intermission-installing-a-local-web-server-2.png)

Clicking it will open a side panel with a web view running on a local address. You can use the preview this way, or you can open it in the browser by navigating to the address, or by clicking _Open in Browser_ in the address bar menu.

![](/assets/img/intermission-installing-a-local-web-server-3.png)

## macOS

I'm a Mac user myself so I can highly recommend the excellent [WorldWideWeb](https://iconfactory.com/worldwideweb/) app. It’s free for our purposes but does have a Pro upgrade that will automatically reload the page when you make changes.

The way it works is you point it at your website folder, then click the play button.

![](/assets/img/intermission-installing-a-local-web-server-4.png)

Once you click the play button, it will make your site available at some address. You can click _Open Browser_ to visit that URL in your default browser.

![](/assets/img/intermission-installing-a-local-web-server-5.png)

And now notice that we’re seeing our site at our shiny new web address.

![](/assets/img/intermission-installing-a-local-web-server-6.png)

## Windows and cross-platform

For Windows users, I have two options for you. If you’re using Visual Studio Code, I recommend that you jump to that section and check out Microsoft's Live Preview extension.

Otherwise try [Simple Web Server](https://simplewebserver.org/). Once you’ve installed it, you can click the button for creating a new server.

![](/assets/img/intermission-installing-a-local-web-server-7.png)

You can then point it to your website folder by clicking the folder icon button and selecting the appropriate folder.

![](/assets/img/intermission-installing-a-local-web-server-8.png)

Once you have created the server, you’ll see it in the server list. Click it to open it. From there, you’ll see the URL where your site is available and you can click the link to open it in your default browser.

![](/assets/img/intermission-installing-a-local-web-server-9.png)

**Note:** Simple Web Server is cross platform and works on macOS and Linux as well. For Mac users, I recommend WorldWideWeb unless you need multiple servers running simultaneously.

## Python and PHP (cross-platform)

This is a more technical option. You don’t have to be a elite hacker but you will need to run a command-line program from your terminal app.

### Python

If you don’t have either on your machine, Python is the easiest to set up. Go to the [Python downloads page](https://www.python.org/downloads/) and download the installer for your system (get version 3).

Open a terminal window and `cd` to your website directory. Then run this command to start the Python development server.

```bash
python3 -m http.server
```

This will make your site available at `localhost` on whatever port it specifies (usually 8000). So your site address would be `http://localhost:8000`.

### PHP

Installing PHP is out of scope for this tutorial, but it’s available for nearly all systems. PHP was born as a website technology and, as I'll discuss in the bonus content, [PHP is handy for easily reusing HTML snippets](/reusable-html-with-php) (like the nav menu) across multiple pages.

If PHP is on your system, you can run the PHP development server similarly to the Python example above.

```bash
php -S localhost:8000
```

This will make your site available at `http://localhost:8000`.

## Relative vs. absolute URLs

Thus far, since we've been opening our website files directly in the browser, we've needed to use relative URLs. Relative URLs are written from the perspective of the current file. For example, if I am in a subpage and I want to link to a top-level page, I need to use the `..` syntax in order to "move up" a level and find the destination page.

When running a web server we can use absolute URLs. An absolute URL is always from the perspective of the topmost level. In this case our website folder is the topmost level. No matter what subpage I'm on, I could link to the homepage of the website as follows.

```html
<a href="/">Go to the homepage</a>
```

If I wanted to link to the `about.html` page, I could do that as follows.

```html
<a href="/about.html">Go to the homepage</a>
```

The cool thing is it doesn't matter what page I'm on, it can be a top-level page or a sub-page. This path will always lead to the About page, no matter where the current page is.

We didn't use absolute URLs earlier because we weren't using a web server. Had we tried to use absolute URLs when opening our website directly in the browser, the slash would have pointed toward the top-level folder of your *entire computer*, which is certainly not what we wanted.

Now that we're using a web server, I'll leave it up to you if you'd like to go back and change all the paths, but it does make copying and pasting the menu easier. And creating links between pages is more straightforward when using absolute URLs.

## Up next

Now that we have a local web server running, we can more easily interact with other websites. Next we're going to make a page of assorted fun stuff, including embedded videos from YouTube!

[Adding a fun page](/adding-a-fun-page)