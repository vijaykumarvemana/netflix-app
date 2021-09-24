


import './App.css';
import NavBar from './components/NavBar';
import logo from './netflix_logo.png'
import Footer from "./components/Footer";



import MainpageB from './components/MainpageB';

function App() {
  return (
    <div className="App">
      <NavBar />

      <MainpageB title="Star Wars"  />

    
     <Footer />
    

    </div>
   
  );
}

export default App;
