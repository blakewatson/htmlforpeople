---
title: "Adding a fun page"
permalink: "adding-a-fun-page/"
layout: "base.njk"
---

# Adding a fun page

Alright, it’s time for some _fun_! Well, hopefully all of it has been fun. But I still want show you a handful of things you can do with HTML and I've saved this page for last because we'll be using some of the more complex HTML tags.

## Create the file

Let’s create `fun.html` at the top level of the site folder. Use content from the homepage as a starting point then change the `<title>` and `<h1>`. Clear out the contents of the `<main>` tag.

With that let’s proceed. We're going to do this page in multiple sections similar to the resume.

## Jokes

First up, let’s add a section for some jokes.

```html
<section>
	<h2>Jokes</h2>

	...Jokes will go here
</section>
```

The idea here is to show the setup of the joke but hide the punchline behind a click. You can [demo the live version here](https://demo.htmlforpeople.com/fun). To achieve this behavior, we'll use the `<details>` and `<summary>` elements. They work like this.

```html
<details>
	<summary>This content will show up by default</summary>

	<p>Clicking the above content will cause this hidden content to become visible.</p>
</details>
```

Here’s a video demo of this element in action.

https://youtu.be/Z9qfMCm6AYM

I’m going to add three admittedly corny jokes.

```html
<section>
	<h2>Jokes</h2>

	<details>
		<summary>Why wouldn’t the skeleton cross the road?</summary>
		<p>It didn't have the guts.</p>
	</details>

	<details>
		<summary>Why was the math book sad?</summary>
		<p>It had too many problems.</p>
	</details>

	<details>
		<summary>Why don't scientists trust atoms?</summary>
		<p>Because they make up everything!</p>
	</details>
</section>
```

This is a silly example, but the `<details>`/`<summary>` elements are useful whenever you want to make it easier for people to skim content and dig deeper where they choose. For example, a Frequently Asked Questions (FAQ) list.

## Using tables for tabletop gaming

Next up, let’s make use of the HTML table. The `<table>` tag and its related tags give us powerful ways to display information. For learning purposes, we'll create a small one. But if you find yourself needing to display a lot of _tabular_ data, check out [MDN's page on tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).

In tabletop RPGs like Dungeons and Dragons the gamemaster often needs to improvise to come up with encounters for the adventuring players. One such way is by using a random table. It’s table that will match dice rolls up with specific items, creatures, or events. We'll make a table with eight possible encounters the adventuring party might come across. The gamemaster will roll an eight-sided die and use the resulting encounter accordingly.

This is what the final table will look like.

![](/assets/img/adding-a-fun-page-1.png)

First I will make a new `<section>` with a heading and some introductory text about D&D. Then I will briefly introduce the random encounter table.

```html
<section>
	<h2>D&D stuff</h2>

	<p>Dungeons & Dragons (D&D) is a fun tabletop game where you create characters and go on epic adventures with friends. Guided by a Dungeon Master (DM), you'll roll dice to see what happens next. It's all about creativity, teamwork, and having a blast as you tackle quests, fight monsters, and find awesome treasures.</p>

	<h3>Random encounter table</h3>

	<p>This is a table you can use to randomly decide what enemy or creature the players are going to encounter. Just roll a d8.</p>

	...The table will go here
</section>
```

To create a table we use the `<table>` tag. A table can have a head section and a body section, like so.

```html
<table>
	<thead></thead>
	<tbody></tbody>
</table>
```

The table needs two columns—one for the dice roll and one for the corresponding encounter. Lets create a *table row* inside the `<thead>`. I will fill out the head section and then explain it.

```html
<table>
	<thead>
		<tr>
			<th>Roll (1d8)</th>
			<th>Encounter</th>
		</tr>
	</thead>
	<tbody></tbody>
</table>
```

The `<tr>` tag creates a _table row_. Inside of that row we will create two table cells. Because these are column headings we will use the _table header_ or `<th>` tag—one for the dice roll and one for the outcome. This is what it will look like so far.

![](/assets/img/adding-a-fun-page-2.png)

Next we can fill out our table using the _table data cell_ or `<td>` tag. We will put these rows inside the body section.

```html
<table>
	<thead>
		<tr>
			<th>Roll (1d8)</th>
			<th>Encounter</th>
		</tr>
	</thead>
	
	<tbody>
		<tr>
			<td>1</td>
			<td>Band of Goblins</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Wandering Merchant</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Group of Bandits</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Pack of Wolves</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Travelling Minstrels</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Lost Child</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Hidden Trap</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Old Hermit</td>
		</tr>
	</tbody>
</table>
```

That's a lot of tags! Hopefully you can follow the logic that is going on here. Inside of the `<tbody>` we are creating eight _table rows_ and each of those rows has two _table data cells_. And that will give us our final table.

![](/assets/img/adding-a-fun-page-3.png)

