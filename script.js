function createTableFromJsonData() {
    //requesting data from file.json
    fetch('file.json')
        //Creates individual objects from the data in the json file
        .then(response => response.json())
        .then(data => {
            //Creates a new object and assigns the data variable to it.
            var employeeJson = data;
            //Creates a new object and sets it to an array of strings containing all of the headers of the table, pulled from the
            //keys of the elements in the json
            var headers = Object.keys(employeeJson[0]);
            //Creates an object to a header row
            var headerRowHTML = '<tr>';
            //For loop to iterate over the array to add a table header cell to the headerRowHTML string.
            for (var i = 0; i < headers.length; i++) {
                headerRowHTML += '<th>' + headers[i] + '</th>';
            }
            //Defines the closing tag for the table row
            headerRowHTML += '</tr>';
            //Initializes allRecordsHTML to an empty string
            var allRecordsHTML = '';
            //The nested for loop iterates over the employeeJson array and the headers array to create a table with one row 
            //per employee and one column per header.
            for (var i = 0; i < employeeJson.length; i++) {
                allRecordsHTML += '<tr>';
                for (var j = 0; j < headers.length; j++) {
                    var header = headers[j];
                    allRecordsHTML += '<td>' + employeeJson[i][header] + '</td>';
                }
                allRecordsHTML += '</tr>';
            }
            //Creates a new variable and assigns it the DOM element with the ID display_json_data.
            var table = document.getElementById('display_json_data');
            //Sets the HTML content of the table DOM element to the headerRowHTML and allRecordsHTML strings.
            table.innerHTML = headerRowHTML + allRecordsHTML;
            //calls the search table method defined below
            searchTable();
        });
    }
function searchTable() {
    //Get search input element
    const searchInput = document.getElementById('search');
    //Get all of the table rows
    const rows = document.querySelectorAll('#display_json_data tr');
    // Attach an event listener to the search input element.
    searchInput.addEventListener('keyup', function (event) {
        // Get the search term from the search input element.
        const search = event.target.value;
        //Loop over all of the table rows
        rows.forEach((row) => {
            //Get all of the cells in the table row
            const cells = row.getElementsByTagName('td');
            //Boolean flag to check if the search term was located
            var found = false;
                //loop over all of the cells in the table row
                for (var i = 0; i < cells.length; i++) {
                    //Get the cell at the current index
                    const cell = cells[i];
                    //Check to see if the cell's text starts with the search term
                    if (cell.textContent.startsWith(search)) {
                        //Set the flag to true
                        found = true;
                        break;
                    }
                }
            //If the found flag was set to true above, then display that table row
            if (found) {
                row.style.display = 'table-row';
            } else {
                //Else, hide the table row
                row.style.display = 'none';
            } 
        });
    });
}
//When the page loads, call the searchTable function
window.onload = createTableFromJsonData;