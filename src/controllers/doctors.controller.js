import Doctor from '../models/doctor.model.js'

export const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({ $and: [
            { status: '1' },
            { user: req.user.id },
        ], }).populate('user');
        res.json(doctors);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createDoctor = async (req, res) => {
    try {
        const { primernombre, segundonombre, primerapellido, segundoapellido, nocolegiado, telefono, email, especialidad } = req.body;

        const newDoctor = new Doctor({
            primernombre, 
            segundonombre, 
            primerapellido, 
            segundoapellido, 
            nocolegiado, 
            telefono,
            email,
            especialidad,
            user: req.user.id
        });
        const savedDoctor = await newDoctor.save();
        res.json(savedDoctor);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('user');
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (error) {
        return res.status(404).json({ message: "Doctor not found" });
    }
};

// export const deleteDoctor = async (req, res) => {
//     try {
//         const doctor = await Doctor.findByIdAndDelete(req.params.id);
//         if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
//         // res.json(doctor);
//         return res.sendStatus(204);
//     } catch (error) {
//         return res.status(404).json({ message: "Doctor not found" });
//     }
// };

export const deleteDoctor = async (req, res) => {
    const changestatus = {status: 0,};
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, changestatus, {new: true});
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        // res.json(doctor);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Doctor not found" });
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (error) {
        return res.status(404).json({ message: "Doctor not found" });
    }
};