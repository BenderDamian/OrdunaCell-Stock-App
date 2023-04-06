const express = require("express");

const app = express();

app.get('/', (req, res) => {
    console.log("Peticion recibida")

    res.send("Hola Mundo!!")
})


 app.listen(4000, () => {
    console.log("servidor ejucutandose en el puerto 4000")
 })