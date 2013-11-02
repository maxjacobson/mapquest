# mapquest

<http://maxjacobson.github.io/mapquest>

A fun, elegant game to see how many countries you can name.

## contributing

* fork and clone the repo
* `bundle install`
* head's up: [one gem](https://github.com/guard/guard-coffeescript#javascript-runtimes) depends on you having a javascript runtime such as node on your system
* `bundle exec guard`
* visit <http://localhost:4000> and check it out
* find or open [an issue](https://github.com/maxjacobson/mapquest/issues)
* start hacking
* squash your commits and reference the relevant issue, then submit a pull request

## goals

### design

* a clean map with all of the countries in the world, unlabeled
* a text box to type in countries as you think of them (case insensitive)
* when you match a country, it becomes labeled and you receive points
* the option to zoom in on the map
* a timer that starts when you start
* an option to tweet/facebook how you did

### meta

* hosted on GitHub pages
* fun exercise in front end development
* create Issues and receive Pull Requests from friends

## development diary

### 2013-11-01

Max here

* I've created a repository
* I've created a README
* I've switched the primary branch from `master` to `gh-pages`, which I'll consider the master branch for now so it will show up online at <http://maxjacobson.github.io/mapquest>
* I've created a simple jekyll site structure
* I want the site to be online at `/mapquest` but the local development server runs at `/` so I struggled for a little while with jekyll's `baseurl` configuration setting. [This thread](https://github.com/mojombo/jekyll/issues/1097) ultimately pointed me in the right direction.

### 2013-11-02

Max here

* I integrated [guard](https://github.com/guard/guard) to kind of emulate the rails asset pipeline for compiling Sass and CoffeeScript and serving the Jekyll site. Just run `bundle exec guard` and it does a whole lot of stuff.
* The weird thing about having a Gemfile in your Jekyll site is that it will be included in the compiled site as an arbitrary text file on your server unless you specifically exclude it in the `_config.yml`. So, for example, because <https://github.com/mojombo/mojombo.github.io/blob/master/README.textile> isn't excluded, this is online: <http://tom.preston-werner.com/README.textile>. Which is, I guess, cool for a README?

Max here looking at the world

* explored some resources for making a map with [d3.js](http://d3js.org/).
    * The founder of d3 wrote [a really amazing post](http://bost.ocks.org/mike/map/) about how he does it (with the help of [topojson](https://github.com/mbostock/topojson)
    * Dan Schneiderman wrote [a more introductory blog post](http://www.schneidy.com/Tutorials/MapsTutorial.html) about where this kind of data comes from and how to use it with pure d3
    * I found [datamaps](http://datamaps.github.io/), a js library that layers on top of d3 and topojson and makes it kind of insanely easy to make a bunch of kinds of maps. It might be the right thing to use but it honestly feels almost too easy. I made a gorgeous, interactive world map in like 2 seconds with it. It's a jquery plugin. It's designed for rapid prototyping of data visualization and I'm not sure how we'd contort it into the setting for a game but maybe we could. Maybe it won't be a good fit. I'm not sure!

### 2013-11-03

Max here living the modular lyf

* Totally broke apart my layout to use [Jekyll includes](http://jekyllrb.com/docs/templates/#includes) which are basically just rails partials
* Totally broke apart the css to use [Sass imports](http://sass-lang.com/guide#5)

