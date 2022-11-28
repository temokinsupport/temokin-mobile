import React from "react";
import { Container, Row, Col, Card} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export default function Projects() {
    return (
        <div className="--bg-3" >
            <Container className="--max">
              <Row>
                <Col md={6}>
                  <Card className="--blue" 
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <Card.Img variant="top" src={require('../../../assets/images/civilengineering/CivilEng_IMG-Seremban.png').default} />
                    <Card.Body>
                      <Card.Title>
                        Seremban Middle Ring Road (Mrrs)
                      </Card.Title>
                      <Card.Text>
                        <span className="--title">Client</span>
                        <span>Public Works Department, Malaysia (JKR)</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Value</span>
                        <span>RM2.5 Million</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Period</span>
                        <span>May 2004 to Nov 2017</span>
                      </Card.Text>
                      <NavLink className="--btn-view-project" to="/civil-engineering/seremban-middle-ring-road">View Project</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="--right --blue" 
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <Card.Img variant="top" src={require('../../../assets/images/civilengineering/CivilEng_IMG-Sungai.png').default} />
                    <Card.Body>
                      <Card.Title>
                        Sungai Gombak Bridge
                      </Card.Title>
                      <Card.Text>
                        <span className="--title">Client</span>
                        <span>Dewan Bandaraya Kuala Lumpur (DBKL)</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Value</span>
                        <span>RM10 Million</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Period</span>
                        <span>Mar 2002 to Mar 2004</span>
                      </Card.Text>
                      <NavLink className="--btn-view-project" to="/civil-engineering/sungai-gombak-bridge">View Project</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card 
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <Card.Img variant="top" src={require('../../../assets/images/civilengineering/CivilEng_IMG-Earthwork.png').default} />
                    <Card.Body>
                      <Card.Title>
                        EarthWork Construction, Power <br/>
                        Station Bandar Baru Arang
                      </Card.Title>
                      <Card.Text>
                        <span className="--title">Client</span>
                        <span>Perbadanan Kemajuan Negeri Selangor (PKNS)</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Value</span>
                        <span>RM10 Million</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Period</span>
                        <span>Jun 1993 to Jun 1994</span>
                      </Card.Text>
                      <NavLink className="--btn-view-project" to="/civil-engineering/earthwork-constructio-power-station-bandaru-baru-arang">View Project</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="--right" 
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <Card.Img variant="top" src={require('../../../assets/images/civilengineering/CivilEng_IMG-TNB.png').default} />
                    <Card.Body>
                      <Card.Title>
                        TNB Substations 33/11KV
                        <br/><br/>
                      </Card.Title>
                      <Card.Text>
                        <span className="--title">Client</span>
                        <span>Tenaga Nasional Berhad, Shah Alam (TNB)</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Value</span>
                        <span>RM4.1 Million</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Period</span>
                        <span>Jul 1991 to Feb 1992</span>
                      </Card.Text>
                      <NavLink className="--btn-view-project" to="/civil-engineering/tnb-substations-33-11kv">View Project</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card 
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <Card.Img variant="top" src={require('../../../assets/images/civilengineering/CivilEng_IMG-PipeJacking.png').default} />
                    <Card.Body>
                      <Card.Title>
                        Pipe Jacking Work
                      </Card.Title>
                      <Card.Text>
                        <span className="--title">Client</span>
                        <span>Palm Grove Housing Sdn Bhd</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Value</span>
                        <span>RM3 Million</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Period</span>
                        <span>Jul 1991 to May 1995</span>
                      </Card.Text>
                      <NavLink className="--btn-view-project" to="/civil-engineering/pipe-jacking-works">View Project</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="--right" 
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <Card.Img variant="top" src={require('../../../assets/images/civilengineering/CivilEng_IMG-PipeJacking-02.png').default} />
                    <Card.Body>
                      <Card.Title>
                        Pipe Jacking For SG Buloh to Johor <br/>
                        Bahru for Water Privatization @ <br/>
                        1500M Dia. & 1350 Dia
                      </Card.Title>
                      <Card.Text>
                        <span className="--title">Client</span>
                        <span>Active Review Sdn Bhd</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Value</span>
                        <span>RM12 Million</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="--title">Period</span>
                        <span>Oct 1994 to Nov 1994</span>
                      </Card.Text>
                      <NavLink className="--btn-view-project" to="/civil-engineering/pipe-jacking-for-sg-buloh-to-johor-bahru-for-water-privatization-1500m-dia-and-1350-dia">View Project</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* <div className="projects-bg-shape"/>
            <div className="projects-bg-shape1"/> */}
            {/* <div className="projects-bg"/>
            <div className="project1-bg"/> */}
        </div>
    )
}