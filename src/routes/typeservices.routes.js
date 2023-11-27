import { Router } from "express";
import { authRequired} from '../middlewares/validateToken.js'
import { getTypeServices, getTypeService, createTypeService, updateTypeService, deleteTypeService } from "../controllers/typeservices.controller.js";
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createTypeServiceSchema } from "../schemas/typeservice.schema.js";

const router = Router()

router.get('/typeservices', authRequired, getTypeServices)
router.get('/typeservices/:id', authRequired, getTypeService)
router.post('/typeservices', authRequired, validateSchema(createTypeServiceSchema), createTypeService)
router.delete('/typeservices/:id', authRequired, deleteTypeService)
router.put('/typeservices/:id', authRequired, updateTypeService)

export default router