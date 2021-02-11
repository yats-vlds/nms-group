import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Cap from "./components/Cap";
import StarProject from "./components/StarProject";
import Expert from "./components/Expert";

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Cap />
                <StarProject/>
                <Expert />
            </div>
        </Router>
    );
}

export default App;
