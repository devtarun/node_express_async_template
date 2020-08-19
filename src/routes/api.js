const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const UserController = require('../controllers/User');

// GENERATE TOKEN
router.post('/token', UserController.generateToken);

/***************************** USER ROUTES */
// ADD NEW USER
router.post('/user', UserController.addNew);
// GET ALL USER
router.get('/user', auth, UserController.getAll);
// GET SINGLE USER
router.get('/user/:user_id', auth, UserController.getSingle);
// UPDATE SINGLE USER
router.put('/user/:user_id', auth, UserController.update);

module.exports = router;