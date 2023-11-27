import mongoose from "mongoose";
import { number } from "zod";

const typeserviceSchema = new mongoose.Schema({
    servicionombre: {
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

export default mongoose.model("TypeService", typeserviceSchema);