// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");
var input = d3.selectAll("input");

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
let filters = [];

// 3. Use this function to update the filters. 
function updateFilters() {
  console.log("updateFilters() start...")
    // 4a. Save the element that was changed as a variable.
    let changed_element = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let changed_val = d3.select(this).property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    let id_val = d3.select(this).property("id");

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changed_val !== undefined){
      filters[id_val] = changed_val;
    }
    else {
      filters = [];
    }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
    console.log("updateFilters() end.")
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    console.log("filterTable() start...")
    // 8. Set the filtered data to the tableData.
    var filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // for(i=0; i<=filteredData.length; i++){
    //   for(j=0; j <= filters.length; j++){
    //     filteredData = filteredData.filter(row => (row.datetime === filters.datetime) || (row.city === filters.city) || (row.state === filters.state) || (row.country === filters.country) || (row.shape === filters.shape));
    //   }
    // // }
    for(i=0; i <= filters.length; i++){
      for(j=0; j <= filteredData.length; j++){
        filteredData = filteredData.filter(row => (row.datetime === filters.datetime) || (row.city === filters.city) || (row.state === filters.state) || (row.country === filters.country) || (row.shape === filters.shape));
      }
    };    

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    console.log("filterTable() end.")
  }

  // 2. Attach an event to listen for changes to each filter
  input.on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
