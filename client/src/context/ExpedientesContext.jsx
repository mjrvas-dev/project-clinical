import { createContext, useContext, useState } from "react";
import { createExpedienteRequest, getExpedientesRequest, deleteExpedienteRequest, getExpedienteRequest, updateExpedienteRequest } from "../api/expedientes";

const ExpedienteContext = createContext();

export const useExpedientes = () => {
    const context = useContext(ExpedienteContext);

    if (!context) {
        throw new Error("useExpedientes must be used within a ExpedienteProvider");
    }

    return context;
}

export function ExpedienteProvider({ children }) {
    const [expedientes, setExpedientes] = useState([]);

    const getExpedientes = async () => {
        try {
            const res = await getExpedientesRequest();
            setExpedientes(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createExpediente = async (expediente) => {
        const res = await createExpedienteRequest(expediente);
        console.log(res);
    };

    const deleteExpediente = async (id) => {
        try {
            const res = await deleteExpedienteRequest(id);
            if (res.status === 204) setExpedientes(expedientes.filter(expediente => expediente._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getExpediente = async (id) => {
        try {
            const res = await getExpedienteRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    };

    const updateExpediente = async (id, expediente) => {
        try {
            await updateExpedienteRequest(id, expediente);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ExpedienteContext.Provider value={{
            expedientes,
            createExpediente,
            getExpedientes,
            deleteExpediente,
            getExpediente,
            updateExpediente
        }}>
            {children}
        </ExpedienteContext.Provider>
    )
}