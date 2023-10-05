import './App.css';
import Landing from './Components/Landing';
import LeftNavbar from './Components/LeftNavbar';


function App() {
  window.onload = ()=>{
    window.localStorage.setItem('hide', false)
  }
  return (
    <div className="App">
      <div className='left'>
      <LeftNavbar />
      <Landing />
      </div>

      <div className='right'>
        <p>Yes</p>
      </div>
    </div>
  );
}

export default App;
