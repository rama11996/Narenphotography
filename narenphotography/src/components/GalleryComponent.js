import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, BreadcrumbItem, Breadcrumb  } from "reactstrap";
import { Link } from 'react-router-dom';

     

    function RenderBusItem({ bus, onClick }) {
        return(
            <Link to={`gallery/${bus.id}`} >
            <Card>
                <CardImg width="100%" src={bus.image} alt={bus.name} />
                <CardBody>
                    <CardTitle> {bus.name}</CardTitle>
                 </CardBody>   
                
            </Card>  
            </Link> 
        );
    }

    const Gallery = (props) => {

        const gallery = props.buses.map((bus) => {
            return (
                <div key={ bus.id } className="col-12 col-md-4 gallery-image">    
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