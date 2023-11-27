import TypeService from '../models/typeservice.model.js';

export const getTypeServices = async (req, res) => {
    try {
        const services = await TypeService.find({ $and: [
            { status: '1' },
            { user: req.user.id },
        ], }).populate('user');
        res.json(services);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createTypeService = async (req, res) => {
    try {
        const { servicionombre } = req.body;

        const newTypeService = new TypeService({
            servicionombre, 
            user: req.user.id
        });
        const savedTypeService = await newTypeService.save();
        res.json(savedTypeService);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getTypeService = async (req, res) => {
    try {
        const typeservice = await TypeService.findById(req.params.id).populate('user');
        if (!typeservice) return res.status(404).json({ message: 'TypeService not found' });
        res.json(typeservice);
    } catch (error) {
        return res.status(404).json({ message: "TypeService not found" });
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

export const deleteTypeService = async (req, res) => {
    const changestatus = {status: 0,};
    try {
        const typeservice = await TypeService.findByIdAndUpdate(req.params.id, changestatus, {new: true});
        if (!typeservice) return res.status(404).json({ message: 'TypeService not found' });
        // res.json(typeservice);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "TypeService not found" });
    }
};

export const updateTypeService = async (req, res) => {
    try {
        const typeservice = await TypeService.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!typeservice) return res.status(404).json({ message: 'TypeService not found' });
        res.json(typeservice);
    } catch (error) {
        return res.status(404).json({ message: "TypeService not found" });
    }
};