import logo from '../../assets/logo.svg';
import './App.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import BackgroundImage from "../BackgoundImage/BackgroundImage";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <BackgroundImage/>
            <Navigation/>


                <Profile/>


        </div>
    );
}

export default App;
