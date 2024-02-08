document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var searchQuery = document.getElementById('searchQuery').value;

    // Make an AJAX request to the server-side Python script
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'proxy.py?q=' + encodeURIComponent(searchQuery), true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var results = JSON.parse(xhr.responseText);
            displayResults(results);
        } else {
            console.log('Request failed. Status: ' + xhr.status);
        }
    };
    xhr.send();
});

function displayResults(results) {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
    } else {
        for (var i = 0; i < results.length; i++) {
            var resultItem = document.createElement('p');
            resultItem.textContent = results[i];
            resultsContainer.appendChild(resultItem);
        }
    }
}
