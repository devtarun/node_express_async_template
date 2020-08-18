const http = require('http');
const app = require('./app');
require('dotenv').config()

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected...')).catch(err => console.log(err));

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));