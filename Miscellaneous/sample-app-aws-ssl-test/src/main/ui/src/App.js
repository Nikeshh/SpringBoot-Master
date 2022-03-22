import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { BASE_URL } from "./base.js";

function App() {

  const connectToTheBackend = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const { data } = await axios.get(
        BASE_URL + `/hello`,
        config
    );

    alert(data);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectToTheBackend}>Connect to the backend</button>
      </header>
    </div>
  );
}

export default App;
