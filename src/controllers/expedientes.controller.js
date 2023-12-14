import Expediente from '../models/expediente.model.js'

export const getExpedientes = async (req, res) => {
    try {
        const exps = await Expediente.find(/*{
            $and: [
                { status: '1' },
                { user: req.user.id },
            ],
        }*/).populate('user')
            .populate('typeservice')  // Agrega la población para el campo typeservice
            .populate('patient');     // Agrega la población para el campo patient

        res.json(exps);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createExpediente = async (req, res) => {
    try {
        const { typeservice, patient } = req.body;
        const newExpediente = new Expediente({
            typeservice,
            patient,
            user: req.user.id
        });
        const savedExpediente = await newExpediente.save();
        res.json(savedExpediente);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getExpediente = async (req, res) => {
    try {
        const exp = await Expediente.findById(req.params.id).populate('user');
        if (!exp) return res.status(404).json({ message: 'Expediente not found' });
        res.json(exp);
    } catch (error) {
        return res.status(404).json({ message: "Expediente not found" });
    }
};

export const deleteExpediente = async (req, res) => {
    const changestatus = { status: 0, };
    try {
        const exp = await Expediente.findByIdAndUpdate(req.params.id, changestatus, { new: true });
        if (!exp) return res.status(404).json({ message: 'Expediente not found' });
        // res.json(exp);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Expediente not found" });
    }
};

export const updateExpediente = async (req, res) => {
    try {
        const exp = await Expediente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!exp) return res.status(404).json({ message: 'Expediente not found' });
        res.json(exp);
    } catch (error) {
        return res.status(404).json({ message: "Expediente not found" });
    }
};