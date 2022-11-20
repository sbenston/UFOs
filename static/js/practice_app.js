// import data from data.js
const tableData = data;

// reference HTML table using d3
var tbody = d3.select('tbody');

function buildTable(data) {
    // clear any existing data
    tbody.html('');

    // loop through each object in the data array
    data.forEach((dataRow) => {
        let row = tbody.append('tr');

        // loop through each field in the dataRow and add values as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    });
}

function handleClick() {
    // get datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    // check if date entered and filter using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    // If no date was entered, the original data is used
    buildTable(filteredData);
}

// Event listener for the form button
d3.selectAll('#filter-btn').on('click', handleClick);

// Build table when the page loads
buildTable(tableData);