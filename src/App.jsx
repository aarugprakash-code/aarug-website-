import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar.jsx'
import Homepage from './Pages/Homepage/Homepage.jsx'
import About from './Pages/About/About.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
    
  )
}

export default App;
