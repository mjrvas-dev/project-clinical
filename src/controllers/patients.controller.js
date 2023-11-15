import Patient from '../models/patient.model.js'

export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find({ $and: [
            { status: '1' },
            { user: req.user.id },
        ], }).populate('user');
        res.json(patients);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createPatient = async (req, res) => {
    try {
        const { primernombre, segundonombre, primerapellido, segundoapellido, genero, tipoidentificacion, identificacion, fechanacimiento, telefono, email, direccion, emergencianombre, emergenciatelefono, historialmedico, medicamento } = req.body;

        const newPatient = new Patient({
            primernombre, 
            segundonombre, 
            primerapellido, 
            segundoapellido, 
            genero, 
            tipoidentificacion, 
            identificacion, 
            fechanacimiento, 
            telefono, 
            email, 
            direccion, 
            emergencianombre, 
            emergenciatelefono, 
            historialmedico, 
            medicamento,
            user: req.user.id
        });
        const savedPatient = await newPatient.save();
        res.json(savedPatient);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate('user');
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.json(patient);
    } catch (error) {
        return res.status(404).json({ message: "Patient not found" });
    }
};

// export const deletePatient = async (req, res) => {
//     try {
//         const patient = await Patient.findByIdAndDelete(req.params.id);
//         if (!patient) return res.status(404).json({ message: 'Patient not found' });
//         // res.json(patient);
//         return res.sendStatus(204);
//     } catch (error) {
//         return res.status(404).json({ message: "Patient not found" });
//     }
// };

export const deletePatient = async (req, res) => {
    const changestatus = {status: 0,};
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, changestatus, {new: true});
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        // res.json(patient);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Patient not found" });
    }
};

export const updatePatient = async (req, res) => {
    const fechaActual = new Date();
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { updatedAt: fechaActual }, { new: true });
        if (!patient) return res.status(404).json({ message: 'Patient not found' });
        res.json(patient);
    } catch (error) {
        return res.status(404).json({ message: "Patient not found" });
    }
};