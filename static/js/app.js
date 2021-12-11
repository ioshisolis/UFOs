// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // // 4a. Save the element that was changed as a variable.
    // let date = d3.select("#datetime");
    // let city = d3.select("#city");
    // let state = d3.select("#state");
    // let country = d3.select("#country");
    // let shape = d3.select("#shape");

    // // 4b. Save the value that was changed as a variable.
    // let inputDate = date.property("value");
    // console.log(inputDate);
    // let inputCity = city.property("value");
    // console.log(inputCity);
    // let inputState = state.property("value");
    // console.log(inputState);
    // let inputCountry= country.property("value");
    // console.log(country);
    // let inputShape = shape.property("value");
    // console.log(shape);

    // // 4c. Save the id of the filter that was changed as a variable.
    // let filterDate = date.attr("id")
    // console.log(filterDate);
    // let filterCity = city.attr("id")
    // console.log(filterCity);
    // let filterState = state.attr("id")
    // console.log(filterState);
    // let filterCountry = country.attr("id")
    // console.log(filterCountry);
    // let filterShape = shape.attr("id")
    // console.log(filterShape);

    // // 5. If a filter value was entered then add that filterId and value
    // // to the filters list. Otherwise, clear that filter from the filters object.
    // if (inputDate) {
    //   filters[filterDate] = inputDate;
    //   // filters[filterCity] = inputCity;
    //   // filters[filterState] = inputState;
    //   // filters[filterCountry] = inputCountry;
    //   // filters[filterShape] = inputShape;
    // }
    // else {
    //   delete filters[filterDate]
    // }
    // if (inputCity) {
    //   filters[filterCity] = inputCity;
    // }
    // else {
    //   delete filters[filterCity]
    // }
    // if (inputState) {
    //   filters[filterState] = inputState;
    // }
    // else {
    //   delete filters[filterState]
    // }
    // if (inputCountry) {
    //   filters[filterCountry] = inputCountry;
    // }
    // else {
    //   delete filters[filterState]
    // }
    // if (inputShape) {
    //   filters[filterShape] = inputShape;
    // }
    // else {
    //   delete filters[filterShape]
    // }
    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
    // 5. If a filter value was entered then add that filterId and value
    // // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
    // 6. Call function to apply all filters and rebuild the table
   filterTable();
  }
   
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value );
      
    });
    console.log(filters)
    console.log(filteredData)

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  //d3.selectAll("#city", "#state", "#country", "#shape");
// d3.selectAll("#datetime").on("change", updateFilters);
// d3.selectAll("#city").on("change", updateFilters);
// d3.selectAll("#state").on("change", updateFilters);
// d3.selectAll("#country").on("change", updateFilters);
// d3.selectAll("#shape").on("change", updateFilters);
d3.selectAll("input").on("change", updateFilters);  

  // Build the table when the page loads
  buildTable(tableData);
