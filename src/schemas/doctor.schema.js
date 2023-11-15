import { z } from "zod";

export const createDoctorSchema = z.object({
    primernombre: z
        .string({
            required_error: "Primer apellido is required",
        }),
    segundonombre: z
        .string({
            required_error: "segundonombre is required",
        }),
    primerapellido: z
        .string({
            required_error: "Primer apellido is required",
        }),
    segundoapellido: z
        .string({
            required_error: "Segundo apellido is required",
        }),
    nocolegiado: z
        .string({
            required_error: "No. colegiado is required",
        }),
    especialidad: z
        .string({
            required_error: "Especialidad is required",
        }),
});