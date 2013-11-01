# mapquest

<http://maxjacobson.github.io/mapquest>

A fun, elegant game to see how many countries you can name.

## contributing

* fork and clone the repo
* `gem install jekyll`
* `jekyll serve --watch --baseurl /`
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

