import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'




function App() {
  
 
    return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/Projetos" />
        <Route path="/Tecnologias" />
        <Route path="/Sobre Mim" />
      </Routes>
    </Router>
    )



      // <>

      //   <Navbar />
      // </>
  
}

export default App
