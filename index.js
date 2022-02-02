const Contenedor = require('./clase')

const instance = new Contenedor('./products.json')

const product0 = {
    title: "Jacket",
    price: 5000,
    thumbnail: "https://res.cloudinary.com/this/image/upload/v1642777578/p3_mc8xcq.jpg"
}
const product1 = {
    title: "Shirt",
    price: 2300,
    thumbnail: "https://res.cloudinary.com/this/image/upload/v1642778633/p7_tvv6dj.jpg"
}
const product2 = {
    title: "Jean",
    price: 3200,
    thumbnail: "https://res.cloudinary.com/this/image/upload/v1642778672/p9_mongye.jpg"
}

async function IngresarObj () {
    await instance.save(product0)
    await instance.save(product1)
    await instance.save(product2)
}

IngresarObj()
instance.getAll()
// instance.getById(1)


// instance.deleteById(1)
// instance.deleteAll()