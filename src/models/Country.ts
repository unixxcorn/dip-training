import { DataTypes } from 'sequelize'
import { sequelize } from '../database'

export const Country = sequelize.define(
    'Country',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        capital: DataTypes.STRING,
    },
    {
        paranoid: true,
    },
)
