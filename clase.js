const fs = require('fs').promises;

const path = require('path')
const filePath = path.join(__dirname, 'products.json')

class Contenedor {
    constructor(path) {
        this.path = path
        this.id = 1
        this.array = []
    }

    async save (object) {
        object.id = this.id
        try {
            const text = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(text)
            data.push(object)
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            this.id++
        } catch (e) {
            console.log(e)
        }
    }

    async getAll () {
        try {
            const text = await fs.readFile(this.path, "utf-8")
            return JSON.parse(text)
        } catch (e) {
            console.log(e)
        }
    }
    
    async getById (id) {
        try {
            const text = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(text)
            const object = data.find(obj => obj.id === id)

            if(!object) {
                return null
            } else {
                return object
            }
        } catch (e) {
            console.log(e)
        }
    }

    async deleteById (id) {
        try {
            const text = await fs.readFile(this.path, "utf-8")
            const data = JSON.parse(text)
            
            const filtered = data.filter(obj => obj !== id)
            await fs.writeFile(this.path, JSON.stringify(filtered, null, 2), "utf-8")
        } catch (e) {
            console.log(e)
        }
    }

    async deleteAll () {
        try {
            await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8")
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = Contenedor