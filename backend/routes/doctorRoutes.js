const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/', doctorController.createDoctor);
router.get('/', doctorController.getAllDoctors);
router.get('/:id', doctorController.getDoctorById);
router.put('/:id', doctorController.updateDoctor);
router.patch('/:id/approve', doctorController.approveDoctor);
router.delete('/:id', doctorController.deleteDoctor);


module.exports = router;
