import logo from '../../assets/logo.svg';
import './App.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import BackgroundImage from "../BackgoundImage/BackgroundImage";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Photo from "../Photo/Photo";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <BackgroundImage/>
                <Navigation/>

                <Route path="/profile" render={() => <Profile
                    postData={props.state.postData}/>}
                />

                <Route path="/dialogs" render={() => <Dialogs
                    dialogsData={props.state.dialogsData}
                    messagesData={props.state.messagesData}/>}
                />

                <Route path="/news" component={News}/>
                {/*<Route path="/news" component={News}/>*/}
                <Route path="/photo" component={Photo}/>



            </div>
        </BrowserRouter>
            );


}

export default App;
