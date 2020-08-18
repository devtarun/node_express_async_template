const express = require('express');
const app = express();
const APiRoutes = require('./routes/api');

app.use(express.json());

app.use('/api', APiRoutes);
app.use('/', (req, res) => {
    res.status(200).json({
        msg: "Server Running...",
        data: null
    });
});

// HANDLING ERRORS
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;