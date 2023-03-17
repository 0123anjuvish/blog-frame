
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import UpperNav from './components/UpperNavbar';
import LowerNav from './components/LowerNavbar';
import Search from './components/SearchBar';
import Home from "./components/pages/Home";
import About from "./components/pages/AboutUs";
import Health from "./components/dropdown/health"
import Recipe from './components/dropdown/recipe';
 import Contact from './components/pages/ContactUs';
import Footer from './components/Footer';
import Education from './components/dropdown/education';
import Entertainment from './components/dropdown/entertainment';
import SoloRecp from './components/dropdown/RecipeData/SoloRecp';
import SoloHlt from './components/dropdown/HealthData/SoloHlt';
import SoloEtn from './components/dropdown/EtnData/SoloEtn';
import SoloEdu from './components/dropdown/EduData/soloEdu';

// import Login from './components/Login';

function App() {
  return (
    <>
   
  
 
   <BrowserRouter>
   <UpperNav/>

<LowerNav/>
      <Routes>
        <Route path="/" element={<Home />}/>
       
        <Route path="about/" element={<About />}/>
        <Route path="contact/" element={<Contact />}/>
        <Route path="recipe/" element={<Recipe />}/>
        <Route path="/recipe/:id" element={<SoloRecp />}/>
        <Route path="edu/" element={<Education />}/>
        <Route path="/edu/:id" element={<SoloEdu />}/>
        <Route path="etn/" element={<Entertainment />}/>
        <Route path="/etn/:id" element={<SoloEtn />}/>
          <Route path="health/" element={<Health />} />
          <Route path="/health/:id" element={<SoloHlt />}/>
          <Route path="/search/:query" element={<Search />} />

         
       
      </Routes>
    </BrowserRouter>
    <Footer/>
   </>
  );
}

export default App;
