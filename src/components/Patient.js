import React, { useState } from 'react'

function Patient({ id, name, sideEffects, deceased }) {
    const [isDead, setIsDead] = useState(deceased)
    const sideEffectsList = sideEffects.map((effect) => {
        return <li key={effect}>{effect}</li>
    })

    function handleChange(key) {
        let deathObj = {deceased: !isDead}
            
        fetch(`http://localhost:3000/patients/${key}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(deathObj)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(setIsDead(!isDead)) //update frontend after promise returns
    }

  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
            <ul>
                {sideEffectsList}
            </ul>
        </td>
        <td>
            <input type="checkbox" checked={isDead} onChange={() => handleChange(id)}/>
        </td>
    </tr>
  )
}

export default Patient