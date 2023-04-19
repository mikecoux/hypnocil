import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/patients')
      .then(res => res.json())
      .then(data => setPatients(data))
  }, [])

  function handleAddPatient (newPatient){
    setPatients([...patients, newPatient])
  }

  return (
    <div className="root">
      <Header onSetSearch={setSearch}/>
      <div className="content">
        <NewPatientForm onAddPatient={handleAddPatient}/>
        <PatientList patients={patients} search={search}/>
      </div>
    </div>
  );
}

export default App;
