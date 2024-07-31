
1
/*
2
Repo: https://github.com/bmoren/p5.collide2D/
3
Created by http://benmoren.com
4
Some functions and code modified version from http://www.jeffreythompson.org/collision-detection
5
Version v0.7.3 | June 22, 2020
6
CC BY-NC-SA 4.0
7
*/
8
​
9
​
10
console.log("### p5.collide v0.7.3 ###")
11
​
12
p5.prototype._collideDebug = false;
13
​
14
p5.prototype.collideDebug = function(debugMode){
15
    _collideDebug = debugMode;
16
}
17
​
18
/*~++~+~+~++~+~++~++~+~+~ 2D ~+~+~++~+~++~+~+~+~+~+~+~+~+~+~+*/
19
​
20
p5.prototype.collideRectRect = function (x, y, w, h, x2, y2, w2, h2) {
21
  //2d
22
  //add in a thing to detect rectMode CENTER
23
  if (x + w >= x2 &&    // r1 right edge past r2 left
24
      x <= x2 + w2 &&    // r1 left edge past r2 right
25
      y + h >= y2 &&    // r1 top edge past r2 bottom
26
      y <= y2 + h2) {    // r1 bottom edge past r2 top
27
        return true;
28
  }
29
  return false;
30
};
31
​
32
// p5.vector version of collideRectRect
33
p5.prototype.collideRectRectVector = function(p1, sz, p2, sz2){
34
  return p5.prototype.collideRectRect(p1.x, p1.y, sz.x, sz.y, p2.x, p2.y, sz2.x,sz2.y)
35
}
36
​
37
​
