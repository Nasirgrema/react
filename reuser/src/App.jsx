import Profile from './components/Profile'
import Info from './components/Info'
import './App.css'

let Students = [
  { name: 'Adamu', course: 'React', level: 'Beginner' },
  { name: 'PK', course: 'React', level: 'Intermediate' },
  { name: 'Nasir', course: 'React', level: 'Advanced' },
]

let Data = {
  name: 'AdamsGeeky',
  course: 'Blockchain',
  level: 'Expert',
}

function App() {
  return (
    <>
      <h1>Student Profiles</h1>
      {/* Using Spread */}
      <Info 
        {...Data}
      />
      {/* normal  */}
      <Info 
        name={Data.name}
        course={Data.course}
        level={Data.level}
        />
      <div className='container'>
        {Students.map((s, index) => (
          <Profile  key={index} name={s.name} course={s.course} level={s.level} />
        ))}
      </div>
    </>
  )
}

export default App
