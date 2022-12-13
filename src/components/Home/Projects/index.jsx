import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Projects() {
    return (
        <section className="--bg-3" data-scroll-section >
            <Container className="--container-3 --max">
                <Row>
                    <Col>
                        <h1 className="--title" data-scroll>Key Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Image className="--center" data-scroll data-scroll-speed="2" src={require('../../../assets/images/home/Page03-IMG3.png').default} roundedCircle />
                        <h5 className="--project-title font-weight-bold" data-scroll>
                            <span style={{ 'margin-left': '1vw'}}> CONSTRUCTION </span>-<br/> 
                            BUILDING
                        </h5>
                        <p className="--desc" data-scroll>Tropicana Cenang</p>
                    </Col>
                    <Col md={4}>
                        <Image className="--center" data-scroll data-scroll-speed="2" src={require('../../../assets/images/home/Page03-IMG1.png').default} roundedCircle />
                        <h5 className="--project-title font-weight-bold" data-scroll>CONSTRUCTION - <br/> CIVIL & INFRASTRUCTURE</h5>
                        <p className="--desc" data-scroll>Seremban Middle Ring Road (MRRS)</p>
                    </Col>
                    <Col md={4}>
                        <Image className="--center" data-scroll data-scroll-speed="2" src={require('../../../assets/images/home/Page03-IMG2.png').default} roundedCircle />
                        <h5 className="--project-title font-weight-bold" data-scroll>PROPERTY DEVELOPMENT</h5>
                        <p className="--desc" data-scroll>Mahligai at Nusa Damai</p>
                    </Col>
                </Row>
            </Container>
            {/* <div className="projects-bg"/> */}
            <div className="hero-container">
                <LazyLoadImage src={require("../../../assets/images/home/Page3_BG.jpg").default} className="projects-bg"
                 data-scroll data-scroll-speed="-2" data-scroll-direction="top"/>
            </div>
        </section>
    )
}