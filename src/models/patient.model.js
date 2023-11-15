import mongoose from "mongoose";
import { number } from "zod";

const patientSchema = new mongoose.Schema({
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
    genero: {
        type: Number,
    },
    tipoidentificacion: {
        type: Number,
    },
    identificacion: {
        type: Number,
    },
    fechanacimiento: {
        type: Date,
    },
    telefono: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: false,
    },
    direccion: {
        type: String,
        require: true,
    },
    emergencianombre: {
        type: String,
        require: true,
    },
    emergenciatelefono: {
        type: String,
        require: true,
    },
    historialmedico: {
        type: String,
    },
    medicamento: {
        type: String,
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

export default mongoose.model("Patient", patientSchema);