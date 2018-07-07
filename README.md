Restaurant Reviews: Stage 1 (frontend-nanodegree)
===============================

## Table of Contents

* [Direct Link](#live-link)
* [About the Project](#about-the-project)
* [Project Overview](#project-overview)
* [Instructions](#instructions)
* [Test Caching](#test-caching)
* [Leaflet.js and Mapbox](#leaflet.js-and-mapbox)
* [Sources](#sources)
* [License](#license)

## Live Link

https://sarah27h.github.io/FEND-restaurant-stage-1/


## About the Project

Users can use Filter Results to filter neighborhoods and cuisines and then choose the restaurant he wants and uses maps to know the location of the restaurant.


## Project Overview

In this project is a restaurant reviews website provide a response for a range of screen sizes, have a responsive images size to the viewport and accessible for screen reader users and uses service worker to cache website visited pages letting users view those pages and give users a better experience in cases lie-fi, low connection, offline faster loading for pages in low and high connection cases.


## Instructions

    Download project folder or clone it.
    To open project:
        - locally on your machine you need to use server
            1- check python version in the terminal `python -V`
                - If you have Python 2.x -> spin up the server with `python -m SimpleHTTPServer 8000`.
                -  If you have PythonPython 3.x, you can use `python -m http.server 8000`.
                (or some other port, if port 8000 is already in use.)
                - If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
            2- open `index.html` in your browser.
        - Online use live version https://sarah27h.github.io/FEND-restaurant-stage-1/

## Test Caching

    - Opening `index.html` click on any restaurant button.
    - click on home link.
    - Open dev tools -> Network tab -> check offline only.
    - Reload page you should see it :)


## Leaflet.js and Mapbox

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.


## Sources
    - https://webaim.org/techniques/skipnav/
    - https://www.w3.org/TR/wai-aria-1.1/
    - https://developer.mozilla.org/en-US/
    - w3schools.com
    - stackoverflow
    - https://developers.google.com/web/fundamentals/codelabs/offline/

## License

This project is licensed under the terms of the <a href="https://choosealicense.com/licenses/mit/" rel="nofollow">MIT</a> license.

