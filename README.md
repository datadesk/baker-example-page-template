A demonstration of how to build and publish pages with the [baker](https://github.com/datadesk/baker) build tool.

The Los Angeles Times uses baker to build the static pages published at latimes.com/projects. You can use it however you'd like.

The Times system relies on a private version of a repository like this. With a little configuration, you can use this template to easily publish a page. With a little customization, you can make it look anyway you'd like.

## Links

- [baker]()
- [Staging example](http://baker-example-page-template-staging.s3-website-us-east-1.amazonaws.com/baker-example-page-template/main/)
- [Production example](http://baker-example-page-template-production.s3-website-us-east-1.amazonaws.com/baker-example-page-template/)

## Creating a new page

The first step is to click GitHub’s “use this template” button to a make a copy of the repository for yourself.

![](./.github/images/use-this-template.png)

You’ll be asked to provide a slug for your project. Once that’s done, a new repository will be available at `https://github.com/your-username/your-slug`.

Next you’ll need to clone it down to your computer to work with the code.

Open up your terminal and cd to your code folder. Clone the project into your folder. This will copy the project onto your computer.

```sh
git clone https://github.com/your-username/your-slug
```

If that command doesn’t work for you, it could be because your computer was set up differently and you need to clone to the repository using SSH. Try running this in your terminal:

```sh
git clone git@github.com:your-username/your-slug.git
```

Once the repository has finished downloading, cd into your-slug and install the Node.js dependencies.

```sh
npm install
```

Once the dependencies have been installed, you’re ready to preview the project. Run the following to start the test server.

```sh
npm start
```

Now go to `localhost:3000` in your browser. You should see a boilerplate page ready for your customizations.

## Exploring the repository

Here are the standard files and folders that you’ll find when you clone a new project from our page template. You’ll spend more time working with some files than others, but it’s good to have a general sense of what they all do.

### _config

This directory contains the master script for deploying our projects to latimes.com. Only advanced users will ever need to edit it. If you’re a beginner, you can simply leave it alone.

### _data

The data folder contains relevant data for the project. We use this folder to store required information about every project — like what URL it should live at. You can also store a variety of other data types here, including `.aml`, `.csv`, and `.json`.

#### meta.aml

The `meta.aml` file contains important information about the page such as the headline, byline, slug, publication date and other fields. Filling it out ensures that your page displays correctly and can be indexed by search engines. A full list of all the attributes can be found in our reference materials. You can expand this to include as many, or as little, options as you'd like.

### _layouts

This folder that stores our site’s base template and reusable code snippets. When you’re starting out, you’re unlikely to change anything here. In more advanced use cases, it’s where you can store code that is reused across multiple pages. 

#### `base.html`

The base.html file contains all the fundamental HTML found on every page we create. The example here is rudimentary by design.

### _workspace

The workspace is a place for you to put anything relevant to the project that doesn’t need to be published on the web. AI files, bits of code, writing, etc. It’s up to you.

### assets

This is used to store media and other assets such as images, videos, audio, fonts, etc. 

### scripts

JavaScript files are stored in this folder. The main file for JavaScript is called `app.js`, which you can write your code directly to. You can also create other files to write your JavaScript code in this folder, but you must make sure that the file is booted from `app.js`, otherwise it won’t run.

### styles

Our stylesheets are written in SASS, a powerful stylesheet language that gives developers more control over CSS. If you’re not comfortable with SASS, you can write plain CSS into the stylesheets. There are also plenty of tutorials for SASS: 

* https://sass-lang.com/guide
* https://www.w3schools.com/sass/ 
* https://www.linkedin.com/learning/sass-essential-training/welcome?u=41722708 

The styles folder consists of a stylesheet (`app.scss`) that imports everything necessary for a standard page. You can add all of your styles custom to your project to the main stylesheet, though sometimes you might want to make additional stylesheets and import them into `app.scss`.

### baker.config.js
The `baker.config.js` file is where we put options that Baker uses to serve and build the project. It has been fully documented here. Only advanced users will need to change this file

### index.html

The default template for your page. This is where you will lay out your page. It uses the Nujucks templating system to create HTML.

### package.json,  package-lock.json

These files track the Node dependencies used in our projects. When you run `npm install` the libraries you add will be automatically tracked here for you.

### .github

This is a special directory for storing files that GitHub uses to interact with our projects and code. The `.github/workflows` directory contains the GitHub Action that handles our development deployments. You do not need to edit anything in here.

