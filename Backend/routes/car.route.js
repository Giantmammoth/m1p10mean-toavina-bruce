const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/car.controller');
const validateObjectId = require('../middleware/validateObjectId')
const Auth = require('../middleware/Auth')


router.get('/', Auth, carCtrl.getCarList);
router.post('/', Auth, carCtrl.addNewCar);
router.put('/listReparation/:id', [validateObjectId, Auth], carCtrl.updateListReparation);


module.exports = router;