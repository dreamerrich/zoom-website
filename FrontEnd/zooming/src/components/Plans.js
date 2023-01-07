import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import Header from './Header';

class Plans extends Component {
    render() {
        return(
            <div>
                <Header />
                <Card>
                    <CardTitle>Basic</CardTitle>
                    <CardBody>
                    <h1>Basic</h1>
                    <p>Free</p>
                    <Button> Sign Up </Button>
                    <ol style={{ listStyleType: "None" }}>
                            <li>Per-Meeting could last long till 40 minutes.</li>
                            <li>Attendees allow by are 100 per meeting</li>
                            <li>3 whiteboard</li>
                            <li>Mail & Calender</li>
                    </ol>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>Pro</CardTitle>
                    <CardBody>
                        <h1>Pro</h1>
                        <p>13,200</p>
                        <Button>Buy Now</Button>
                        <ol style={{ listStyleType: "None" }}>
                            <li>Per-Meeting could last long till 40 minutes.</li>
                            <li>Attendees allow by are 100 per meeting</li>
                            <li>3 whiteboard</li>
                            <li>Mail & Calender</li>
                        </ol>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>Business</CardTitle>
                    <CardBody>
                        <h1>Business</h1>
                        <p>18,000</p>
                        <Button>Buy Now</Button>
                        <ol style={{ listStyleType: "None" }}>
                            <li>Per-Meeting could last long till 40 minutes.</li>
                            <li>Attendees allow by are 100 per meeting</li>
                            <li>3 whiteboard</li>
                            <li>Mail & Calender</li>
                        </ol>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>Enterprice</CardTitle>
                    <CardBody>
                        <h1>Enterprice</h1>
                        <p>Contact</p>
                        <Button>Contact Sales</Button>
                        <ol style={{ listStyleType: "None" }}>
                            <li>Per-Meeting could last long till 40 minutes.</li>
                            <li>Attendees allow by are 100 per meeting</li>
                            <li>3 whiteboard</li>
                            <li>Mail & Calender</li>
                        </ol>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Plans;