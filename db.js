const dotenv = require('dotenv')
dotenv.config()

const { MongoClient} = require('mongodb')

const client = new MongoClient(process.env.CONNECTION_STRING)

async function startDB(){
	await client.connect()
	module.exports = client
	const app = require('./app')
	app.listen(process.env.PORT)
}

startDB()