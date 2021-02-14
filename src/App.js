import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Cap from "./components/Cap";
import StarProject from "./components/StarProject";
import Expert from "./components/Expert";
import WhyMe from "./components/Why";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import Form from "./components/FormRequest";
import Ten from "./components/Ten";

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Cap/>
                <StarProject/>
                {/*<Expert/>*/}
                {/*<WhyMe/>*/}
                {/*<Jobs/>*/}
                {/*<Form/>*/}
                {/*<Ten/>*/}
                {/*<Footer />*/}
            </div>
        </Router>
    );
}

export default App;
