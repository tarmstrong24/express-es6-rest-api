import path from "path";

let config = {};

config.port = 8080;
config.bodyLimit = "100kb";
config.corsHeaders = ["Link"];
config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost =  "administrator:wSsPQsnDUvExD2tu@cluster0.mongodb.net"; //process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = 'longbeach2018'; //process.env.dbName || 'trains';

export default config;


