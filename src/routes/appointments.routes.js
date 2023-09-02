import { Router } from 'express'
import { getAppointments, getAppointment, createAppointment, editAppointment } from '../controllers/apointments.controller';

const authAdmin = require("../middleware/auth");

const router = Router()

router.get('/api/appointments', authAdmin, getAppointments);
router.post('/api/createAppointment', authAdmin, createAppointment);
router.get('/api/appointment/:id', authAdmin, getAppointment);
router.put('/api/editAppointment/:id', authAdmin, editAppointment);


export default router