import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/Homepage'
import CalendarPage from './pages/CalendarPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import DoctorsPage from './pages/DoctorsPage'
import DoctorFormPage from './pages/DoctorFormPage'
import PatientsPage from './pages/PatientsPage'
import PatientFormPage from './pages/PatientFormPage'
import PatientProfileFormPage from './pages/PatientProfileFormPage'
import DateingPage from './pages/DateingPage'

import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from './context/TasksContext'
import { DoctorProvider } from './context/DoctorsContext'
import { PatientProvider } from './context/PatientsContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <DoctorProvider>
          <PatientProvider>
            <BrowserRouter>
              <main className='container mx-auto px-10'>
                <Navbar />
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path='/calendar' element={<CalendarPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/tasks' element={<TasksPage />} />
                    <Route path='/add-task' element={<TaskFormPage />} />
                    <Route path='/tasks/:id' element={<TaskFormPage />} />
                    <Route path='/doctors' element={<DoctorsPage />} />
                    <Route path='/add-doctor' element={<DoctorFormPage />} />
                    <Route path='/doctors/:id' element={<DoctorFormPage />} />
                    <Route path='/patients' element={<PatientsPage />} />
                    <Route path='/add-patient' element={<PatientFormPage />} />
                    <Route path='/patients/:id' element={<PatientFormPage />} />
                    <Route path='/patientsprofile/:id' element={<PatientProfileFormPage />} />
                    <Route path='/dateing' element={<DateingPage />} />
                  </Route>
                </Routes>
              </main>
            </BrowserRouter>
          </PatientProvider>
        </DoctorProvider>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App