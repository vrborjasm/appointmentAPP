import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4'

const Form = ({ addAppointment }) => {

    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        dischargeDate: '',
        dischargeTime: '',
        symptoms: '',
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    const { pet, owner, dischargeDate, dischargeTime, symptoms } = appointment;

    const submitAppointment = (e) => {
        e.preventDefault();

        if (pet.trim() === '' || owner.trim() === '' || dischargeDate.trim() === ''
            || dischargeTime.trim() === '' || symptoms.trim() === '') {
            setError(true)
            return;
        }
        setError(false)

        appointment.id = uuid();

        addAppointment(appointment);

        setAppointment({
            pet: '',
            owner: '',
            dischargeDate: '',
            dischargeTime: '',
            symptoms: '',
        })
    }

    return (
        <Fragment>
            <h1>Create appointment</h1>

            {error ? <p className="alerta-error">All fields are required</p> : null}

            <form
                onSubmit={submitAppointment}
            >
                <label>Pet's name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's name"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Owner</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner"
                    onChange={handleChange}
                    value={owner}
                />

                <label>Discharge date</label>
                <input
                    type="date"
                    name="dischargeDate"
                    className="u-full-width"
                    onChange={handleChange}
                    value={dischargeDate}
                />

                <label>Discharge time</label>
                <input
                    type="time"
                    name="dischargeTime"
                    className="u-full-width"
                    onChange={handleChange}
                    value={dischargeTime}
                />

                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add appointment</button>

            </form>
        </Fragment>

    );
}

export default Form;