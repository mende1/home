import React from 'react';

import {
    Col,
    Card
} from "react-bootstrap";
const ExperienceCard = ({ data }) => {
    return (
        <Col lg="4">
            {/* <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    <a href={data.url} style={{color: "black"}}>
                    {data.name}
                    </a>
                    <br/>
                    {data.date}
                </p>
                
            </div> */}
            <a href={data.url} target='_blank' style={{ color: 'black', textDecorationLine: "none" }}>
                <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Body className='text-center'>
                        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
                        <Card.Title as="h6" >{data.role} </Card.Title>
                        {data.name}
                    </Card.Body>
                </Card>
            </a>
        </Col>
    );
}

export default ExperienceCard;