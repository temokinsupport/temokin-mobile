import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import bgModalImg from '../../../assets/images/contactus/Tem_Prompt-Modal.png';
import btnModalImg from '../../../assets/images/contactus/Tem_Prompt-Modal_Button.png';

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
            
        }
    }

export default function ContactModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* UNCOMMENT THIS */}

            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            
            <Modal 
                show={show} 
                onHide={handleClose}
                >
                <Modal.Body style={style.outer}>
                <Button style={style.btn} onClick={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}
