
function Profile({ name, age, course, profilePicture }){
  return (
    <div>
      <img src={profilePicture}/>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
};


export default Profile;
