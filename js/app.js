(function() {
  $(function() {
    return $('.map').datamaps({
      fills: {
        defaultFill: 'lightblue'
      },
      geographyConfig: {
        popupOnHover: false,
        borderWidth: 1
      }
    });
  });

}).call(this);
