import React ,{ Component}  from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Gallery from './GalleryComponent';
import GalleryDetails from './GallerySecComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {BUSES} from '../shared/buses';
import { BUSESDETAIL } from '../shared/busdetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          buses: BUSES,
          busdetails: BUSESDETAIL
          
        };
    
      }
    render() {
        const HomePage = () => {
            return (
              <Home />
            );
          }
          const BusWithId = ({match}) => {
            return(
              <GalleryDetails bus={this.state.buses.filter((bus) => bus.id === parseInt(match.params.busId,10))[0]} 
              busdetails={this.state.busdetails.filter((busdetail) => busdetail.busId === parseInt(match.params.busId,10))} />
            );
          };
        return(
            <div >
            <Header/> 
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path='/about-us' component={() => <About /> } />
                <Route exact path="/Gallery" component={() => <Gallery  buses={this.state.buses }/> } />
                <Route path="/gallery/:busId" component={BusWithId} />
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