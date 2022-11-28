import React, { useRef } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
/* import {
  SVG1,
  SVG2,
  SVG3,
  SVG4,
  SVG5,
  SVG6,
  SVG7,
  SVG8,
  SVG9,
  SVG10,
} from "../../assets/svg/LandAcquisitionSVG/index"; */

const LandAcquisitionForm = () => {
  const documentUploadRef = useRef();

  const triggerDocumentUpload = () => {
    documentUploadRef.current.click();
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form className="form--violet">
              <Form.Group as={Row} controlId="formPlaintextName" data-scroll>
                <Form.Label column sm="3">
                  Name
                </Form.Label>
                <Col sm="7">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextContact" data-scroll>
                <Form.Label column sm="3">
                  Contact Number
                </Form.Label>
                <Col sm="7">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll>
                <Form.Label column sm="3">
                  Email Address
                </Form.Label>
                <Col sm="7">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll>
                <Form.Label column sm="3">
                  Location of Land
                </Form.Label>
                <Col sm="7">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail" data-scroll>
                <Form.Label column sm="3">
                  Asking Price
                </Form.Label>
                <Col sm="7">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextMessage" data-scroll>
                <Form.Label column sm="3">
                  Mode of Collaboration
                </Form.Label>
                <Col sm={7} className="collaboration">
                  <Form.Check
                    className="d-flex align-items-center"
                    type="radio"
                    label="Joint Venue"
                  />
                  <Form.Check
                    className="d-flex align-items-center"
                    type="radio"
                    label="Outright Sales"
                  />
                  <Form.Check
                    className="d-flex align-items-center"
                    type="radio"
                    label="Others:"
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="formPlaintextMessage"
                className="documents align-items-start position-relative"
                data-scroll
              >
                <Form.Label column sm="3">
                  <div className="d-inline-flex flex-column">
                    Supporting Documents
                    <ul>
                      <li>Land Details</li>
                      <li>Land Titles</li>
                      <li>Detailed Location Map</li>
                      <li>Approvals</li>
                      <li>Topography Map</li>
                      <li>Layout Plans</li>
                      <li>Supporting Documents</li>
                    </ul>
                  </div>
                </Form.Label>
                <Col className="upload" sm={7}>
                  <div
                    className="upload-placeholder"
                    onClick={triggerDocumentUpload}
                  >
                    <p className="upload__message">
                      <span>Upload or drop and drag</span>
                      <span>your files here</span>
                    </p>
                    <Form.Control
                      type="file"
                      size="sm"
                      ref={documentUploadRef}
                    />
                  </div>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="formPlaintextMessage"
                className="remarks align-items-start"
                data-scroll
              >
                <Form.Label column sm="3">
                  Remarks
                </Form.Label>
                <Col sm={7}>
                  <Form.Control />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextMessage" data-scroll>
                <Form.Label column sm="3"></Form.Label>
                <Col sm={7} className="terms d-flex align-items-start">
                  <Form.Check
                    className="d-flex align-items-center"
                    type="checkbox"
                  />
                  <p className="terms__content">
                    BY TICKING THIS BOX, I HEREBY CONFIRM THAT I UNDERSTAND &
                    ACCEPT YOUR PRIVACY POLICY AND TERMS AND CONDITIONS OF USE
                    OF THE WEBSITE. I HEREBY AGREE AND GIVE CONSENT TO TEMOKIN
                    AND/OR SUBSIDIARY COMPANIES AND/OR ASSOCIATE COMPANIES
                    WITHIN TEMOKIN GROUP OF COMPANIES TO COLLECT,PROCESS AND
                    DISCLOSE MY PERSONAL DATA IN ACCORDANCE WITH THE PRIVACY
                    POLICY.
                  </p>
                </Col>
              </Form.Group>

              <Row className="">
                <Col sm={3}></Col>
                <Col sm={7} className="d-flex justify-content-start">
                  <Button className="--btn-send" data-scroll></Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* <div className="svg--1 svg">
        <SVG1 />
      </div>
      <div className="svg--2 svg">
        <SVG2 />
      </div>
      <div className="svg--3 svg">
        <SVG3 />
      </div>
      <div className="svg--4 svg">
        <SVG4 />
      </div>
      <div className="svg--5 svg">
        <SVG5 />
      </div>
      <div className="svg--6 svg">
        <SVG6 />
      </div>
      <div className="svg--7 svg">
        <SVG7 />
      </div>
      <div className="svg--8 svg">
        <SVG8 />
      </div>
      <div className="svg--9 svg">
        <SVG9 />
      </div>
      <div className="svg--10 svg">
        <SVG10 />
      </div> */}
    </>
  );
};

export default LandAcquisitionForm;
