import { createContext, useContext, useState } from "react";
import { createTypeServiceRequest, getTypeServicesRequest, deleteTypeServiceRequest, getTypeServiceRequest, updateTypeServiceRequest } from "../api/typeservices";

const TypeServiceContext = createContext();

export const useTypeServices = () => {
    const context = useContext(TypeServiceContext);

    if (!context) {
        throw new Error("useTypeServices must be used within a TypeServiceProvider");
    }

    return context;
}

export function TypeServiceProvider({ children }) {
    const [typeservices, setTypeServices] = useState([]);

    const getTypeServices = async () => {
        try {
            const res = await getTypeServicesRequest();
            setTypeServices(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createTypeService = async (typeservice) => {
        const res = await createTypeServiceRequest(typeservice);
        console.log(res);
    };

    const deleteTypeService = async (id) => {
        try {
            const res = await deleteTypeServiceRequest(id);
            if (res.status === 204) setTypeServices(typeservices.filter(typeservice => typeservice._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getTypeService = async (id) => {
        try {
            const res = await getTypeServiceRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    };

    const updateTypeService = async (id, typeservice) => {
        try {
            await updateTypeServiceRequest(id, typeservice);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TypeServiceContext.Provider value={{
            typeservices,
            createTypeService,
            getTypeServices,
            deleteTypeService,
            getTypeService,
            updateTypeService
        }}>
            {children}
        </TypeServiceContext.Provider>
    )
}