import {useState} from 'react';

let Data = [
  {
    id: 1,
    name: "Adamu Adamu",
    age: 23,
  },
  {
    id: 2,
    name: "NaSir Danladi",
    age: 25,
 
  },
  {
    id: 3,
    name: "Usman Suleiman",
    age: 27,

  }
];

function Student() {
  const [students, setStudents] = useState(Data);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function addStudent() {
    let id = students.length + 1;
    let newStudent = {
      id: id,
      name: name,
      age: age,
    };
    setStudents([...students, newStudent]);
    setName("");
    setAge("");
  }

  return (
    <div>
      <h1>Students</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
      <div>
        {students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Student;