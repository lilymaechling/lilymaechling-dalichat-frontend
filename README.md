# Day 1 - Web Dev Basics

This repository was designed and developed by [Adam McQuilkin '22](https://github.com/ajmcquilkin), and is intended to teach new DALI lab members the basics of MERN-stack Javascript web development as well as current best practices. To suggest changes to this repository, please create an issue [here](https://github.com/dali-lab/dalichat-frontend/issues) or create a pull request [here](https://github.com/dali-lab/dalichat-frontend/pulls).

## Overview

Welcome to DALI's developer onboarding course! This is the start of an approximately four-week long course that will walk you through the way DALI develops applications for the web. Your homework for today will largely focus on reinforcing core web concepts before we move deeper into web development in coming courses. Please read through the information we've included below.

## Core Concepts

After each class in this course, we will provide you with tasks to complete that will supplement your in-class learning. Additionally, we will provide you with links to review to get other perspectives on core concepts. Since this is the first class of the course, we have provided you with more links then we will during later classes. These links discuss the basics of web development (HTML, CSS, and Javascript).

Any links marked with "focus on concepts" are mainly intended to help you with concepts instead of syntax. We expect that you will read the articles in full, but we do not expect that you will remember minor details within the articles. Again, these links are merely to get you comfortable with concepts and we will not quiz you on the minutia of these articles.

We may also give you links to tutorials to try out to get the feel for the concepts we've been discussing. You are expected to attempt these exercises, since we feel these problems will help you later in the course.

> **Important:** While these links are not intended to be challenging, **_please do not copy code directly from the site_**. Writing code yourself, even if you didn't come up with the code, both reinforces muscle memory and helps you better understand the concept at hand.

The following links are excerpts from Mozilla Developer Network (MDN)'s [Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn) course.

### HyperText Markup Language (HTML)

1. [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) (focus on concepts)
2. [HTML Structure and Semantics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) (focus on concepts)

### Cascading Style Sheets (CSS)

1. [CSS Core Concepts](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) (focus on concepts)

### Javascript (JS)

1. [What is Javascript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) (focus on concepts, stop at "Dynamic vs Static Code")
2. [A first splash into Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash) (follow along with the tutorial)

## Additional Web Dev Resources

Below is a list of online resources we recommend you use throughout this course. These do not contain any required reading, but are good to have in the back of your mind throughout the course.

### Mozilla Developer Network (MDN)

Mozilla Developer Network is a collection of resources curated by Mozilla Contributors and contributed to by an open-source community. The site contains resources for all things web, including basics of HTML, CSS, and JS up to in-depth explanations of obscure web APIs. Due to the curated nature of this site we recommend you use MDN as a starting point for web reference.

> Link: https://developer.mozilla.org/en-US/

### Stack Overflow

An online forum for developers to ask and answer questions about software development (and many other things). As a note, these responses are all user-driven and may or may not be accutate. As such, we recommend using stack overflow after you have tried other options, such as re-reading package documentation and looking over example code.

> Link: https://stackoverflow.com/

## Tasks

Below are the tasks to complete before next class.

### Download Starter Code

Throughout this course, you will be applying your skills to a guided project (we'll discuss this in-depth in a future course!), and today we're going to be setting up the repository you will be working with.

To start, you need to create a new GitHub repository. To do this, sign in to [GitHub](https://github.com/) in your browser and click the "plus" button in the upper right corner of your browser window. Select "New Repository", and you will be navigated to a configuration screen.

In this screen, give your repository a name in the format `USERNAME-dalichat-frontend`, where `USERNAME` is your GitHub username. Make sure your respository is public, and click "Create repository".

Congratulations, you've just created (potentially) your first GitHub repository! If this isn't your first repository, congratulations on a new repo instead!

You should be seeing the homepage for your new respository. To allow you to modify this repository, we need to `clone` (copy) the repository to your local computer. To do this, click the green "Code" button in the upper right of your respository. Select the "HTTPS" option and copy the displayed link.

Next, open your `Documents/GitHub` directory in a terminal window. [See here](https://www.howtogeek.com/666127/how-to-use-the-cd-command-on-linux/) for documentation on the `cd` (change directory) command. Once you have this directory open, run the following commands in your terminal window, where `COPIED_LINK` is the link you copied in the previous step and `USERNAME` is your GitHub username:

```bash
git clone COPIED_LINK
cd USERNAME-dalichat-frontend
```

This will copy the contents of your repository (currently empty) to your local machine and allow you to make changes to the code, a process known as "cloning" the repository.

We now need to initialize your repository with the starter files for the DALIChat application, which we provide [here](ttps://github.com/dali-lab/dalichat-frontend). To do this, navigate to [this link](https://github.com/dali-lab/dalichat-frontend), and again click the green "Code" button in the upper right of your screen. Select the "HTTPS" option and copy the displayed link. Then, run the following command where `NEW_COPIED_LINK` is the new link you copied:

```bash
git remote add template NEW_COPIED_LINK
```

To ensure this process worked, run the following command:

```bash
git remote -v
```

This command should return a result similar to the following snippet, where `USERNAME` is your GitHub username:

```bash
origin  https://github.com/dali-lab/USERNAME-dalichat-frontend.git (fetch)
origin  https://github.com/dali-lab/USERNAME-dalichat-frontend.git (push)
template  https://github.com/dali-lab/dalichat-frontend.git (fetch)
template  https://github.com/dali-lab/dalichat-frontend.git (push)
```

This command shows where you are currently hosting versions of this project. These locations are known as `remotes`, and are identified by a unique name. The snippet above shows that we have two remotes attached to this project, a remote known as `origin` and a remote known as `template`. Remotes are online locations from which you can download code ("fetch") and upload code ("push") that will store versions of your project. Remotes contain both a fetch and a push location, and are identified by a unique string name (here `origin` and `template`).

> For context, `origin` is the default name git gives to remotes, and currently points towards your online GitHub repository. To learn more about remotes, see [this link](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

If you see both `template` and `origin` remotes in the results from the previous command, run the following command to copy the starter code to your local directory. If not, please reach out to us and we will be happy to help you sort this step out.

```bash
git pull template starter --allow-unrelated-histories
```

Your local directory should now contain all of the starter code for the `DALIChat` project you will be building throughout the course. To upload the current code to your new online repository, run the following command:

```bash
git push origin main
```

If you refresh your browser, you should now be able to see the starter code in your new repository!

> To view this starter code locally, make sure you have [Visual Studio Code](https://code.visualstudio.com/) installed. Then, run the following command:
>
> ```bash
> code .
> ```
>
> This opens the working directory in a new VSCode window. We will not be working directly with the code today, but feel free to look over the code to get familiar with the starter pack.

### Initialize Deployments

Now that you've initialized your DALIChat starter code, we need to configure your frontend to automatically deploy with Netlify when a pull request (PR) gets merged. Information to do this is contained in the [class outline document](https://www.notion.so/Intro-Kick-Off-4cf78510a35c4cfa97c2a43cb9d90f3f).

As always, if you ever need any help feel free to reach out to us at any time. Good luck!
