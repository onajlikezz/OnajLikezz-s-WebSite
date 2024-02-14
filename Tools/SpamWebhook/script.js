let stopSending = false;
let sendingInterval;

document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var url = document.getElementById('url').value;
    var message = document.getElementById('message').value;
    var amount = parseInt(document.getElementById('amount').value);

    startSending(url, message, amount);
});

function startSending(url, message, amount) {
    stopSending = false;
    sendingInterval = setInterval(function() {
        if (stopSending) {
            clearInterval(sendingInterval);
            return;
        }
        sendMessages(url, message, 1);
        amount--;
        if (amount <= 0) {
            clearInterval(sendingInterval);
        }
    }, 1000);
}

function sendMessages(url, message, amount) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('The resource is being rate limited!');
        }
        // Provjeri da li je odgovor prazan
        if (response.status === 204) {
            throw new Error('No content');
        }
        return response.json();
    })
    .then(data => {
        // Provjeri da li su JSON podaci definirani
        if (!data) {
            throw new Error('Empty response');
        }
        document.getElementById('response').textContent = "Message successfully sent!";
    })
    .catch(error => {
        document.getElementById('response').textContent = error.message;
    });
}

document.getElementById('stopButton').addEventListener('click', function() {
    stopSending = true;
});

document.getElementById('startButton').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    var message = document.getElementById('message').value;
    var amount = parseInt(document.getElementById('amount').value);

    startSending(url, message, amount);
});
