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

Throughout this course, you will be applying your skills to this project (we'll discuss this in-depth in a future course!), and today we're going to be setting up the repository you will be working with.

To start, open your `Documents/GitHub` directory in a terminal window. You will need to download the starter files for this project to your computer. To do this, sign in to GitHub, navigate to [this link](https://github.com/dali-lab/dalichat-frontend), and click the green "Code" button in the upper right of your screen. Select the "HTTPS" option and copy the displayed link. Then, run the following command:

```shell
git clone COPIED_LINK_HERE
```

This will copy the starter code to your GitHub account and allow you to make changes to the code, a process known as "cloning" the repository. After you have cloned the repository, navigate to the created folder with the following commands:

```shell
cd dalichat-frontend
git checkout starter
```

This directory contains all of the starter code for the `DALIChat` project you will be building throughout the course. To view this starter code, make sure you have [Visual Studio Code](https://code.visualstudio.com/) installed. Then, run the following command:

```shell
code .
```

This opens the working directory in a new VSCode window. We will not be working directly with the code today, but feel free to look over the code to get familiar with the starter pack.

### Initialize GitHub Repository

Back in your terminal window, we will now configure your code to connect with your personal GitHub account. Make sure you are still within the `GitHub/dalichat-frontend` directory (you can see your current directory by running the `pwd` command in a bash shell or PowerShell terminal).

Before we can save your code to a GitHub repsoitory, you need to create a new GitHub repository. To do this, open [GitHub](https://github.com/) in your browser and click the "plus" button in the upper right corner of your browser window. Select "New Repository", and you will be navigated to a configuration screen.

In this screen, give your repository a name in the format `USERNAME-dalichat-frontend`, where `USERNAME` is your GitHub username. Make sure your respository is public, and click "Create repository".

Congratulations, you've just created (potentially) your first GitHub repository! If this isn't your first repository, congratulations on a new repo instead!

You should be seeing the homepage for your new respository. Go to the "Code" and "HTTPS" and again copy the repository link. Now we're ready to link your local code (the code on your computer) and your remote repository (a place to host code not on your personal computer).

In your terminal window, run the following command:

```shell
git remote -v
```

This command should return a result similar to the following snippet:

```text
origin  https://github.com/dali-lab/dalichat-frontend.git (fetch)
origin  https://github.com/dali-lab/dalichat-frontend.git (push)
```

This command shows where you are currently hosting versions of this project. These locations are known as `remotes`, and are identified by a unique name. The snippet above shows that we have one remote attached to this project, a remote known as `origin`. We are able to download code from this repository ("fetch") as well as send code to this repository ("push"). As a note, fetch and push are listed separately, but are both part of the `origin` remote.

For context, `origin` is the default name git gives to remotes, and currently points towards the DALI repository containing the code.

> If you want to learn more about remotes, see [this link](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

To give you ownership of the code, we are going to change the repository url that the current `origin` remote points to so that `origin` will point to the new repository that you just created. To do this, run the following command, where `COPIED_URL` is the url you copied from the "HTTPS" tab in your browser:

```shell
git remote set-url origin COPIED_URL
```

Congratulations again, you now own the starter code! To upload the current code to your new repository, run the following command:

```shell
git push origin main
```

If you refresh your browser, you should now be able to see the starter code in your new repository!

### Initialize Deployments

Now that you've initialized your DALIChat starter code, we need to configure your frontend to automatically deploy with Netlify when a pull request (PR) gets merged. Information to do this is contained in the [class outline document](https://www.notion.so/Intro-Kick-Off-4cf78510a35c4cfa97c2a43cb9d90f3f).

As always, if you ever need any help feel free to reach out to us at any time. Good luck!
