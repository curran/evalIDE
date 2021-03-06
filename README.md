evalIDE
=======

A simple live coding environment for the Web. [Try it!](http://curran.github.io/evalIDE)

Here are some examples:

 * <a href="http://curran.github.io/evalIDE/#title.text%20%3D%20%22Hello%20D3%22%3B%0A%0Arequire(%5B'd3'%5D%2C%20function(d3)%7B%0A%20%20var%20style%20%3D%20window.getComputedStyle(div)%2C%0A%20%20%20%20%20%20width%20%20%3D%20Math.ceil(parseFloat(style.width))%2C%0A%20%20%20%20%20%20height%20%3D%20Math.ceil(parseFloat(style.height))%2C%0A%20%20%20%20%20%20svg%2C%20rect%2C%0A%20%20%20%20%20%20bkgColor%20%3D%20'%23005E47'%2C%0A%20%20%20%20%20%20lineColor%20%3D%20'%23000000'%2C%0A%20%20%20%20%20%20lineWidth%20%3D%2014%3B%0A%20%20%0A%20%20svg%20%3D%20d3.select(div).selectAll('svg').data(%5B1%5D)%3B%0A%20%20svg.enter().append('svg')%3B%0A%0A%20%20rect%20%3D%20svg.selectAll('rect').data(%5B1%5D)%3B%0A%20%20rect.enter().append('rect')%3B%0A%20%20%0A%20%20rect%0A%20%20%20%20.attr('x'%2C%200)%0A%20%20%20%20.attr('y'%2C%200)%20%0A%20%20%20%20.attr('width'%2C%20width)%0A%20%20%20%20.attr('height'%2C%20height)%0A%20%20%20%20.attr('fill'%2C%20bkgColor)%3B%0A%20%20%0A%20%20lines%20%3D%20svg.selectAll('line').data(%5B%0A%20%20%20%20%7Bx1%3A%200%2C%20y1%3A%200%2C%20x2%3A%20width%2C%20y2%3A%20height%7D%2C%0A%20%20%20%20%7Bx1%3A%200%2C%20y1%3A%20height%2C%20x2%3A%20width%2C%20y2%3A%200%7D%0A%20%20%5D)%3B%0A%20%20lines.enter().append('line')%3B%0A%20%20%0A%20%20lines%0A%20%20%20%20.attr('x1'%2C%20function(d)%7B%20return%20d.x1%3B%20%7D)%0A%20%20%20%20.attr('y1'%2C%20function(d)%7B%20return%20d.y1%3B%20%7D)%0A%20%20%20%20.attr('x2'%2C%20function(d)%7B%20return%20d.x2%3B%20%7D)%0A%20%20%20%20.attr('y2'%2C%20function(d)%7B%20return%20d.y2%3B%20%7D)%0A%20%20%20%20.style('stroke'%2C%20lineColor)%0A%20%20%20%20.style('stroke-width'%2C%20lineWidth)%3B%0A%20%20%0A%7D)%3B">Hello D3</a> - Demonstrates live coding techniques for D3.js.
   * <a href="http://curran.github.io/evalIDE/run.html#title.text%20%3D%20%22Hello%20D3%22%3B%0A%0Arequire(%5B'd3'%5D%2C%20function(d3)%7B%0A%20%20var%20style%20%3D%20window.getComputedStyle(div)%2C%0A%20%20%20%20%20%20width%20%20%3D%20Math.ceil(parseFloat(style.width))%2C%0A%20%20%20%20%20%20height%20%3D%20Math.ceil(parseFloat(style.height))%2C%0A%20%20%20%20%20%20svg%2C%20rect%2C%0A%20%20%20%20%20%20bkgColor%20%3D%20'%23005E47'%2C%0A%20%20%20%20%20%20lineColor%20%3D%20'%23000000'%2C%0A%20%20%20%20%20%20lineWidth%20%3D%2014%3B%0A%20%20%0A%20%20svg%20%3D%20d3.select(div).selectAll('svg').data(%5B1%5D)%3B%0A%20%20svg.enter().append('svg')%3B%0A%0A%20%20rect%20%3D%20svg.selectAll('rect').data(%5B1%5D)%3B%0A%20%20rect.enter().append('rect')%3B%0A%20%20%0A%20%20rect%0A%20%20%20%20.attr('x'%2C%200)%0A%20%20%20%20.attr('y'%2C%200)%20%0A%20%20%20%20.attr('width'%2C%20width)%0A%20%20%20%20.attr('height'%2C%20height)%0A%20%20%20%20.attr('fill'%2C%20bkgColor)%3B%0A%20%20%0A%20%20lines%20%3D%20svg.selectAll('line').data(%5B%0A%20%20%20%20%7Bx1%3A%200%2C%20y1%3A%200%2C%20x2%3A%20width%2C%20y2%3A%20height%7D%2C%0A%20%20%20%20%7Bx1%3A%200%2C%20y1%3A%20height%2C%20x2%3A%20width%2C%20y2%3A%200%7D%0A%20%20%5D)%3B%0A%20%20lines.enter().append('line')%3B%0A%20%20%0A%20%20lines%0A%20%20%20%20.attr('x1'%2C%20function(d)%7B%20return%20d.x1%3B%20%7D)%0A%20%20%20%20.attr('y1'%2C%20function(d)%7B%20return%20d.y1%3B%20%7D)%0A%20%20%20%20.attr('x2'%2C%20function(d)%7B%20return%20d.x2%3B%20%7D)%0A%20%20%20%20.attr('y2'%2C%20function(d)%7B%20return%20d.y2%3B%20%7D)%0A%20%20%20%20.style('stroke'%2C%20lineColor)%0A%20%20%20%20.style('stroke-width'%2C%20lineWidth)%3B%0A%20%20%0A%7D)%3B">run it full screen</a>

Inspired by

 * [JSBin](http://jsbin.com/)
 * [JSFiddle](http://jsfiddle.net/)
 * [Livecoding.io](http://livecoding.io/)
 * [Tributary.io](http://tributary.io/)
 * [CodePen](http://codepen.io/)

The goal of this project is to provide a usable live coding environment for the Web. Features include:

 * Sharing - you can send a link to your program or embed it using an iFrame.
 * Good debugging support - syntax errors and exceptions resolve to the correct line of code in the Chrome debugger.
 * No iFrame magic - purely re-evaluating the code when text is changed

MIT License.
