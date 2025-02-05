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
            <a href={data.url} target='_blank' rel="noopener noreferrer" style={{ color: 'black', textDecorationLine: "none" }}>
                <Card className="card shadow-lg p-2 mb-5 bg-white rounded">
                    <Card.Body className='text-center'>
                        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
                        <Card.Title as="h6" >{data.role} </Card.Title>
                        {data.name}
                        <br />
                        <br />
                        <p style={{fontSize: "0.9rem"}}>
                          <em>{data.date}</em>
                        </p>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    );
}

export default ExperienceCard;