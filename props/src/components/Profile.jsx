import  students  from "../Data";


function Profile(){
  return (
    <div>
      <img src={students[0].profilePicture}/>
      <h3>{students[0].name}</h3>
      <p>Age: {students[0].age}</p>
      <p>Course: {students[0].course}</p>
    </div>
  );
};


export default Profile;
