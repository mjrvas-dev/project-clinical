import { createContext, useContext, useState } from "react";
import { createDoctorRequest, getDoctorsRequest, deleteDoctorRequest, getDoctorRequest, updateDoctorRequest } from "../api/doctors"

const DoctorContext = createContext();

export const useDoctors = () => {
    const context = useContext(DoctorContext);

    if (!context) {
        throw new Error("useDoctors must be used within a DoctorProvider");
    }

    return context;
}

export function DoctorProvider({ children }) {
    const [doctors, setDoctors] = useState([]);

    const getDoctors = async () => {
        try {
            const res = await getDoctorsRequest();
            setDoctors(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createDoctor = async (doctor) => {
        const res = await createDoctorRequest(doctor);
        console.log(res);
    };

    const deleteDoctor = async (id) => {
        try {
            const res = await deleteDoctorRequest(id);
            if (res.status === 204) setDoctors(doctors.filter(doctor => doctor._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getDoctor = async (id) => {
        try {
            const res = await getDoctorRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    };

    const updateDoctor = async (id, doctor) => {
        try {
            await updateDoctorRequest(id, doctor);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DoctorContext.Provider value={{
            doctors,
            createDoctor,
            getDoctors,
            deleteDoctor,
            getDoctor,
            updateDoctor
        }}>
            {children}
        </DoctorContext.Provider>
    )
}