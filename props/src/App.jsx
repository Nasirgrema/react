import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/Contact"
import Learning from "./pages/Learning"
import Layout from "./components/layout"
function App() {
  return (
   <div className='App'>
     <BrowserRouter>
     <Layout>
      <Routes>
      <Route path= "/" element ={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Learning" element={<Learning/>}/>
      </Routes>
     </Layout>
     </BrowserRouter>
   </div>
  )
}

export default App
