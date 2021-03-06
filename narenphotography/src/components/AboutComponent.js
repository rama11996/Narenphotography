import React, {Component} from 'react';
import { Media } from "reactstrap";

class About extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div class="left-half col-md-6">
                        <img src="/assets/images/Citi_Link/Citi_1.jpeg" alt="Banner-image" />
                    </div>
                    <div class="right-half col-md-6">
                        <h2> About Us</h2>
                        <p>
                            Naren Photography is made up of an elite team of professional photographers, all of whom are dedicated to providing the best images in the industry. Every picture is an opportunity to create a unique work of art. Our clients praise everything from our technical skills to our excellent customer service and, above all else, our flair for capturing true emotion. For more information, contact us today.
                        </p>
                        <p>
                            We are a young and dynamic team of photographers with lots of experience behind the camera. As a Photography Studio, our main purpose is producing the best work we’re capable of for each client we work with. There are limited special occasions in life, and we want to make sure the treasured memories we create for you are truly exceptional. Check out our team.
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About;
