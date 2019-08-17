/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
//import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
//import DemoFooter from "components/Footers/DemoFooter.jsx";
import BVFooter from "components/Footers/BVFooter.jsx";
import BVNavbar from "components/Navbars/BVNavbar.jsx";
import BVContact from "views/SectionsSections/BVContact.jsx";
import BVProjectsAll from "views/SectionsSections/BVProjectsAll.jsx";
import BVFeatureServices from "views/SectionsSections/BVFeatureServices.jsx";


import { chartExample1 } from "variables/charts.js";

class BVProjectsPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("landing-page");
  }
  render() {
    return (
      <>
        <BVNavbar />
        <div className="wrapper" ref="wrapper">
  
          {/* <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            /> */}
            {/* <Container>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="5" md="4" sm="4">
                  <h1 className="text-white">
                    Our projects<br />
                    <span className="text-white">Consultants and Advisors</span>
                  </h1>
                  
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      Learn More..
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                 </Col>
              </Row>
            </Container> */}
          {/* </div> */}
          {/* <section className="section section-lg">
           
          </section>
          */}

         
          <BVProjectsAll />
          <BVFooter />
        </div>
      </>
    );
  }
}

export default BVProjectsPage;
