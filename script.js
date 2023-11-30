
function addTimeToList(time) {
    const list = document.getElementById('lastTimesList');
    const newTime = document.createElement('li');
    newTime.innerText = time;
    list.insertBefore(newTime, list.firstChild);

    // Keep only the last 10 entries
    while (list.children.length > 10) {
        list.removeChild(list.lastChild);
    }
}

document.getElementById('startTimer').addEventListener('click', function() {
    fetch('http://127.0.0.1:5000/requestData', { method: 'GET' })
    .then(response => response.json())  // Make sure to use .json() if the response is JSON
    .then(data => {
        // Access the 'message' field from the data
        document.getElementById('timerDisplay').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('stopTimer').addEventListener('click', function() {
    fetch('http://127.0.0.1:5000/submitResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ someData: 'someDataHere' })  // Send data as JSON
    })
    .then(response => response.json())
    .then(data => {
		addTimeToList(data.message;
        document.getElementById('timerDisplay').innerText = data.status;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


