---
title: 'Zero to internet: your first website'
summary: 'Build an extremely simple webpage from scratch using Notepad and put it on the web with Neocities.'
permalink: 'zero-to-internet-your-first-website/'
tags: chapter
layout: 'chapter.njk'
---

# Zero to internet: your first website

You, my friend, are about to go from zero to internet by putting your very first homemade page on the web.

I will let you in on a little secret—websites are just files with text. They don’t require fancy, expensive software to create. You can literally make a website with Notepad. In fact, that’s what we'll do right now.

{% aside 'Note' %}
While making a website on a phone or tablet is possible, it’s much more common to do it on a computer. So, that’s what we’ll do in this book. That said, what you’ll learn will still apply to other contexts. One beautiful thing about the web is that there are so many ways to create on it.
{% endaside %}

## Step 1. Create a folder on your computer

Pick a location on your computer and create a folder. Call it `my-site` or something similar. It’s best to name your website folders and files with lowercase letters, numbers, dashes, and underscores. Avoid spaces in filenames. This ensures your files will be compatible with many different computers and servers.

{% aside 'Note' %}
You will probably end up creating multiple websites as time passes, so you can go ahead and create a `Websites` folder and put `my-site` inside of it if you'd like.
{% endaside %}

![Screenshot of a file explorer window showing a folder named "Websites" selected in the left pane and a folder named "my-site" displayed inside the "Websites" folder on the right pane.](/assets/img/zero-to-internet-01.webp)

## Step 2. Create index.html

By convention, a website's homepage is `index.html`. You may have other pages (like `about-me.html` or anything else you want), but we’ll get there later.

To create `index.html`, open TextEdit on a Mac or Notepad on Windows.

{% aside 'Mac users' %}
Websites should be _plain text_, so we’ll need to tell TextEdit to use plain text. Open TextEdit Settings and choose _Plain text_ under the Format section. While you’re here, click the Open and Save tab, then check the box next to _Display HTML files as HTML code instead of formatted text_.
{% endaside %}

Write a sentence or two about yourself. Here’s mine, for example:

```html
My name is Blake. I enjoy making websites and teaching others to do the same.
```

Now save this file. Name it `index.html` and put it in the `my-site` folder you created in step 1.

![A text editor window displaying the content of a file named "index.html." The text reads: "My name is Blake. I enjoy making websites and teaching others to do the same.](/assets/img/zero-to-internet-02.webp)

{% aside 'Note' %}
When making websites it’s essential to see file extensions—the part of the filename that comes after the period. If you don’t see them, here’s how you can get [Windows](https://perma.cc/3LAG-L6YW) or [Mac](https://perma.cc/KYR3-6H3L) to show them.
{% endaside %}

## Step 3. Preview your website

You can open your website by double-clicking `index.html`. It should open in your default browser. Alternatively, you can launch your browser first, click _File_ > _Open File…_, then navigate to your `index.html` file.

You should see your (admittedly plain) website in your browser! Feel free to adjust your text and fix any typos because we’re about to publish this page to the _world_.

Don’t worry about how it looks. We’ll fix that later.

![A browser window displays a simple webpage with black text on a white background. The text reads: "My name is Blake. I enjoy making websites and teaching others to do the same." The webpage URL shown in the address bar is a local file path.](/assets/img/zero-to-internet-03.webp)

## Step 4. Publish your website

There are many options for publishing your website. For our purposes, we need something free, easy, and geared toward individuals instead of businesses. Fortunately, we get just that with [Neocities](https://neocities.org).

{% aside 'Alternate webhosts' %}
Throughout this book, I will use Neocities as an example. But I'd like to mention a handful of alternatives in case one strikes your fancy.

- **[Yay.boo](https://yay.boo/):** Silly name, effortless website publishing. You just drag and drop a folder, pick a name, and your website is online.
- **[Glitch](https://glitch.com/):** This is a good option if you want to code everything directly in the browser. Build it, then publish.
- **[Netlify](https://www.netlify.com/):** More sophisticated, but has a [drag-and-drop-folder-to-publish](https://perma.cc/W3PH-5KRS) feature and gives you more developer-centric features.
  {% endaside %}

Head over to Neocities and create an account. It’s free. You’ll also need to choose a username/sitename. Your website will ultimately be on a _subdomain_ at `YOURNAME.neocities.org`. I suggest using your real name or an online username if you have one. Or, if you know what you want your page to be about, you could choose something befitting the topic (for example, `dndfanpage`).

Once you’ve created your account, go to your [site’s dashboard](https://neocities.org/dashboard). You’ll see that you have some starting files there. You can ignore them for now. To publish the page you just made on your computer, drag `index.html` from your computer onto your Neocities dashboard. That will replace the `index.html` that’s already there.

![Screenshot of the Neocities dashboard showcasing a website named "My Cool Website" belonging to user blakewatson. The interface shows options for creating a new file, new folder, or uploading files, as well as information about storage usage and site activity.](/assets/img/zero-to-internet-04.webp)

Once you’ve done that, click the link to your site at the top of the dashboard.

**Congratulations, you just made a website!** 🎉

## Up next

In the next chapter, we’ll add more content to our website and learn about a handful of HTML tags.
