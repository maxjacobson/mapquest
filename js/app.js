(function() {
  var set_percentage,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  set_percentage = function(count, total) {
    $(".count").text(count);
    $(".total").text(total);
    $(".percentage").text("" + (round(count / total)) + "%");
    return $(".remainder").text("" + (total - count));
  };

  $(function() {
    return $.getJSON("../data/countries.json", function(data) {
      var $guesser, count, countries, total;
      countries = data.countries.map(function(country) {
        return country.toLowerCase();
      });
      count = 0;
      total = countries.length;
      set_percentage(count, total);
      $guesser = $(".guesser");
      return $guesser.on("keyup", function() {
        var guess;
        guess = $(this).val().toLowerCase();
        if (__indexOf.call(countries, guess) >= 0) {
          $(this).val("");
          count++;
          set_percentage(count, total);
          countries.splice(countries.indexOf(guess), 1);
          if (countries.length === 0) {
            $guesser.fadeOut();
            return alert("congrats!");
          }
        }
      });
    });
  });

}).call(this);
