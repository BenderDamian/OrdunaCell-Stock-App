require('dotenv').config();
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    console.log("Peticion recibida")

    res.status(200).send("<h1>Hola Mundo!!</h1>")
})

const PORT = process.env.PORT || 4000;

 app.listen(PORT, () => {
    console.log("servidor ejucutandose en el puerto 4000")
 })