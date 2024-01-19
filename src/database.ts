import { Sequelize } from 'sequelize'
import config from './config'

export const sequelize = new Sequelize(
    config.database.name,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: 'mysql',
    },
)

export function dbConnect() {
    return sequelize
        .authenticate()
        .then(() => {
            console.log('Database Authorized')
        })
        .catch((e) => {
            console.error('Database Failed', e)
            process.exit(1)
        })
}
