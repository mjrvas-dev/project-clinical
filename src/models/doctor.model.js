import mongoose from "mongoose";
import { number } from "zod";

const doctorSchema = new mongoose.Schema({
    primernombre: {
        type: String,
        require: true,
    },
    segundonombre: {
        type: String,
        require: true,
    },
    primerapellido: {
        type: String,
        require: true,
    },
    segundoapellido: {
        type: String,
        require: true,
    },
    nocolegiado: {
        type: Number,
        require: true,
    },
    telefono: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    especialidad: {
        type: String,
        require: true,
    },
    status: {
        type: Number,
        default: 1,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Doctor", doctorSchema);