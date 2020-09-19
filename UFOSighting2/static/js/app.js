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
var button = d3.selectAll(".filter");

// Getting a reference to the input element on the page with the id property set to 'input-field'
//var inputField = d3.select("#input-field");
valuesdict = {}

button.on("change", function () {
    tbody.html("");

    var newdata = tableData
    // Select the input date get the raw HTML nodes
    var inputValues = d3.select(this).select("input");
    // Get the value property of the input date, state, shape
    var inputValue = inputValues.property("value");
    var inputId = inputValues.attr("id")
    console.log(inputValue)
    console.log(inputId)

    valuesdict[inputId] = inputValue
    Object.entries(valuesdict).forEach(([key, value]) => {
        newdata = newdata.filter(x => x[key] === value)
    });
    newdata.forEach((ufosighting) => {
        var row = tbody.append("tr");
        Object.entries(ufosighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});