import express, { json, urlencoded } from 'express'
import config from './config'
import { sequelize } from './database'
import { Country } from './models/Country'

async function main() {
    const app = express()
    const host = config.app.host
    const port = config.app.port

    await sequelize.authenticate()
    await Country.sync()

    const store = {
        x: 0,
    }

    app.use(json())
    app.use(urlencoded({ extended: true }))

    app.get('/', (req, res) => {
        res.json(store)
        store.x += 1
    })

    app.get('/coutries', async (req, res) => {
        res.json(await Country.findAll())
    })

    app.post('/coutries', async (req, res) => {
        const country = await Country.create({
            name: req.body.name,
            capital: req.body.capital,
        })
        res.json(country)
    })

    app.listen(port, host, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

main()
