import mongoose from "mongoose";
import { number } from "zod";

const expedienteSchema = new mongoose.Schema({
    correlativo: {
        type: Number,
    },
    fechainicio: {
        type: Date,
        default: Date.now,
    },
    fechafin: {
        type: Date,
        default: Date.now,
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

// Antes de guardar, actualiza el campo correlativo
expedienteSchema.pre('save', async function (next) {
    if (!this.correlativo) {
        // Encuentra el último documento y obtén el valor actual del correlativo
        const lastDocument = await this.constructor.findOne({}, {}, { sort: { correlativo: -1 } });
        const lastCorrelativo = lastDocument ? lastDocument.correlativo : 0;

        // Incrementa el correlativo y guarda
        this.correlativo = lastCorrelativo + 1;
    }
    next();
});

export default mongoose.model("Expediente", expedienteSchema);