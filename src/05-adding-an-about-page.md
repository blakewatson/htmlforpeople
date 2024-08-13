---
title: "Adding an about page"
permalink: "adding-an-about-page/"
layout: "base.njk"
---

# Adding an about page

For the rest of this series, we'll be expanding our personal homepage into a full website with multiple pages and a blog. The example will continue to be **Blake's Homepage** and the content will relate to me. You will need to customize things as necessary to fit what you want to see on your own website.

If you don't want to build a personal homepage, that's cool too! The concepts we're covering are easily applicable to other types of websites. So you can feel free to take what we cover and adapt it as necessary.

If you want to get a sneak peak, you can head over to the complete [Blake's Homepage demo site](https://demo.htmlforpeople.com/).

It has the following pages and features:

- Header with navigation
- A blog with three posts
- About page with a photo
- A digital resume
- A fun page with embedded YouTube videos

## Pages are just files that you link to

To create a new page on our site, we will first create a new file. Create `about.html` to go alongside `index.html`. To save some typing, copy the entire contents of `index.html` and paste it into `about.html`.

And now let's clean it up a little bit. I'm going to remove the "How to make a website" heading. I'll also remove the paragraph that links to neal.fun. This page should just be about me. Speaking of which, I'll also change the image to a photo of myself (if you don’t feel comfortable using a photo of yourself, use any image you want here).

I'll expand the content a bit by adding a couple of paragraphs. This is also a good place to provide any contact information you want. I'll add a link to my Mastodon account (with an elephant emoji).

```html
<p>🐘 <a href="https://social.lol/@bw">Drop me a line on Mastodon</a></p>
```

Remember, a link is an `<a>` tag. What ever text you wrap the tag around becomes clickable. Then you provide the `href` _attribute_ which is the destination of the link—typically a URL of some sort.

Here’s the code I have inside the `<body>` tag.

```html
<header>
	<h1>About Blake</h1>
</header>

<main>
	<img src="images/blake.jpg" alt="Photograph of space with stars and stardust.">

	<p>My name is Blake. I enjoy making websites and teaching others to do the same. I started writing an HTML web book because I think everyone should have a personal website and I want to show that you don't have to be a computer science graduate to make one.</p>

	<p>I'm a side project enthusiast and have put various sites, apps, and (bad) games into the world. My hobbies include web-related nerdery, D&D and board games, and writing. I like to participate in National Novel Writing Month, the annual novel-writing challenge</p>

	<p>🐘 <a href="https://social.lol/@bw">Drop me a line on Mastodon</a></p>

	<h2>Favorite board games</h2>

	<ul>
		<li>Dungeons & Dragons</li>
		<li>Risk</li>
		<li>Pandemic</li>
	</ul>
</main>  

<footer>
	<p>Made with ❤️ and ☕️ by Blake Watson.</p>
</footer>
```

And this is what it looks like.

![](/assets/img/adding-an-about-page-1.png)

Surprise, that’s me! Anyway, this is looking like a proper about page. I admit it’s a bit contrived. You should feel free to write as much as you want here. 

## Navigating between pages

We have an about page now but no way to navigate between our two pages. We need a navigation, or nav, menu. A nav menu is just a list of links. Simple.css seems to like the nav menu to sit atop the header so I'll do that, although you could also put it below.

HTML has a `<nav>` tag for exactly this purpose. We'll put two links in our nav menu—one to the home page and one to the about page.

```html
<header>
	<nav>
		<a href="index.html">Home</a>
		<a href="about.html" aria-current="page">About</a>
	</nav>

	<h1>About Blake</h1>
</header>
```

Since this is currently the about page, I've added a special attribute to the about page link. ARIA stands for _Accessible Rich Internet Applications_. We can make our site more accessible by adding the `aria-current="page"` attribute. It’s doing a couple of things for us.

- It'll make our page more accessible to assistive technologies like screen readers.
- Simple.css will style the link differently so that it's easy to tell which page we are on.

![](/assets/img/adding-an-about-page-2.png)

Let's add the same nav menu to the home page. Open `index.html` and add the menu the same way we did on the about page. This is the home page, we need to put the `aria-current` attribute on the *Home* link.

```html
<header>
	<nav>
		<a href="index.html" aria-current="page">Home</a>
		<a href="about.html">About</a>
	</nav>

	<h1>Blake's Homepage</h1>
</header>
```

Load it up in the browser and marvel at your multi-page website! Click. Click. Click…

## Homepage cleanup

Since we have an about page now, some of our homepage content is redundant. Some of this is on the about page now. I think I'll remove the bio text, the Neal.fun link, and the board games list. I will keep the space image and add a little welcome paragraph. Might as well keep the *how to make a website* list too.

My `<main>` content on the homepage now looks like this.

```html
<main>
	<img src="images/space.jpg" alt="Photograph of space with stars and stardust.">
	
	<p>Welcome to my website! Here you can find out more about me, read my very interesting and totally not contrived blog posts, and check out some of the fun hobbies I am into. It won't be long until you are wondering what sorcery I have used to create this mind-blowing, web-based experience. The answer is HTML.</p>
	
	<h2>How to make a website</h2>

	<ol>
		<li>Create an HTML file</li>
		<li>Write some HTML in it</li>
		<li>Open it with your web browser</li>
	</ol>
	
	<p class="notice">
		<strong>Want to learn how to make a website like this?</strong><br>
		Check out the free web book <a href="https://htmlforpeople.com/">HTML for People</a>. It's made for everyone and teaches you how to make a webpage in a friendly, approachable way.
	</p>
</main>
```

What is this `class="notice"`? You can learn more about classes in the bonus CSS articles at the end of this series. But, in short, this will activate some styles provided by Simple.css for making a little box with some text in it.

![](/assets/img/adding-an-about-page-3.png)

## Update the live site

If you want to. It's also totally fine to just keep working on it on your computer. A lot of websites are built that way—the person works on their website on their own computer until they are finished, then they publish it. But plenty of people also build their website in public, updating the live site as they go.

If you want to update it, head back to your Neocities dashboard and upload both `index.html` and `about.html`, since those are the files that changed. If you added any images, you will need to click into the images folder in Neocities and upload them there (or you can drag the `images` folder onto the drop zone, which will replace the whole folder and contents).

## Up next

We turned our webpage into a website! Up next we're going to add a blog and explore some various HTML tags.

[Adding a blog](/adding-a-blog)