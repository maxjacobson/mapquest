set_percentage = (count, total) ->
  $(".count").text count
  $(".total").text total
  $(".percentage").text "#{ round count / total }%"
  $(".remainder").text "#{ total-count }"

$ ->
  $.getJSON "../data/countries.json", (data) ->
    countries = data.countries.map (country) -> country.toLowerCase()
    count = 0
    total = countries.length
    set_percentage count, total
    $guesser = $(".guesser")
    $guesser.on "keyup", ->
      guess = $(this).val().toLowerCase()
      if guess in countries
        $(this).val("")
        count++
        set_percentage count, total
        countries.splice countries.indexOf(guess), 1
        if countries.length is 0
          $guesser.fadeOut()
          alert "congrats!"

