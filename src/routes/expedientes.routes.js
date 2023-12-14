import { Router } from "express";
import { authRequired} from '../middlewares/validateToken.js'
import { getExpedientes, getExpediente, createExpediente, updateExpediente, deleteExpediente } from "../controllers/expedientes.controller.js";
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createExpedienteSchema } from "../schemas/expediente.schema.js";

const router = Router()

router.get('/expedientes', authRequired, getExpedientes)
router.get('/expedientes/:id', authRequired, getExpediente)
router.post('/expedientes', authRequired, validateSchema(createExpedienteSchema), createExpediente)
router.delete('/expedientes/:id', authRequired, deleteExpediente)
router.put('/expedientes/:id', authRequired, updateExpediente)

export default router