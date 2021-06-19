import React ,{ Component}  from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css';


class Main extends Component {

    render() {
        const HomePage = () => {
            return (
              <Home />
            );
          }
        return(
            <div >
            <Header/> 
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/About" component={HomePage} />
                <Route path="/Gallery" component={HomePage} />
                <Route path="/Contactus" component={HomePage} />
                <Redirect to="/" />
            </Switch> 
            <Footer />
            </div>
        );
    }
}

export default Main;