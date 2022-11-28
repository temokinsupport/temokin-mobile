import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function WeDig() {
    return (
        <div className="--container-8" data-scroll-section>
            <Container>
                <Row>
                    <Col>
                    <h1 className="--title" data-scroll>We Dig</h1>
                    <p className="--desc" data-scroll>More than just our values, we dig is a tribute <br/>
                    to our early pipe jacking and earthworks days,<br/>
                    and it serves as a constant reminder of how <br/>
                    even the toughest journeys can lead to the <br/>
                    most rewarding of destinations. and trust us, <br/>
                    digging is as tough as it gets.
                    </p>
                    </Col>
                </Row>
            </Container>
            <div className="wedig-bg"/>
       </div>
    )
}