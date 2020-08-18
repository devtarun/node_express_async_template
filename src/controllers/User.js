const User = require('../models/user');
const jwt = require('jsonwebtoken');

// USER GENERATE TOKEN
exports.generateToken = async (req, res) => {
    try {
        const usr = await User.findOne({ email: req.body.email });
        if (usr == null) {
            res.status(404).json({
                msg: "Auth Failed",
                data: null
            });
        } else {
            const token = jwt.sign({
                email: usr.email,
                userId: usr._id
            }, process.env.JWT_SECRET, {
                expiresIn: "1y"
            });

            res.status(200).json({
                msg: "Authenticated",
                data: token
            });
        }
    } catch (error) {
        res.status(200).json({
            msg: error,
            data: null
        });
    }
}

// USER NEW
exports.addNew = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        });
        const data = await user.save();
        res.status(200).json({
            msg: "New user created",
            body: data
        });
    } catch (error) {
        res.status(200).json({
            msg: error,
            data: null
        });
    }
}

// USER GET ALL
exports.getAll = async (req, res) => {

    try {
        const users = await User.find();

        res.status(200).json({
            msg: "All users",
            data: users
        });
    } catch (error) {
        res.status(200).json({
            msg: error,
            data: null
        });
    }
}

// USER GET SINGLE
exports.getSingle = async (req, res) => {
    const _id = req.params.user_id;
    try {
        const user = await User.findById(_id);

        res.status(200).json({
            msg: "User Detail",
            data: user
        });
    } catch (error) {
        res.status(200).json({
            msg: error,
            data: null
        });
    }
}

// UPDATE USER
exports.update = async (req, res) => {
    const _id = req.params.user_id;

    try {
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }

        const data = await User.where({ _id }).updateOne({ _id }, { $set: updateOps });

        console.log(data);


        if (data.nModified != 0) {
            res.status(200).json({
                msg: "User data updated",
                data: data
            });
        } else {
            res.status(200).json({
                msg: "User data updation failed",
                data: null
            });
        }
    } catch (error) {
        res.status(200).json({
            msg: error,
            data: null
        });
    }
}
