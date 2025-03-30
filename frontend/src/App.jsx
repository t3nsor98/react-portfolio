import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


const About = () => (
  <div className="text-white text-center text-3xl mt-10">About Me</div>
);
const Projects = () => (
  <div className="text-white text-center text-3xl mt-10">My Projects</div>
);
const Education = () => (
  <div className="text-white text-center text-3xl mt-10">Education</div>
);
const Contact = () => (
  <div className="text-white text-center text-3xl mt-10">Contact Me</div>
);

function App() {
  return (
    <Router>
      <div className="bg-[#020206] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
