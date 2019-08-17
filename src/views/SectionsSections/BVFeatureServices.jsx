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

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

class BVFeatureServices extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
        
          {/* ********* FEATURES 2 ********* */}
          <div className="features-2" id="bv-services">
          <Row>
                <Col className="mr-auto ml-auto text-center" md="8">
                  <h6 className="category text-muted">Our services</h6>
                  <h1 className="title mt-0 text-center">
                    What We Do
                  </h1>
                </Col>
                </Row>
              <div className="space-70" />
              <Row>
              </Row>
            <Container>
              <Row className="align-items-center">
                <Col className="mr-auto text-left" lg="3" md="8">
                  <div id="service-text">
                  <h1 className="title">Services We Provide</h1>
                  <p className="description">
                    5,000 capacity venue, holding some of the latest technology
                    lighting with a 24 colour laser system Amnesia is one of the
                    islands most legendary clubs.
                  </p>
                  
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Learn more <i className="tim-icons icon-alert-circle-exc" />
                  </Button>
                  </div>
                </Col>
                <Col lg="8" md="12">
                  <Row>
                    <Col lg="4" md="4">
                      <div className="info text-left bg-info">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-satisfied" />
                        </div>
                        <h4 className="info-title">Best Quality</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col lg="4" md="4">
                      <div className="info text-left bg-danger info-raised">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-palette" />
                        </div>
                        <h4 className="info-title">Awesome Design</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col lg="4" md="4">
                      <div className="info text-left bg-default">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-spaceship" />
                        </div>
                        <h4 className="info-title">Great Performance</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="4">
                      <div className="info text-left bg-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-user-run" />
                        </div>
                        <h4 className="info-title">Fast Development</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col lg="4" md="4">
                      <div className="info text-left bg-warning info-raised">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-bulb-63" />
                        </div>
                        <h4 className="info-title">Super Fresh</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col lg="4" md="4">
                      <div className="info text-left bg-success">
                        <div className="icon icon-default">
                          <i className="tim-icons icon-paper" />
                        </div>
                        <h4 className="info-title text-muted">
                          Organized Content
                        </h4>
                        <p className="description text-muted">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 2 ********* */}
   
        </div>{" "}
      </>
    );
  }
}

export default BVFeatureServices;
