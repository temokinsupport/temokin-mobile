import React from "react";
import { Container, Row, Col} from 'react-bootstrap';

export default function Desc() {
    return (
        <div className="--bg-2">
            <Container>
              <Row>
                <Col>
                  <h1 className="--title" data-scroll>Civil Engineering</h1>
                  <hr/>
                  <p className="--desc" data-scroll >Our expertise in engineering has seen <br/>
                  us build many of the  nation's electricity <br/>
                  substations, major underground sewage <br/>
                  lines, complex bridges and major highways.</p>
                </Col>
              </Row>
            </Container>
            <div className="header-shapes-2"/>
            <div className="desc-bg"/>
        </div>
    )
}