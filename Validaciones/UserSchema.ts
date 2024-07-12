import { z } from 'zod';

export const userSchema = z.object({
    nombres: z.string().nonempty('El campo Nombres es obligatorio'),

    Identificación: z.string().refine(Identificación => !isNaN(parseInt(Identificación)), {
        message: "El campo Identificación es obligatorio"
    }),

    apellidos: z.string().nonempty('El campo Apellidos es obligatorio'),

    CorreoPer: z.string().email({
        message: "Por favor Ingrese un correo valido"
    }),

    Dirección: z.string().nonempty('El campo Dirección es obligatorio'),

    celular: z.string().refine(Identificación => !isNaN(parseInt(Identificación)), {
        message: "El campo Celular es obligatorio"
    }),

    Ciudad: z.string().nonempty('El campo Ciudad es obligatorio')




})

