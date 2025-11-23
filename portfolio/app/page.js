import About from "./components/ui/About";
import Home from "./components/ui/Home";
import Services from "./components/ui/Services";
import Works from "./components/ui/Works";
import Footer from "./constants/Footer";
import Navbar from "./constants/Navbar";


export default function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Works/>
      <Footer/>
  
    </>
  );
}
