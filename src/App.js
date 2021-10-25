import './css/App.css';
import HomeHeader from "./Components/HomeHeader";
import HomeBody from "./Components/HomeBody";


function App() {
  return (
    <div className = 'app'>
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
