import { z } from "zod";

export const createTypeServiceSchema = z.object({
    servicionombre: z
        .string({
            required_error: "Nombre del servicio is required",
        }),
});