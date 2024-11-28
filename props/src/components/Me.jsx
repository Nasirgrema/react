const user = {
    name:"Aramma",
    level:"300L",
    imageUrl: '../public/programmer.jpg',
    id: 3
  };
  function Me(){
    return(
      <>
      <div>
      <img src= {user.imageUrl}
      alt={"photo of" + user.name }
      style ={{
        width: '10%'
      }} 
      />
      </div>
      </>
    );
  }
  export default Me