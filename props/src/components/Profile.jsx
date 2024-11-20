import students from '../Data'

function Profile(data){
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.course}</p>
      <p>{data.level}</p>
    </div>
  );
};
                  
export default Profile;
