const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.json({ "hello": "world" });
})

// POST endpoint '/add' to handle the incoming POST request
app.post('/add', (req, res) => {
    console.log('Request received:', req.body);  // Log the incoming request body for debugging

    const { number1, number2 } = req.body;

    // Check if both number1 and number2 are present
    if (number1 === undefined || number2 === undefined) {
        return res.status(400).send('Missing number1 or number2');
    }

    // Calculate the sum and send it as a response
    const sum = number1 + number2;
    res.json({ sum: sum });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
