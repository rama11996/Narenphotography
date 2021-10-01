import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, BreadcrumbItem, Breadcrumb  } from "reactstrap";
import { Link } from 'react-router-dom';

     

    function RenderBusItem({ bus, onClick }) {
        return(
            
            <Card className="flip-card-inner">
                <div className="flip-card-front">
                    <CardImg width="100%" src={bus.image} alt={bus.name} />
                </div>
               
                <CardBody className="flip-card-back">
                    <Link to={`gallery/${bus.id}`} >
                         <h6>View More Pics</h6>
                         <CardTitle> {bus.name}</CardTitle>

                    </Link> 
                 </CardBody>   
                
            </Card>  
            
        );
    }

    const Gallery = (props) => {

        const gallery = props.buses.map((bus) => {
            return (
                <div key={ bus.id } className="col-12 col-md-4 gallery-image flip-card">    
                    <RenderBusItem bus={bus} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    
                    <div className="col-12">
                        <h3> Gallery </h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    { gallery }
                </div>
            </div>
        );

    }
    




export default Gallery;