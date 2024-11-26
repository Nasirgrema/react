import students from '../Data'
import Counter from '../counter';

function Profile(data){
  return (
    <div>
      <Counter/>
      <h3>{data.name}</h3>
      <p>{data.course}</p>
      <p>{data.level}</p>
    </div>
  );
};
                  
export default Profile;
