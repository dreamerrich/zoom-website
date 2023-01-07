import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends Component {
    render() {
        return(
            <div className='bg-dark'>
                <Row>
                    <Col style={{color:"white"}}>
                        <h3>About</h3>
                        <p>Zooming Blog</p>
                        <p>Customers</p>
                        <p>Our teams</p>
                        <p>Careers</p>
                    </Col>
                    <Col style={{color:"white"}}>
                        <h3>Download</h3>
                        <p>Zooming Blog</p>
                        <p>Customers</p>
                        <p>Our teams</p>
                        <p>Careers</p>
                    </Col>
                    <Col style={{color:"white"}}>
                        <h3>Sales</h3>
                        <p>Zooming Blog</p>
                        <p>Customers</p>
                        <p>Our teams</p>
                        <p>Careers</p>
                    </Col>
                    <Col style={{color:"white"}}>
                        <h3>Support</h3>
                        <p>Zooming Blog</p>
                        <p>Customers</p>
                        <p>Our teams</p>
                        <p>Careers</p>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default Footer;