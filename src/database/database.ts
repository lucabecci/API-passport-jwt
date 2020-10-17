import mongoose, { ConnectionOptions } from 'mongoose'
import config from '../config/config'

const DBoptions: ConnectionOptions  = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect(config.DB.URI, DBoptions)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
})

connection.once('error', (err) => {
    console.log('Error in connection to DB', err)
    process.exit(0)
})