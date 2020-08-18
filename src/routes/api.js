const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const UserController = require('../controllers/User');
const AgencyController = require('../controllers/Agency');
const ClientController = require('../controllers/Client');

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

/***************************** AGENCY ROUTES */
// Add NEW AGENCY
router.post('/agency', AgencyController.addNew);
// GET ALL AGENCY
router.get('/agency', auth, AgencyController.getAll);
// GET SINGLE AGENCY
router.get('/agency/:agency_id', auth, AgencyController.getSingle);
// UPDATE SINGLE AGENCY
router.put('/agency/:agency_id', auth, AgencyController.update);

/***************************** CLIENT ROUTES */
// Add NEW CLIENT
router.post('/client', ClientController.addNew);
// GET ALL CLIENT
router.get('/client', auth, ClientController.getAll);
// GET SINGLE CLIENT
router.get('/client/:client_id', auth, ClientController.getSingle);
// UPDATE SINGLE CLIENT
router.put('/client/:client_id', auth, ClientController.update);


module.exports = router;