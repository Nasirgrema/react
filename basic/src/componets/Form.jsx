import { useState} from 'react';

// name:
// age:
// password:
// email:
// phone:
// gender:
// address:
// state:

function Form() {
  const [Submit, setSubmit] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    email: ""
  });


  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        value={formdata.name}
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={formdata.age}
        name="age"
        placeholder="Enter age"
        onChange={handleChange}
      />
      <input
        type="text"
        value={formdata.email}
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <button 
      onClick={() => setSubmit(true)} 
      >Submit</button>
    </div>
  );
}


export default Form;