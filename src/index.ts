import express from 'express'
import config from './config'

const app = express()
const host = config.app.host
const port = config.app.port

const store = {
    x: 0,
}

app.get('/', (req, res) => {
    res.json(store)
    store.x += 1
})

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
})
