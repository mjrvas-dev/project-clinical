import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/tasks.routes.js"
import doctorRoutes from "./routes/doctors.routes.js"
import patientRoutes from "./routes/patients.routes.js"
import typeserviceRoutes from "./routes/typeservices.routes.js"
import expedienteRoutes from "./routes/expedientes.routes.js"

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", doctorRoutes);
app.use("/api", patientRoutes);
app.use("/api", typeserviceRoutes);
app.use("/api", expedienteRoutes)

export default app;