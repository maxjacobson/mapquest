(function() {
  window.puts = function(thing) {
    return console.log(thing);
  };

  window.round = function(num) {
    return Math.round(num * 100) / 100;
  };

}).call(this);
