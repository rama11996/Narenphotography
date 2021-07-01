import React ,{ Component}  from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Gallery from './GalleryComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {BUSES} from '../shared/buses';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          buses: BUSES,
          
        };
    
      }
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
                <Route exact path='/about-us' component={() => <About /> } />
                <Route path="/Gallery" component={() => <Gallery  buses={this.state.buses}/> } />
                <Route path="/Contactus" component={HomePage} />
                <Route path="/" component={HomePage} />
                <Redirect to="/" />
            </Switch> 
            <Footer />
            </div>
        );
    }
}

export default Main;