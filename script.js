document.getElementById('startTimer').addEventListener('click', function() {
    fetch('http://127.0.0.1:5000/requestData', { method: 'GET' })
    .then(response => response.text())
    .then(data => {
        document.getElementById('timerDisplay').innerText = data;
    });
});

document.getElementById('stopTimer').addEventListener('click', function() {
    fetch('http://127.0.0.1:5000/submitResponse', { method: 'POST' })
    .then(response => response.text())
    .then(data => {
        document.getElementById('timerDisplay').innerText = data;
    });
});
