import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect( () => {
    if(initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments] );

  const addAppointment = (appointment) => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }

  const deleteAppointment = (id) => {
    const newAppointmentList = appointments.filter(appointment => appointment.id !== id);
    setAppointments(newAppointmentList);
  }

  const title = appointments.length === 0 ? 'there are no appointments' : 'Appointments list';

  return (
    <Fragment>
      <h1>Patient Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              addAppointment={addAppointment}
            />
          </div>
          <div className="one-half column">
            <h1>{title}</h1>
            {appointments.map(appointment => (
              <Appointment 
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
