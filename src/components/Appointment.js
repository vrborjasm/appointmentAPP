import React from 'react';

const Appointment = ({appointment, deleteAppointment}) => {
    return (  
        <div className="cita">
            <p>Pet: <span>{appointment.pet}</span> </p>
            <p>Owner: <span>{appointment.pet}</span> </p>
            <p>Discharge date: <span>{appointment.dischargeDate}</span> </p>
            <p>discharge time: <span>{appointment.dischargeTime}</span> </p>
            <p>Symptoms: <span>{appointment.symptoms}</span> </p>

            <button
                className="button eliminar u-full-width"
                onClick={() => deleteAppointment(appointment.id)}
            >Delete &times;</button>
        </div>
    );
}
 
export default Appointment;