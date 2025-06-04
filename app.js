const fs = require('fs');
// TODO: Require the http module
const http = require('http');
// Create a server
const server = http.createServer((req, res) => {
  // Create a url object with request url and host name
  const url = new URL(request.url, 'http://${request.headers.host}');
  // Create a switch statement based on pathname of url
  switch (url.pathname) {
    case '/': {
      // Check if request method is GET
      if (request.method === 'GET') {
        // Get value of 'name' query
        const name = url.searchParams.get('name');
        console.log(name);
        response.statusCode = 200;
        // Write response header
        response.writeHead(200, {
          JSON.stringify(['Content-Type': 'text/html']);
        }
        // Pipe index.html to response
        response.pipe('index.html');
      }
      break;
    }
    default: 
  }
});


      // TODO: Check if request is POST and if so, run handlePostResponse()

      // TODO: Write response header

      // TODO: Pipe 404.html to response


// TODO: Have server listen at port 4001


// Function for handling POST responses
function handlePostResponse(request, response){
  request.setEncoding('utf8');
  
  // Receive chunks on 'data' event and concatenate to body variable
  let body = '';
  request.on('data', function (chunk) {
    body += chunk;
  });
  
  // When done receiving data, select a random choice for server
  // Compare server choice with player's choice and send an appropriate message back
  request.on('end', function () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];

    const choice = body;

    let message;

    const tied = `Aww, we tied! I also chose ${randomChoice}.`;
    const victory = `Dang it, you won! I chose ${randomChoice}.`;
    const defeat = `Ha! You lost. I chose ${randomChoice}.`;

    if (choice === randomChoice) {
      message = tied;
    } else if (
        (choice === 'rock' && randomChoice === 'paper') ||
        (choice === 'paper' && randomChoice === 'scissors') ||
        (choice === 'scissors' && randomChoice === 'rock')
    ) {
      message = defeat;
    } else {
      message = victory;
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You selected ${choice}. ${message}`);
  });
}
