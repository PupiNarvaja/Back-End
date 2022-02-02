const express = require('express');
const Contenedor = require('./clase.js');

const app = express();
const clase = new Contenedor("./products.json");

app.get("/", (request, response) => {
    response.send("Hola mundo")
})

app.get("/products", async (request, response) => {
    const data = await clase.getAll()
    response.send(JSON.stringify(data))
})

app.get("/randomProduct", async (request, response) => {
    const data = await clase.getAll()
    const random = Math.floor(Math.random() * data.length)
    let finalValue = data[random]
    response.send(JSON.stringify(finalValue))
})

const PORT = process.env.PORT || 2000
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
})

app.on("Error", (err) => {
    console.log(`Error: ${err}`)
})