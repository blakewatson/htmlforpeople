---
title: "Reusable HTML with PHP"
summary: "Learn how to reuse elements like navigation menus by leveraging the dynamic ability of PHP."
permalink: "reusable-html-with-php"
layout: "base.njk"
---

# Reusable HTML with PHP

Throughout this book, one annoying thing we've had to deal with is updating the navigation menu on every page every time we change the menu. Imagine if we didn't need to do that and instead could keep our navigation menu in one place, in one file, and magically appear on every page.

That's what we'll do in this bonus chapter with the help of PHP. PHP stands for _PHP: Hypertext Preprocessor_. Yes, [the acronym is part of the name](https://en.wikipedia.org/wiki/Recursive_acronym), which is pretty weird. But back in the day when it was first created, it stood for Personal Home Page, as that was its initial use.

PHP is a programming language that powers much of the web, mainly because the CMS, [WordPress](https://wordpress.org/), was built with it. PHP is a full-blown programming language, meaning it can do almost anything. _Hypertext preprocessor_ is a good description of what it typically does.

When you visit a _static_ website, like the ones we’ve made in this book, the server gives you the HTML file you requested via the URL. When you visit a website powered by PHP, a PHP script is run on the server, which will return some (usually) HTML code to the browser. So, in both cases, you get HTML back. What’s the difference?

The PHP site can dynamically generate HTML based on the URL and other data from the browser's request. For example, I could have a site where the user has a profile at `mysite.com/user/blake`. With plain HTML, I would need to create that file for each user. However, with PHP, I could generate the page on the fly by reading the username in the URL and constructing the appropriate HTML to send back.

PHP also allows you to implement more complicated web features, like accepting user data and saving it in a database. These could be as simple as displaying a dynamic hit counter or as sophisticated as a social network.

If that sounds complicated, don’t worry. We won't be deep-diving into constructing a bunch of HTML with PHP. We'll be looking at one particular function of PHP that is useful for our purposes—the `include` statement.

## How to run PHP

Neocities, the service we've been using to host our personal website, doesn’t allow you to run PHP. This is for the best, as it doesn’t fit the ethos of Neocities and would make a pleasant, simple service more complicated. Fortunately, there are a ton of affordable services that offer PHP.

I recommend what’s called _shared hosting_. Long story short, this usually means the service will manage its servers and give you, the customer, a folder on the server where you can upload your files (and typically include access to various services).

{% aside 'Note' %}
It’s possible to run PHP on your computer to test your website before uploading it to a server. However, setting that up falls outside the scope of this book.

The easiest way is probably by using an app like [XAMPP](https://www.apachefriends.org/) or [MAMP](https://www.mamp.info) (what I use). You can also [install PHP directly on your system](https://perma.cc/MZB9-GKBD) and use its [built-in development server](https://web.archive.org/web/20240711042305/https://www.php.net/manual/en/features.commandline.webserver.php). If you’re on a Mac, you probably already have PHP installed.
{% endaside %}

Most shared hosts offer the same services, but here are a few of the ones people recommended when I [asked on Mastodon](https://perma.cc/WAD3-JCNX).

- [DreamHost](https://www.dreamhost.com/)
- [SiteGround](https://www.siteground.com/)
- [Reclaim Hosting](https://www.reclaimhosting.com/)
- [InfinityFree](https://www.infinityfree.com/)

And then there’s [NearlyFreeSpeech.NET](https://www.nearlyfreespeech.net/), the web host [I've used for years](https://blakewatson.com/journal/why-i-host-my-websites-with-nearlyfreespeech-net/). I won't call it beginner-friendly, but the interface is the simplest, and there’s no annoying ads or upselling.

Once you have an account at one of these (or some other) web host, you should be able to upload files either directly through their website or by connecting to your server with [FTP](https://perma.cc/P7Y7-CR6P).

The particulars of this fall outside the scope of this book, but there are tons of resources on getting up and running with a shared web post. A few web searches should put you on the right track.

The cool thing about PHP is that it is straightforward to start. Just take one of the pages of your website and change the file extension from `.html` to `.php`. You just created a perfectly valid PHP file—no changes necessary.

## Making a webpage dynamic

If all you do is change the file extension, everything will stay the same for the visitor. They will receive the HTML just as they did before. But now that you have a PHP file, you can put dynamic bits into your webpage by inserting them in PHP tags.

For example, here is a webpage that will display the current year.

```php
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My website</title>
        <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css">
    </head>
    <body>
        <h1>My website</h1>
        
        <p>The current year is: <?php echo date('Y') ?></p>
    </body>
</html>
```

Even if you never edit this file again, it will always be up to date (as long as the server is) because PHP injects the year into the HTML code when the page is requested.

Let's break down the dynamic part of this. First, PHP code is written between PHP tags (`<?php` and `?>`).

PHP code inside these tags is executed on the server before the HTML is sent to the browser. The `echo` statement is how you let PHP know you want it to output something to the page. The `date` function returns the current date–in this case, we’re telling it that we only want the year.

So, the `date` function runs, returning the current year. That bit of text is then processed by the `echo` statement, which inserts it into the document.

The actual PHP code isn’t sent back to the browser, and your visitors will never see it. Instead, it will appear as regular HTML, with the current year displayed as if you had typed it yourself.

## Reusing parts of your site

One thing that makes PHP incredibly useful is its ability to reuse parts of HTML in multiple places.

Consider the website I've been building throughout this book. It has this navigation on every page (ignoring the `aria-current` attribute, which changes depending on what page you’re on).

```html
<nav>
	<a href="/index.html" aria-current="page">Home</a>
	<a href="/blog/">Blog</a>
	<a href="/about.html">About</a>
	<a href="/resume.html">Resume</a>
	<a href="/fun.html">Fun!</a>
</nav>
```

We must maintain this navigation ("nav") menu on every page. It isn't too bad for a small website with a handful of pages. But imagine if you had dozens of pages. If you decided to add something to your nav menu, you’d need to go back to *every single page* and make the identical change in each spot. With PHP, we can reuse our nav menu code.

First, create a file called `nav.php`. You can place it anywhere in your project, but I will put it in an `includes` folder just to be organized.

Copy your nav menu from the homepage (`index.html`) and paste its contents into the `nav.php` file. Remove the `aria-current="page"` attribute for now, as we'll need to make that part dynamic later.

You should have a `nav.php` file that looks something like this:

```html
<nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
    <a href="/about.php">About</a>
    <a href="/resume.php">Resume</a>
    <a href="/fun.php">Fun</a>
</nav>
```

The above is not just an excerpt. That is the *entire contents* of `nav.php`. Unlike other HTML files, which need a `<head>`, `<body>`, etc., PHP files can contain a fragment of HTML.

{% aside 'Note' %}
In the process of converting the site from HTML-only to PHP, it’s a good time to convert all internal links between pages to use absolute URLs. Start with a slash `/` and type out the full path. Check out this [section on relative versus absolute URLs](/intermission-installing-a-local-web-server/#relative-vs.-absolute-urls) from the web server chapter if you haven’t already.
{% endaside %}

Now, let’s use it. Rename `index.html` to `index.php`. Delete the entire `<nav>` block and replace it with the following line of PHP.

```php
<?php include "includes/nav.php" ?>
```

When you load the page, things should look the same as they did before. You should see your nav menu. But the magic is that you’re using your PHP version. Now, you can start converting the rest of your pages.

## Converting HTML pages to PHP

The steps are generally the same for each page.

1. Change the file extension from `.html` to `.php`.
2. Replace the `<nav>` tag with the PHP include statement.

For top-level pages, the PHP include statement will look like this:

```php
<?php include "includes/nav.php" ?>
```

If you’re editing a sub-page (like the blog), you must adjust the path by using `..` syntax to move up a level.

```php
<?php include "../includes/nav.php" ?>
```

{% aside 'Note' %}
If you are comfortable with more code, use a built-in PHP variable that refers to the top-level directory. The following will work no matter what page it’s on. The dot (`.`) here connects the two text strings.

```php
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php" ?>
```
{% endaside %}

Once you’ve done that for each page, you’ll reuse the navigation menu. If you need to update the menu in the future, you can edit `nav.php`.

You could do this for other repeatable elements of your site. For example, much of the website's `<head>` section is the same on every page. The footer might be the same on every page. And so on.

## Bonus: dynamically highlighting the current nav link

When we moved our nav menu to PHP, we lost something. Previously, we set the `aria-current` attribute on the appropriate nav link to signify which page is the current page in the nav. This is good for accessibility and adds some visual cues for sighted users. But how do we set the current page if the navigation is one file? How do we know which page in the list is the current one?

Consider this the bonus section of this bonus chapter (that's right, a bonus within a bonus). I will be introducing some programming concepts. I only have a little time to cover them, as programming in PHP or any other language is really outside of the scope of this book. That said, with some reasonably light code (which I am totally fine with you stealing), you can implement `aria-current` automagically.

First, let's recap what this attribute means. If a visitor goes to the About page, we want that link in the nav menu to be styled to indicate that it represents the current page (or announced by a screen reader if the visitor happens to be using one). We would use the attribute `aria-current="page"` in that case.

We also have another scenario. If someone visits a blog post, we would like to highlight the Blog link in the navigation. It's not exactly the current page—they aren't on the blog listing page, where the link is pointed, but rather an individual blog post. Still, it would be nice to highlight the Blog link because it represents the current section of the site—the post is a sub-page of the blog. In that case, we could use `aria-current="true"`. This is less specific and more semantically correct.

Okay, so how can we add this automatically with PHP?

There are many ways you could do this—and none of them are necessarily more right than any other—but here is what I think is the least complicated way of doing it.

This technique will require us to *call a function* on each nav item. It looks like this.

```php
<nav>
    <a href="/" <?php aria_current('/') ?>>Home</a>
    <a href="/blog" <?php aria_current('/blog') ?>>Blog</a>
    <a href="/about.php" <?php aria_current('/about.php') ?>>About</a>
    <a href="/resume.php" <?php aria_current('/resume.php') ?>>Resume</a>
    <a href="/fun.php" <?php aria_current('/fun.php') ?>>Fun!</a>
</nav>
```

We will need a custom *function* called `aria_current` (I will give you the code for that function shortly). The function should receive one *argument*, which should be the text of the `href`. It will then be the function's job to compare that bit of text to the visited URL and determine whether it should output, using `echo`, the `aria-current` attribute.

You can put the function in the same file above the HTML markup.

```php
<?php
function aria_current($url) {
    // If $url is an exact match for the current URL, return 'aria-current="page"'.
    if ($_SERVER['REQUEST_URI'] === $url) {
        echo 'aria-current="page"';
        return;
    }

    // Otherwise it might be a sub-page, so check if the current URL contains
    // $url. If it does, return 'aria-current="true"' to indicate that the link
    // is an ancestor of the current page. Ignore a lone slash.
    if ($url !== '/' && strpos($_SERVER['REQUEST_URI'], $url) !== false) {
        echo 'aria-current="true"';
        return;
    }
}
?>

<nav>
    <a href="/" <?php aria_current('/') ?>>Home</a>
    <a href="/blog" <?php aria_current('/blog') ?>>Blog</a>
    <a href="/about.php" <?php aria_current('/about.php') ?>>About</a>
    <a href="/resume.php" <?php aria_current('/resume.php') ?>>Resume</a>
    <a href="/fun.php" <?php aria_current('/fun.php') ?>>Fun!</a>
</nav>
```

Okay, let's break it down. First, we need to open a pair of PHP tags. Inside, we'll define a function called `aria_current` with one argument: a variable called `$url`.

You can see where I added some notes called *comments*. Every line that starts with two slashes (`//`) is considered a comment and is ignored—it's there just for people.

The first bit of code is an *if statement*. PHP has a global variable called `$_SERVER` with all kinds of information, including which page is currently being visited (what it calls the `REQUEST_URI`). So we grab that and see if it matches the URL of the given nav item (remember, we are running this function for each nav item). If it does, we will output `aria-current="page"` using the `echo` statement. In that case, the output will appear at the point where we called the function (which is inside the `<a>` tag, where attributes go). After the `echo` statement, we use `return` to stop the function from running further—we're done.

If the first test isn't true, there is another test we want to try. Is the current page being visited a sub-page of the given nav item?

This test has two parts:

1. First, we want to ignore the homepage (`/`) because that's obviously not a sub-page of anything.
2. Second, we'll test the URL passed to the function against the visited URL to see if we have a match.

The second part of the test uses a function called `strpos`. It receives two arguments. The first is a bit of text you want to search through (let's call it the *haystack*). The second is a bit of text you are looking for (let's call it the *needle*). The function will return the needle's position in the haystack if found. It will return `false` if it doesn't find it at all.

So again, we will look at the built-in global variable `$_SERVER['REQUEST_URI']`. You can imagine that being something like `/blog/my-first-post`. We know the visitor is on the blog sub-page if we find `/blog` inside that path.

The test will pass in that case, and we will output `aria-current="true"` using the `echo` statement.

If both of the tests fail, we will output nothing.

To recap, when a visitor loads a page on our website, we run a function on each nav item. If the nav item's `href` matches the current URL or is found somewhere in the current URL, we output the appropriate `aria-current` attribute. Otherwise, we output nothing.

Phew! If you've never done any programming before, pat yourself on the back because now you have. If you find this kind of thing fun, explore more PHP or check out JavaScript.

## Conclusion

PHP templating with `include` is a great way to author HTML without repeating code. PHP has a lower barrier to entry than other programming languages, which is one reason I bring it up. However, websites can be made with all sorts of programming languages (JavaScript, Python, and Ruby are other popular choices). This is the world of dynamic websites. It gets pretty wild if you start thinking about all you can do with it.

PHP includes can be helpful even for a small personal website. But it's okay to stick with plain HTML, too! Editors like Visual Studio Code have robust find-and-replace functionality, which allows you to update many files in one go.

And with that, you've finished the last bonus chapter of HTML for People! Thanks for reading.