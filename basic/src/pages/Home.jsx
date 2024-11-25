
let data = [
  {
    id: 1,
    title: "Learn",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis voluptatibus facere harum libero molestiae velit, provident aliquid porro id delectus vero explicabo qui vitae consequatur, voluptatum assumenda enim suscipit.",
  },
  {
    id: 2,
    title: "Build",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis voluptatibus facere harum libero molestiae velit, provident aliquid porro id delectus vero explicabo qui vitae consequatur, voluptatum assumenda enim suscipit.",
  },
  {
    id: 3,
    title: "Launch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis voluptatibus facere harum libero molestiae velit, provident aliquid porro id delectus vero explicabo qui vitae consequatur, voluptatum assumenda enim suscipit.",
  },


]


function Values (){
  return(
    <>   
        <img src="/gsu.jpeg" alt="" />
        <h3>Learn</h3>
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis voluptatibus facere harum libero molestiae velit, provident aliquid porro id delectus vero explicabo qui vitae consequatur, voluptatum assumenda enim suscipit.
        </p>
    </>
  )
}


function Home () {
  return (
    <>
    <div className="home">
      <h1>Home</h1>
      <p>Welcome to our Home page!</p>
    </div>
    <Values/>
    </>
  );
}

export default Home;