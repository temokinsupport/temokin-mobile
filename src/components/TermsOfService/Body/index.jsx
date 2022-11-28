import React from "react";
import Iframe from "react-iframe";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import Footer from "../../Footer";
import axios from "axios";
import bgModalImg from "../../../assets/images/contactus/Tem_Prompt-Modal-BG.png";
import btnModalImg from "../../../assets/images/contactus/Tem_Prompt-Modal_Button.png";

export default class EmailUs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      contact_number: "",
      email: "",
      message: "",
      btnLoading: false,
      show: false,
      errs: [],
    };
    this.hideModal = this.hideModal.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick(e) {
    e.preventDefault();
    const err = [];
    const data = Object.keys(this.state)
      .filter((key) => key !== "btnLoading" && key !== "errs" && key !== "show")
      .reduce(
        (data, objKey) => (
          // eslint-disable-next-line
          (data[objKey] = this.state[objKey]), data
        ),
        {}
      );

    // eslint-disable-next-line
    if (data.name == "") {
      err.push("Please enter your name");
    }

    // eslint-disable-next-line
    if (data.email == "") {
      err.push("Please enter your email");
    }

    // eslint-disable-next-line
    if (data.contact_number == "") {
      err.push("Please enter your contact number");
    }

    if (err.length > 0) {
      this.setState({ show: true });
      this.setState({ errs: err });
      return;
    }

    this.setState({ btnLoading: true });

    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://dev.hirayamnl.com/api/temokin/send-email",
      data: data,
    })
      .then((response) => {
        this.setState({
          name: "",
          contact_number: "",
          email: "",
          message: "",
          btnLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ btnLoading: false });
        this.setState({ show: true });
        this.setState({ errs: ["Something went wrong"] });
      });
  }
  hideModal() {
    this.setState({ show: false });
    this.setState({ errs: [] });
  }
  render() {
    const style = {
      outer: {
        background: `url(${bgModalImg})`,
        height: "50vh",
        width: "50vw",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "-webkit-optimize-contrast",
      },
      btn: {
        background: `url(${btnModalImg})`,
        height: "50px",
        width: "50px",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "-webkit-optimize-contrast",
        outline: "0",
        border: "0",
        boxShadow: "none",
      },
      container: {
        display: "flex",
        flexDirection: "column",
        color: "blue",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        fontWeight: "bold",
      },
    };

    return (
      <div className="--bg-2" data-scroll-section>
        <Image
          className="svg svg--1"
          src={
            require("../../../assets/images/termsofservice/svg-01.svg").default
          }
        />
        <Image
          className="svg svg--2"
          src={
            require("../../../assets/images/termsofservice/svg-04.svg").default
          }
        />
        <Image
          className="svg svg--3"
          src={
            require("../../../assets/images/termsofservice/svg-05.svg").default
          }
        />
        <Image
          className="svg svg--4"
          src={
            require("../../../assets/images/termsofservice/svg-02.svg").default
          }
        />

        <Container className="--max p-0">
          <Row className="justify-content-center textBody m-0">
            <div className="textBody-bg" />
            <Col md={8}>
              <div className="textBodyTitle" data-scroll>
                The use of this website is subject to the following terms of
                use:
              </div>

              <div className="bodyContent">
                The Content of the pages of this website is for your general
                information and use only. <br /> and we reserve the rights to
                and we reserve the rights to change, vary or modify any of the
                information and terms <br />
                contained herein without notice.
              </div>
              <hr className="separator" />
              <div className="bodyContent">
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, <br />
                timeliness, performance, completeness or suitability of the
                information and materials
                <br />
                found or offered on this website for any particular purpose. You
                acknowledge that such <br />
                information and materials may contain inaccuracies or errors and
                we expressly exclude <br />
                liability for any such inaccuracies or errors to the fullest
                extent permitted by law.
              </div>
              <hr className="separator" />
              <div className="bodyContent">
                Your use of any information or materials on this website is
                entirely at your own risk, for
                <br />
                which we shall not be liable. It shall be your own
                responsibility to ensure that any products,
                <br />
                services or information available through this website meet your
                specific requirements.
              </div>
              <hr className="separator" />
              <div className="bodyContent">
                This website contains material which is owned by or licensed to
                us. This material includes, <br />
                but is not limited to, the design, layout, look, appearance and
                graphics. Reproduction is
                <br />
                prohibited other than in accordance with the copyright notice,
                which forms part of these <br />
                terms and conditions.
              </div>
              <hr className="separator" />
              <div className="bodyContent">
                All trademarks reproduced in this website which are not the
                property of, or licensed to, the <br />
                operator is acknowledged on the website.
              </div>
              <hr className="separator" />
              <div className="bodyContent">
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a <br />
                criminal offense.
              </div>
              <hr className="separator" />
              <div className="bodyContent">
                From time to time this website may also include links to other
                websites. These links are
                <br />
                provided for your convenience to provide further information.
                They do not signify that we
                <br />
                endorse the website(s). We Have no responsibility for the
                content of the linked website(s).
              </div>
              <hr className="separator" />
              <div className="bodyContent">
                Your use of this website and any dispute arising out of such use
                of the website is <br />
                subject to the laws of Malaysia.
              </div>
            </Col>
          </Row>
          <Modal show={this.state.show}>
            <Modal.Body style={style.outer}>
              <Button onClick={this.hideModal} style={style.btn} />
              <div style={style.container}>
                {this.state.errs.map((item, key) => (
                  <span key={key}>{item}</span>
                ))}
              </div>
            </Modal.Body>
          </Modal>
        </Container>
        <div className="form-bg" data-scroll data-scroll-speed="2" />
        {/* <div className="header-shapes" data-scroll data-scroll-speed="1"/> */}
        <Footer />
      </div>
    );
  }
}
