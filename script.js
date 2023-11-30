document.getElementById('startTimer').addEventListener('click', function() {
    fetch('http://127.0.0.1:5000/requestData', { method: 'GET' })
    .then(response => response.json())  // Make sure to use .json() if the response is JSON
    .then(data => {
        // Access the 'message' field from the data
		console.log("Hello World")
        document.getElementById('timerDisplay').innerText = "HEllo";
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
		console.log("Goodbyte world")
        document.getElementById('timerDisplay').innerText = data.status;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

