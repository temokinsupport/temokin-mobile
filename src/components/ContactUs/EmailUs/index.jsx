import React, {} from "react";
import Iframe from 'react-iframe';
import { Container, Row, Col, Form, Button, Modal, Image} from 'react-bootstrap';
import Footer from '../../Footer';
import axios from "axios";
import bgModalImg from '../../../assets/images/contactus/Tem_Prompt-Modal-BG.png';
import btnModalImg from '../../../assets/images/contactus/Tem_Prompt-Modal_Button.png';

export default class EmailUs extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            contact_number: '',
            email: '',
            message: '',
            btnLoading: false,
            show: false,
            errs: [],
        }
        this.hideModal= this.hideModal.bind(this);
        this.btnClick = this.btnClick.bind(this);
    }
    btnClick(e) {
        e.preventDefault();
        const err = [];
        const data = Object.keys(this.state)
                           .filter(key => key !== 'btnLoading' && key !== 'errs' && key !== 'show')
                           .reduce((data, objKey) =>
                           // eslint-disable-next-line
                              (data[objKey] = this.state[objKey], data), 
                           {});

        // eslint-disable-next-line
        if(data.name == ''){
            err.push('Please enter your name');
        }

        // eslint-disable-next-line
        if(data.email == ''){
            err.push('Please enter your email');
        }

        // eslint-disable-next-line
        if(data.contact_number == ''){
            err.push('Please enter your contact number');
        }

        if(err.length > 0){
            this.setState({show: true});
            this.setState({errs : err});
            return;
        }

        this.setState({btnLoading : true});
        
        axios({
            method: 'post',
            headers: {
                'Content-Type' : 'application/json',
            },
            url: 'https://dev.hirayamnl.com/api/temokin/send-email',
            data: data
        }).then(response => {
            this.setState({ 
                name: '',
                contact_number: '',
                email: '',
                message: '',
                btnLoading : false
            });
        }).catch(err => {
            this.setState({btnLoading : false});
            this.setState({show: true});
            this.setState({errs: ['Something went wrong']});
        });
    }
    hideModal() {
        this.setState({show: false});
        this.setState({errs: []});
    }
    render() {
        const style = {
            outer: {
                background: `url(${bgModalImg})`,
                height: '50vh',
                width: '50vw',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                imageRendering: '-webkit-optimize-contrast'
            },
            btn: {
                background: `url(${btnModalImg})`,
                height: '50px',
                width: '50px',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                imageRendering: '-webkit-optimize-contrast',
                outline: '0',
                border: '0',
                boxShadow: 'none'
                
            },
            container: {
                display: 'flex',
                flexDirection: 'column',
                color: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px',
                fontWeight: 'bold'
            }
        }

        return (
            <div className="--bg-2" data-scroll-section>
                <Image
                    className="svg svg--1"
                    src={
                        require("../../../assets/images/contactus/Group_1093.svg").default
                    }
                />

                <Container className="--max">
                <Row>
                    <Col md={6}>
                    <h3 className="--title" data-scroll>Let's Get This <br /> Conversation Started!</h3>
                    
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextName" data-scroll>
                            <Form.Label column sm="3">
                                Name
                            </Form.Label>
                            <Col sm="6" md="7">
                                <Form.Control value={this.state.name} onChange={event => this.setState({name: event.target.value})} plaintext 
                                />
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} controlId="formPlaintextContact"  data-scroll>
                        <Form.Label column sm="3">
                            Contact Number
                        </Form.Label>
                        <Col sm="6" md="7">
                            <Form.Control value={this.state.contact_number} onChange={event => this.setState({contact_number: event.target.value})} plaintext />
                        </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll>
                        <Form.Label column sm="3">
                            Email Address
                        </Form.Label>
                        <Col sm="6" md="7">
                            <Form.Control value={this.state.email} onChange={event => this.setState({email: event.target.value})} plaintext />
                        </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} controlId="formPlaintextMessage" data-scroll>
                        <Form.Label column sm="3">
                            Message
                        </Form.Label>
                        <Col sm={6} md="7">
                            <Form.Control value={this.state.message} onChange={event => this.setState({message: event.target.value})} as="textarea" rows={20} 
                                
                            />
                        </Col>
                        </Form.Group>
                        <button onClick={this.btnClick} disabled={this.state.btnLoading} className="btn-send">
                            SEND
                        </button>

                    </Form>
                    </Col>
                    <Col md={6}>
                    <div className="--map-container" data-scroll>
                        <Image 
                            width="100%" 
                            height="100%"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                            src={
                                require("../../../assets/images/contactus/Page-2-Map.png").default
                            }
                        />

                        <Image
                            className="svg svg--2"
                            src={
                                require("../../../assets/images/contactus/Path_239.png").default
                            }
                        />

                        <Image
                            className="svg svg--3"
                            src={
                                require("../../../assets/images/contactus/485.svg").default
                            }
                        />

                        <Image
                            className="svg svg--4"
                            src={
                                require("../../../assets/images/contactus/484.svg").default
                            }
                        />
                    </div>
                    </Col>
                </Row>
                <Modal show={this.state.show}>
                <Modal.Body style={style.outer}>
                    <Button onClick={this.hideModal} style={style.btn}/>
                    <div style={style.container}>
                            {this.state.errs.map((item, key) => (
                                <span key={key}>{item}</span>
                            ))}
                    </div>
                </Modal.Body>
            </Modal>
            </Container>
            <div className="form-bg" data-scroll data-scroll-speed="2"/>
            {/* <div className="header-shapes" data-scroll data-scroll-speed="1"/> */}
            <Footer/>
          </div>
        )
    }
}
