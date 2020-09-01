var unique = require('uniq');
var Caman = require('caman').Caman;


var myDate = new Date();
console.log(myDate);

Caman("pineapple.jpg", function () {
  this.brightness(5);
  this.render(function () {
    this.save("pineapple2.png");
  });
});
