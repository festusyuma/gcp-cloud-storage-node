import { Sequelize } from "sequelize"

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${dbName}`);
export default sequelize