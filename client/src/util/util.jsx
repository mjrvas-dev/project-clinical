import React from 'react';

/* ------------------------------------    EXPEDIENTE    ------------------------------------ */

// Manejo de tipo de estatus para los expedientes de cada paciente
    /* export const getStatusText = (status) => {
        return status === 1 ? 'Activo' : 'Inactivo';
    }; */

    export const getStatusText = (status) => {
        const statusMapping = {
            0: { text: 'Eliminado', class: 'bg-red-500 text-white' },
            1: { text: 'Creado', class: 'bg-emerald-500' },
            2: { text: 'En Proceso', class: 'bg-amber-500' },
            3: { text: 'Finalizado', class: 'bg-cyan-500' },
            default: { text: 'Desconocido', class: 'badge-unknown' },
        };

        const { text, class: statusClass } = statusMapping[status] || statusMapping.default;

        return (
            <span className={`badge ${statusClass}`}>
                {text}
            </span>
        );
    };