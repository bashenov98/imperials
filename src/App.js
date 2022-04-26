import Header from "./components/Header/Header";
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </div>
  );
}

export default App;
