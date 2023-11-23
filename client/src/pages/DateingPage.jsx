import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import DateingSidebar from '../components/DateingSidebar';

// Componente para la lista de citas
/*const AppointmentsList = ({ appointments, handleEditAppointment, handleDeleteAppointment }) => (
  <>
    <h2 className="text-lg font-bold mb-4 dark:text-white">Lista de Citas</h2>
    <ul className="mb-4">
      {appointments.map(appointment => (
        <li key={appointment.id} className="mb-2">
          {appointment.patientName} - {appointment.date} {appointment.time}
          <button onClick={() => handleEditAppointment(appointment.id)}>Editar</button>
          <button onClick={() => handleDeleteAppointment(appointment.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  </>
);*/

// Componente principal del gestor de citas
const DateingPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    id: '',
    patientName: '',
    date: '',
    time: '',
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    // Puedes cargar las citas desde algún servicio o fuente de datos aquí.
    // Por ahora, solo usaremos un conjunto de citas de ejemplo.
    setAppointments([
      { id: '1', patientName: 'John Doe', date: '2023-01-01', time: '10:00' },
      { id: '2', patientName: 'Jane Doe', date: '2023-01-02', time: '02:30' },
      // Agrega más citas si es necesario
    ]);
  }, []);

  const handleAddAppointment = () => {
    setAppointments([...appointments, { ...newAppointment, id: String(Date.now()) }]);
    setNewAppointment({ id: '', patientName: '', date: '', time: '' });
    closeSidebar();
  };

  const handleEditAppointment = (id) => {
    const selectedAppointment = appointments.find(appointment => appointment.id === id);
    setNewAppointment({ ...selectedAppointment });
    openSidebar();
  };

  const handleUpdateAppointment = () => {
    setAppointments(appointments.map(appointment =>
      appointment.id === newAppointment.id ? { ...newAppointment } : appointment
    ));
    setNewAppointment({ id: '', patientName: '', date: '', time: '' });
    closeSidebar();
  };

  const handleDeleteAppointment = (id) => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar esta cita?");
    if (isConfirmed) {
      setAppointments(appointments.filter(appointment => appointment.id !== id));
      closeSidebar();
    }
  };

  const openSidebar = () => {
    setIsSidebarVisible(true);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  // Configuración de las columnas de la tabla
  const columns = useMemo(
    () => [
      { accessorKey: 'patientName', header: 'Nombre Completo', size: 300 },
      { accessorKey: 'date', header: 'Fecha', size: 20 },
      { accessorKey: 'time', header: 'Hora', size: 20 },
      {
        accessorKey: 'options',
        header: 'Opciones',
        size: 150,
        Cell: ({ row }) => (
          <>
            <button onClick={() => handleEditAppointment(row.original.id)} className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-800 hover:bg-blue-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85">Editar</button>
            <button onClick={() => handleDeleteAppointment(row.original.id)} className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-red-800 hover:bg-red-600 border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem hover:-translate-y-px active:opacity-85">Eliminar</button>
          </>
        ),
      },
    ],
    [handleEditAppointment, handleDeleteAppointment]
  );

  // Configuración de la tabla
  const table = useMaterialReactTable({
    columns,
    data: appointments,
    localization: MRT_Localization_ES,
  });

  return (
    <div className="flex flex-wrap my-3 -mx-0 items-center justify-center">
      <div className="flex items-center">
        <div className="mx-4">
          <h5 className="mb-0 font-bold dark:text-white">Listado Citas</h5>
          <p className="mb-0 text-sm leading-normal">General</p>
        </div>
      </div>
      <div className="ml-auto text-right mx-4">
        <Link
          onClick={openSidebar}
          className="inline-block px-4 py-1.5 m-0 mb-0 mr-1 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
        >
          Agendar
        </Link>
      </div>
      <div className="bg-zinc-650 max-w-full w-full my-3 py-2 p-2 px-2 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md z-0">
        <MaterialReactTable table={table} />
      </div>
      {isSidebarVisible && (
        <DateingSidebar
        newAppointment={newAppointment}
        setNewAppointment={setNewAppointment}
        handleUpdateAppointment={handleUpdateAppointment}
        handleAddAppointment={handleAddAppointment}
        closeSidebar={closeSidebar}
      />
      )}
    </div>
  );
};

export default DateingPage;
