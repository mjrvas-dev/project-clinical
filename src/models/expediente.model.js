import mongoose from "mongoose";
import { number } from "zod";

const expedienteSchema = new mongoose.Schema({
    correlativo: {
        type: Number,
    },
    fechainicio: {
        type: Date,
    },
    fechafin: {
        type: Date,
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
    typeservice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeService',
        require: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        require: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Expediente", expedienteSchema);