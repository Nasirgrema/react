import Counter from "../componets/Counter";
import Student from "../componets/Student";

let data = [
  {
    id: 1,
      pic:  "/gsu.jpeg",
    title: "Learn",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis voluptatibus facere harum libero molestiae velit, provident aliquid porro id delectus vero explicabo qui vitae consequatur, voluptatum assumenda enim suscipit.",
  },
  {
    id: 2,
      pic:  "/gsu.jpeg",
    title: "Build",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis voluptatibus facere harum libero molestiae velit, provident aliquid porro id delectus vero explicabo qui vitae consequatur, voluptatum assumenda enim suscipit.",
  },
  {
    id: 3,
    pic:  "/gsu.jpeg",
    title: "Launch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis voluptatibus facere harum libero molestiae velit, provident aliquid porro id delectus vero explicabo qui vitae consequatur, voluptatum assumenda enim suscipit.",
  },


]


function Values (props){
  return(
    <div className="values">   
        
        <img src={props.src} alt="" />
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
    </div>
  )
}


function Home () {
  return (
    <>
    <div className="home">
      <h1>Home</h1>
      <Counter />
      <Student />
      <p>Welcome to our Home page!</p>
    </div>
    <div className="values">
      {data.map((item) => (
        <Values key={item.id} src={item.pic} title={item.title} description={item.description} />
      ))}
    </div>
    </>
  );
}

export default Home;