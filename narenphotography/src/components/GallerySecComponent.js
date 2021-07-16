import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom'

    function RenderDish({bus}) {
        if (bus != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={bus.image} alt={bus.name} />
                        <CardBody>
                            <CardTitle> {bus.name}</CardTitle>
                           
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

function RenderDetails ({busdetails}) {
    if (busdetails != null) {
        const details = busdetails.map(busdetail => {
            return (
                <div className="col-12">
                    <Card>
                    <CardImg width="100%" src={busdetail.image} alt={busdetail.name} />
                    </Card>
                     
                
                </div>
            )
        } )

        return(
            
                
                <div className="gallery-images">
                    {details}
                </div>

            
        )
    }
    else {
        return(
            <div></div>
        )
    }
}


   
    const GalleryDetails = (props) => {

        const bus = props.bus
      
        if (bus == null) {
            return (<div></div>);
        }
        return (
            <div className="container">
                 <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.bus.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.bus.name}</h3>
                        <hr />
                    </div>                
                </div>
            
                <div className='col-sm-3 col-md-3'>
                  <RenderDetails busdetails= {props.busdetails} /> 
                </div>
            </div>
        )
    }



export default GalleryDetails;