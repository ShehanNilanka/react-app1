import logo from './logo.svg';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Helloo my react app changed and commited!!!
          <button onClick={() => h()}>Click This Button </button>
      </header>
    </div>
  );
}


function h() {
  console.log("Button Clicked");
}
export default App;
