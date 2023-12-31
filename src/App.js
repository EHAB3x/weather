import './App.css';
import Forecast from './Components/Forecast';
import Landing from './Components/Landing';
import LeftNavbar from './Components/LeftNavbar';
import RightNav from './Components/RightNav';
import Toggler from './Components/Toggler';


function App() {
  window.onload = ()=>{
    window.localStorage.setItem('hide', false)
  }
  return (
    <div className="App">
      <div className='left'>
        <LeftNavbar />
        <Landing />
        <Toggler />
      </div>

      <div className='right'>
        <RightNav />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
