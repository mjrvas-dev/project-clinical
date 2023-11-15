import { Router } from "express";
import { authRequired} from '../middlewares/validateToken.js'
import { getDoctors, getDoctor, createDoctor, updateDoctor, deleteDoctor } from '../controllers/doctors.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createDoctorSchema } from '../schemas/doctor.schema.js'

const router = Router()

router.get('/doctors', authRequired, getDoctors)
router.get('/doctors/:id', authRequired, getDoctor)
router.post('/doctors', authRequired, validateSchema(createDoctorSchema), createDoctor)
router.delete('/doctors/:id', authRequired, deleteDoctor)
router.put('/doctors/:id', authRequired, updateDoctor)

export default router