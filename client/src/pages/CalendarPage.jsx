import { Link } from "react-router-dom"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const fechaActual = new Date();
fechaActual.setDate(fechaActual.getDate() + 2);

const events = [
    { title: 'Meeting', start: fechaActual },
    { title: 'Meeting', start: fechaActual },
    { title: 'Meeting', start: fechaActual },
    { title: 'Meeting', start: fechaActual }
]

function CalendarPage() {

    const headerToolbarOptions = {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth dayGridWeek'
    };

    return (
        <div className="flex flex-wrap my-3 -mx-0 items-center justify-center">
            <div class="flex items-center">
                <div class="mx-4">
                    <h5 className="mb-0 font-bold dark:text-white">Calendario</h5>
                    <p className="mb-0 text-sm leading-normal">Se mostrara unicamente las citas de los pacientes programadas.</p>
                </div>
            </div>
            <div class="ml-auto text-right mx-4">
                {/* <Link to={'/add-doctor'}
                    className="inline-block px-4 py-1.5 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-green-600 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px hover:shadow-xs active:opacity-85 tracking-tight-rem"
                >Agendar</Link> */}
            </div>
            <div className="bg-zinc-650 max-w-full w-full my-3 py-2 p-2 px-2 mx-0 mt-3 m-auto flex-0 lg:w-12/11 rounded-md">
                <div class='flex flex-wrap z-index: -1'>
                    <div class='bg-slate-100 text-zinc-600 h-full min-w-0 break-words overflow-hidden w-full p-5 rounded-md bg-clip-border'>
                        {/* <h1>Demo App</h1> */}
                        <FullCalendar
                            locale={'ES'}
                            plugins={[dayGridPlugin]}
                            initialView=''
                            weekends={true}
                            events={events}
                            showNonCurrentDates={false}
                            // eventContent={renderEventContent}
                            headerToolbar={headerToolbarOptions}
                            // hiddenDays={[0]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

export default CalendarPage