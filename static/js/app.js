console.log("I'm working!");

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
var filters = [];

// 3. Use this function to update the filters. 
function updateFilters() {
console.log("updateFilters() started...")
    // 4a. Save the element that was changed as a variable.
    let changed_element = d3.select(this).property("type");
    console.log(changed_element);
    // 4b. Save the value that was changed as a variable.
    let changed_val = d3.select(this).property("value");
    console.log(changed_val);
    // 4c. Save the id of the filter that was changed as a variable.
    let id_val = d3.select(this).property("id");
    console.log(id_val);

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    

    // 6. Call function to apply all filters and rebuild the table

  console.log("updateFilters() ended...")
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  console.log("filterTable() started...")
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
  console.log("filterTable() ended...")
  }
  
  // 2. Attach an event to listen for changes to each filter
  input.on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
