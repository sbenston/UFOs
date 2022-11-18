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