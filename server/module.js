const mongoose = require('mongoose');

//连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/react-recruit';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', ()=>console.log('mongo connect success'))