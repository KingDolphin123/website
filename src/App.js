import './css/App.css';
import HomeHeader from "./Components/HomeHeader";
import HomeBody from "./Components/HomeBody";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <div className = 'app'>
        <Navbar />
      <div className="header">
        <HomeHeader />
      </div>
      <div className = 'body'>
        <HomeBody />
      </div>
    </div>
  );
}

export default App;
