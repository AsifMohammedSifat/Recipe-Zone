import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import './app.css';

function App() {

  return (
    <div className="container mx-auto">
     <Nav/>    
     <Hero/>
     <div className="h-screen"></div>
    </div>
  )
}

export default App
