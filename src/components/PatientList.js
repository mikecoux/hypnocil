import React from "react"
import Patient from "./Patient";

function PatientList({ patients, search }) {
    const allPatients = patients
    .filter((patient) => patient.name.toLowerCase().startsWith(search.toLowerCase()) || patient.side_effects.toString().toLowerCase().includes(search.toLowerCase()))
    .map((patient) => {
      return <Patient key={patient.id} 
      id={patient.id} 
      name={patient.name} 
      sideEffects={patient.side_effects}
      deceased={patient.deceased}/>
    })

    return(
      <table>
          <thead>
            <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
                <th>Living?</th>
            </tr>
          </thead>
          <tbody>
            {allPatients}
          </tbody>
      </table>  
    );
}

export default PatientList;