import React, { useState } from 'react'

function FirstForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // alert(Name: ${name}, Age: ${age});
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <label>Name: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label><br/>
        <label>Age: 
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label><br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default FirstForm;