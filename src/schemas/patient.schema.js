import { z } from "zod";

export const createPatientSchema = z.object({
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
    genero: z
        .string({
            required_error: "Genero is required",
        }),
    tipoidentificacion: z
        .string({
            required_error: "Tipo de identificacion is required",
        }),
    identificacion: z
        .string({
            required_error: "Identificacion is required",
        }),
    fechanacimiento: z
        .string({
            required_error: "Fecha de nacimiento is required",
        }),
    telefono: z
        .string({
            required_error: "Telefono is required",
        }),
    email: z
        .string({
            required_error: "Email is required",
        }),
    direccion: z
        .string({
            required_error: "Direccion is required",
        }),
    emergencianombre: z
        .string({
            required_error: "Nombre de emergencia is required",
        }),
    emergenciatelefono: z
        .string({
            required_error: "Telefono de emergencia is required",
        }),
    historialmedico: z
        .string({
            required_error: "Historial medico is required",
        }),
    medicamento: z
        .string({
            required_error: "Medicamentos is required",
        }),
});