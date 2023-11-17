import { createContext, useContext, useState } from "react";
import { createPatientRequest, getPatientsRequest, deletePatientRequest, getPatientRequest, updatePatientRequest } from "../api/patients"

const PatientContext = createContext();

export const usePatients = () => {
    const context = useContext(PatientContext);

    if (!context) {
        throw new Error("usePatients must be used within a PatientProvider");
    }

    return context;
}

export function PatientProvider({ children }) {
    const [patients, setPatients] = useState([]);

    const getPatients = async () => {
        try {
            const res = await getPatientsRequest();
            setPatients(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createPatient = async (patient) => {
        const res = await createPatientRequest(patient);
        console.log(res);
    };

    const deletePatient = async (id) => {
        try {
            const res = await deletePatientRequest(id);
            if (res.status === 204) setPatients(patients.filter(patient => patient._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getPatient = async (id) => {
        try {
            const res = await getPatientRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    };

    const updatePatient = async (id, patient) => {
        try {
            await updatePatientRequest(id, patient);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PatientContext.Provider value={{
            patients,
            createPatient,
            getPatients,
            deletePatient,
            getPatient,
            updatePatient
        }}>
            {children}
        </PatientContext.Provider>
    )
}