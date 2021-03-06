module.exports = {
  getCountries: function() {
    var data = require("./data.json"); // data : [country : [cities]]
    var countries = [];
    for (key in data["countries"]) {
      countries.push(key);
    }
    return countries;
  },

  getCities: function(country) {
    var splits = country.split(" ");
    country = null;
    splits.forEach(function(split) {
      country = country ? country + " " + split : split;
    });
    var data = require("./data.json"); // data : [country : [cities]]
    return data["countries"][country];
  }
};
