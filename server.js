require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const pass = process.env.password;
const user = process.env.user;
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', (req, res) => {
    res.send("hello")
})

mongoose.connect(`mongodb+srv://${user}:${pass}@backenddb.dgjbbik.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`)
.then(() => {
    console.log("Conectado ao banco de dados.")
    app.listen(PORT, (req, res) => {
        console.log(`The server is running on PORT: ${PORT}`);
    })

})
.catch(() => {
    console.log("Conexão não efetuada.")
})