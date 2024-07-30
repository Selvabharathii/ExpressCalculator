// const express = require('express');
// const bodyparser = require('body-parser');
// const app = express();

// const port = 4000;


// app.use(bodyparser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });


// app.post('/', (req, res) => {
//     const n1 = req.body.num1;
//     const n2 = req.body.num2;

//         const mul = n1 * n2;
//         const add = n1 + n2;
//         const sub = n1 - n2;
//         const divi = n1 / n2; 
//         res.send(`<h1>Result: ${mul}</h1><a href="/">Back</a>`);
//         res.send(`<h1>Result: ${add}</h1><a href="/">Back</a>`);
//         res.send(`<h1>Result: ${sub}</h1><a href="/">Back</a>`);
//         res.send(`<h1>Result: ${divi}</h1><a href="/">Back</a>`);
// });


// app.listen(port,()  => {
//         console.log(`Server is listening on port ${port}`);
    
// });



const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 4000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post('/', (req, res) => {
    const n1 = parseFloat(req.body.num1); // Convert input to number
    const n2 = parseFloat(req.body.num2); // Convert input to number
    const operation = req.body.operation; // Get selected operation

    let result;

    // Perform the selected operation
    switch (operation) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = n1 / n2;
            }
            break;
        default:
            result = 'Invalid operation';
    }

    // Send result to client
    res.send(`<h1>Result: ${result}</h1><a href="/">Back</a>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