HTML tables can also do some of the things that you might do in a spreadsheet program, such as making a cell span multiple columns. We won't get into that here but just keep in mind that there is power to tables if you need it.

## Embedded video

Last but not least let's spice up our _Fun!_ page by adding some video. I'm going to opt for some synthwave vibes. You are, of course, encouraged to grab whatever YouTube videos you like. Some YouTubers select to disallow their videos from being embedded on other sites, so keep that in mind.

I will make a new section for my videos.

```html
<section>
	<h2>Synthwave mixes</h2>

	...videos will go here
</section>
```

First up, I will grab this music mix called Waves (<https://www.youtube.com/watch?v=b6toYA0W4IA>). If you visit that page you will see a share button underneath the video. Clicking that button will present you with a variety of choices for sharing the video.

![](/assets/img/adding-a-fun-page-4.png)

Select "Embed" if it is available. Once you do that you will be presented with some HTML code along with a *Copy* button. Go ahead and copy the code. You can paste the code right after the `<h2>` tag, like this.

```html
<section>
	<h2>Synthwave mixes</h2>

	<iframe width="560" height="315" src="https://www.youtube.com/embed/b6toYA0W4IA?si=-Iu68cVS5E08st5O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>
```

This embed is using the `<iframe>` tag. I won't go into great detail about this element but, in short, it is used for displaying a web page inside of another web page. But when I reload the page I am greeted with this "Video unavailable" error. Why?

![](/assets/img/adding-a-fun-page-5.png)

It's because I still have my website open as a file. This is a situation were we are needing to fetch data from another website (YouTube) but browser security features are preventing us from doing it.

### Running our local web server

No worries, though! This is why we installed a local web server in the last part. If you haven't already, start your web server following whichever method you chose.

**Note:** things get a little weird here unfortunately. Some of these server options such as Live Preview and Simple Web Server default to opening the browser at the IP address of `127.0.0.1`, which is essentially equivalent to `localhost`, the value other local servers use. For reasons I don't fully understand, the embedded videos will not work when accessing the site using the IP address. You need to be using `localhost`. Fortunately that is as easy as just manually replacing `127.0.0.1` with `localhost` in the address bar. If you are using Microsoft Live Preview, you will need to view the site in your web browser instead of the preview window.

I will be using [WorldWideWeb](https://iconfactory.com/worldwideweb/) for this example. Once I point it to my site folder and hit the play button, my server is running and I can visit it at the address provided.

![](/assets/img/intermission-installing-a-local-web-server-5.png)

Double check the address bar of your browser to make sure you are accessing the web server version instead of the direct file.

![](/assets/img/adding-a-fun-page-6.png)

Awesome! I will go grab two more videos to use.

- https://youtu.be/rDfS8B2-Mt4
- https://youtu.be/yb0DR_qRetA

I will do the same thing for these that I did for the first one. Pull up the video page, click _Share_, then _Embed_, and then copy the code provided. Paste the code for each video below the first one.

So I embedded my videos but now I'm noticing something else. It would be nice if these videos would span the width of my page. Also, lets take a look at what our website might look like on a phone.

![](/assets/img/adding-a-fun-page-7.png)

If I take a look at the website using Safari's _responsive design mode_ and make the window narrow, we find that the embedded videos run right off the right side of the page. Not ideal.

There are multiple ways we could go about fixing this. We’re going to use a third-party solution.

### Custom HTML tags

HTML provides a way for us to create our own custom tags. They are called _web components_. They typically use a mixture of HTML, CSS, and JavaScript to define the look and behavior of the component. Making our own web component is out of scope for this book. But that's okay, we don't need to make one. We can use web components that other people have made.

We're going to be using [Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed#readme). Feel free to read about what all it can do. For our purposes, we just want to install it and have it display a video that is full width and scales down properly on phones.

Before we go into how to install this component, lets take a look at how we would use it. It provides a new custom tag, `<lite-youtube>`. You give it an *attribute* of `videoid` which is the ID of the YouTube video. Assuming you have a YouTube video at the address, https://www.youtube.com/watch?v=b6toYA0W4IA, you can use `<lite-youtube>` as follows.

```html
<lite-youtube videoid="b6toYA0W4IA"></lite-youtube>
```

Much cleaner!

Okay let's get this thing installed. We need two files—one of them is the JavaScript and one of them is the CSS. I will go ahead and give you a direct link to both of them. Save the CSS file in your website's `css` folder. Then go ahead and create a `js` folder for the JavaScript file.

- JS file: <https://cdnjs.cloudflare.com/ajax/libs/lite-youtube-embed/0.3.2/lite-yt-embed.min.js>
- CSS file: <https://cdnjs.cloudflare.com/ajax/libs/lite-youtube-embed/0.3.2/lite-yt-embed.min.css>

Visit each of those and use _File > Save Page As…_ (Ctrl+S on Windows, Command+S on macOS). Once you have the files saved, add them to the `<head>` section of the page. This is what it should look like.

```html
<head>
	<title>Fun - Blake's Homepage</title>
	<meta charset="utf-8">
	
	<link rel="stylesheet" href="css/simple.css">
	<link rel="stylesheet" href="css/lite-yt-embed.min.css">
	<script src="js/lite-yt-embed.min.js"></script>
</head>
```

First we add the CSS file (the order doesn't really matter in this case). We bring it in the same way we brought in Simple.css, using the `<link>` tag. We will also bring in the JavaScript code. For that we use the `<script>` tag. It takes a `src` attribute which is the path to the file.

Once these two files are present, we can use then new component. Back to our example. Let's say we have this YouTube URL:

<https://www.youtube.com/watch?v=b6toYA0W4IA>

We need to get the ID from this URL. In a YouTube URL, the ID is the portion that comes after the `v=`. In this case it's `b6toYA0W4IA`. So we can embed the video using the following syntax.

```html
<lite-youtube videoid="b6toYA0W4IA"></lite-youtube>
```

I will go ahead and do the other two videos this way as well.

```html  
<lite-youtube videoid="b6toYA0W4IA"></lite-youtube>

<lite-youtube videoid="rDfS8B2-Mt4"></lite-youtube>

<lite-youtube videoid="yb0DR_qRetA"></lite-youtube>
```

It's looking good!

![](/assets/img/adding-a-fun-page-8.png)

I will add some _horizontal rules_ to create some separation between these videos.

```html
<lite-youtube videoid="b6toYA0W4IA"></lite-youtube>
<hr>
<lite-youtube videoid="rDfS8B2-Mt4"></lite-youtube>
<hr>
<lite-youtube videoid="yb0DR_qRetA"></lite-youtube>
```

And let's check out what they look like at mobile size.

![](/assets/img/adding-a-fun-page-9.png)

Nice!

## Full code example

To see this page in action, [check out the live demo](https://demo.htmlforpeople.com/fun). Here is the full code for the _Fun!_ page.

```html
<!doctype html>
<html>

	<head>
		<title>Fun - Blake's Homepage</title>
		<meta charset="utf-8">

		<link rel="stylesheet" href="css/simple.css">
		<link rel="stylesheet" href="css/lite-yt-embed.min.css">
		<script src="js/lite-yt-embed.min.js"></script>
	</head>

	<body>
		<header>
			<nav>
				<a href="index.html">Home</a>
				<a href="blog/index.html">Blog</a>
				<a href="about.html">About</a>
				<a href="resume.html">Resume</a>
				<a href="fun.html" aria-current="page">Fun</a>
			</nav>

			<h1>Fun</h1>
		</header>

		<main>
			<section>
				<h2>Jokes</h2>
	
				<details>
					<summary>Why wouldn't the skeleton cross the road?</summary>
					<p>It didn't have the guts.</p>
				</details>
	
				<details>
					<summary>Why was the math book sad?</summary>
					<p>It had too many problems.</p>
				</details>
	
				<details>
					<summary>Why don't scientists trust atoms?</summary>
					<p>Because they make up everything!</p>
				</details>
			</section>

			<section>
				<h2>D&D stuff</h2>
	
				<p>Dungeons & Dragons (D&D) is a fun tabletop game where you create characters and go on epic adventures with friends. Guided by a Dungeon Master (DM), you'll roll dice to see what happens next. It's all about creativity, teamwork, and having a blast as you tackle quests, fight monsters, and find awesome treasures.</p>
	
				<h3>Random encounter table</h3>
	
				<p>This is a table you can use to randomly decide what enemy or creature the players are going to encounter. Just roll a d8.</p>

				<table>
					<thead>
						<tr>
							<th>Roll (1d8)</th>
							<th>Encounter</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Band of Goblins</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Wandering Merchant</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Group of Bandits</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Pack of Wolves</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Travelling Minstrels</td>
						</tr>
						<tr>
							<td>6</td>
							<td>Lost Child</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Hidden Trap</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Old Hermit</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h2>Synthwave mixes</h2>

				<lite-youtube videoid="b6toYA0W4IA"></lite-youtube>
				<hr>
				<lite-youtube videoid="rDfS8B2-Mt4"></lite-youtube>
				<hr>
				<lite-youtube videoid="yb0DR_qRetA"></lite-youtube>
			</section>
		</main>

        <footer>
            <p>Made with ❤️ and ☕️ by Blake Watson.</p>
        </footer>
	</body>

</html>
```


## Publish the site

You did it! With this page completed, you’ve finished the main web book. Following the same steps as before, update your Neocities site with this new page. Remember to update your nav menu on all your other pages.

## Up next

Up next we'll revel in our accomplishments and I'll point you toward more learning resources, including the bonus chapters on this site.

[Achievement unlocked: Hypertexter](/achievement-unlocked-hypertexter)