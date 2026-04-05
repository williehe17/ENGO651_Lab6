# ENGO651/551 Lab 6 – Line Simplification

## Overview

This lab demonstrates how to simplify a user-drawn polyline in a web map using Turf.js. The application allows the user to draw a polyline on a Leaflet map, simplify the line with a button, and clear the map to draw a new line.

## Features

* Interactive Leaflet map centered on Calgary
* Draw a polyline directly on the map
* Simplify the polyline using Turf.js
* Display the simplified line in red
* Clear the map and draw a new line

## Technologies Used

* HTML
* CSS
* JavaScript
* Leaflet
* Leaflet Draw
* Turf.js

## File Structure

'''text
Lab6/
│── index.html
│── style.css
│── script.js
'''

## How It Works

1. Open the webpage.
2. Draw a polyline on the map using the draw tool.
3. Click the "Simplify Line" button.
4. The simplified version of the line will appear in red.
5. Click "Clear / New Line" to remove the current lines and draw another one.

## Code Explanation

### index.html

* Loads the Leaflet, Leaflet Draw, and Turf.js libraries.
* Creates two buttons:

  * `Simplify Line`
  * `Clear / New Line`
* Contains the map container.

### style.css

* Sets the map height to 90% of the viewport.
* Removes the default background and border from Leaflet draw icons.

### script.js

* Creates a Leaflet map centered on Calgary.
* Allows only polyline drawing.
* Stores the drawn polyline.
* Uses `turf.simplify()` with a tolerance of `0.01` to simplify the line.
* Displays the simplified line in red.
* Clears both the original and simplified lines when requested.

## Example Simplification Code

'''javascript
var simplified = turf.simplify(geojson, {
tolerance: 0.01,
highQuality: false
});
'''
## Author

Wei He
ENGO651
