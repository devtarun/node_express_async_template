const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.userData = decoded; // DO SOMETHING WITH LOGGED IN USER DATA
        next();
    } catch (err) {
        return res.status(401).json({
            msg: "Authorization token missing or invalid",
            data: null
        });
    }
};