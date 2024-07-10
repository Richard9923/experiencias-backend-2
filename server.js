require('dotenv');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', (req, res) => {
    res.send("hello")
})

app.listen(PORT, (req, res) => {
    console.log(`The server is running on PORT: ${PORT}`);
})