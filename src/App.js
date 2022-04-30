import Header from "./components/Header/Header";
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
