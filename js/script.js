/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * This function calculates the area of a rectangle
 */
window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  // input
  const length = params.get("length")
  const width = params.get("width")
  console.log(length)
  console.log(width)

  // process
  const area = (length * width);
  const dimensions = "<ul>\n<li>area = " + area + "</li>\n</ul>" 

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("answers").innerHTML = 'The area is:' + area + 'cm²'
}
