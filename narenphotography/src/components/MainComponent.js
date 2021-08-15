import React ,{ Component}  from 'react';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Gallery from './GalleryComponent';
import GalleryDetails from './GallerySecComponent'
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {BUSES} from '../shared/buses';
import { BUSESDETAIL } from '../shared/busdetails';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import '../App.css';


const mapStateToProps = state => {
  return {
    buses: BUSES,
    busdetails: BUSESDETAIL
    
  }
}

class Main extends Component {
    constructor(props) {
        super(props);
        
    
      }

      
    render() {
        const HomePage = () => {
            return (
              <Home />
            );
          }
          const BusWithId = ({match}) => {
            return(
              <GalleryDetails bus={this.props.buses.filter((bus) => bus.id === parseInt(match.params.busId,10))[0]} 
              busdetails={this.props.busdetails.filter((busdetail) => busdetail.busId === parseInt(match.params.busId,10))} />
            );
          };
        return(
            <div >
            <Header/> 
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path='/about-us' component={() => <About /> } />
                <Route exact path="/Gallery" component={() => <Gallery  buses={this.props.buses }/> } />
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

export default withRouter(connect(mapStateToProps)(Main));