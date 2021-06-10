import logo from '../../assets/logo.svg';
import './App.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import BackgroundImage from "../BackgoundImage/BackgroundImage";
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <BackgroundImage/>
                <Navigation/>

                <Route path="/profile" component={Profile}/>
                <Route path="/dialogs" component={Dialogs}/>



            </div>
        </BrowserRouter>
            );


}

export default App;
