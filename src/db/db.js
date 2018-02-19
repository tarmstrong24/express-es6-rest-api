import Mongoose from 'mongoose';
import morgan from 'morgan';

Mongoose.Promise = global.Promise;

const connectToDb = (config) => {
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    
    try {
        Mongoose.createConnection(`mongodb://administrator:wSsPQsnDUvExD2tu@cluster0-shard-00-00-fcqp5.mongodb.net:27017,cluster0-shard-00-01-fcqp5.mongodb.net:27017,cluster0-shard-00-02-fcqp5.mongodb.net:27017/longbeach2018?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`, {});
        morgan('Connected to mongo!!!');
    }
    catch (err) {
        morgan('Could not connect to MongoDB');
    }
}

export default connectToDb;
