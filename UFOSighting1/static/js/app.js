// from data.js
var tableData = data;
// for array tbody d3 has to select the tbody tag!
var tbody = d3.select("tbody");

tableData.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button on the page with the id property set to `filter button`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

button.on("click", function() {
    tbody.html("");
// Select the input date get the raw HTML nodes
    var inputDate = d3.select("#datetime");
// Get the value property of the input date, state, shape
    var inputValue = inputDate.property("value");
      console.log(inputValue)

    var ufodata = tableData.filter(ufos=> ufos.datetime === inputValue);
    console.log(ufodata)

    
    ufodata.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});