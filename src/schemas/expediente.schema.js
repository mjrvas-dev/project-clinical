import { z } from "zod";

export const createExpedienteSchema = z.object({
    typeservice: z
        .string({
            required_error: "Tipo de servicio is required",
        }),
    patient: z
        .string({
            required_error: "Paciente is required",
        }),
});