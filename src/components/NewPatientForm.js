import React, { useState } from "react"
let effectsArr = []

function NewPatientForm({ onAddPatient }) {
    const [formData, setFormData] = useState({
        name: '',
        deceased: false,
        side_effects: []
    })

    function handleChange(e) {
        const {name, value} = e.target
        if (name === 'side_effects'){
            console.log(effectsArr)
            if(e.target.checked && !formData.side_effects.includes(value)) {
                effectsArr.push(value)
            } else if (formData.side_effects.includes(value) && !e.target.checked){
                effectsArr.splice(effectsArr.indexOf(value), 1)
            }
            setFormData({
                ...formData,
                [name]: effectsArr
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch('http://localhost:3000/patients', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => onAddPatient(data))
        e.target.reset()
    }

    return(
        <>
            <form id="new-patient-form" onSubmit={handleSubmit}>
                <input name="name" id="patient-name" type="text" placeholder="Patient Name" onChange={handleChange}/>
                <div onChange={handleChange}>
                    <input type="checkbox" value="Dizziness" name="side_effects"/>
                    <label>Dizziness</label><br />
                    <input type="checkbox" value="Nausea" name="side_effects"/>
                    <label>Nausea</label><br />
                    <input type="checkbox" value="Somnambulism" name="side_effects"/>
                    <label>Somnambulism</label><br />
                    <input type="checkbox" value="Memory" name="side_effects"/>
                    <label>Memory</label><br />
                    <input type="checkbox" value="Allergy" name="side_effects"/>
                    <label>Severe Allergic Reaction</label><br />
                    <input type="checkbox" value="Headache" name="side_effects"/>
                    <label>Headache</label>
                </div>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;