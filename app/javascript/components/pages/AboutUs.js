import React, { Component } from 'react'
import { 
  Container, 
  Row, 
  Card, 
  CardBody, 
  CardTitle, 
  CardText, 
  Col,
  NavLink } from "reactstrap";



class AboutUs extends Component {
  render() {
    return (
      <>
        <img 
          className="aboutus-logo" 
          src="assets/codeEmpire.jpeg" 
          alt="Code Empire Logo" 
          align-content= "center"
          vertical-align="middle"
          fluid
          variant="center"
          />
        <Container>
          <Row>
            <Col lg={3} className="col-md-4 d-flex align-items-stretch">
              <Card className="mb-3">
                <CardBody className="aboutus-card">
                    <img 
                    className="aboutus-bio-pic" 
                    src="/Gene.png" 
                    alt="Gene's Profile" 
                    width="auto"
                    height="auto"
                    fluid
                    variant="center"
                    />
                  <CardTitle className="aboutus-title"> 
                    <h1 id="capstone-team-member">
                      Gene
                    </h1>
                    <h3 id="capstone-role">
                      Tech Lead
                    </h3>
                  </CardTitle>
                    <CardText className="aboutus-text"> 
                    <NavLink> 
                      <a href="https://github.com/Genemichael25" target="_blank"> 
                      <img 
                      src="/githubIcon.png"
                      className="aboutus-GitHub-icon"
                      width="60"
                      height="40"
                      fluid
                      />
                      </a>
                    </NavLink>
                    <br></br>
                    <NavLink> 
                      <a href="https://www.linkedin.com/in/gene-martinez/" target="_blank"> 
                      <img 
                      src="/linkedinIcon.png" 
                      className="aboutus-LinkedIn-icon"
                      width="60"
                      height="48"
                      fluid
                      />
                      </a>
                    </NavLink>
                      Gene is a U.S. Army veteran with years of leadership experience. He decided to pursue a career in tech because it allows him to learn something new each day. Passionate about creating new things with user experience as a priority due to his nature of wanting to help others. Looking forward to finding the next team to work with and grow as a developer. You can find him indoors playing video games or looking into his next travel plans. Also enjoys home improvement projects, especially the ones that require demolition, and getting outdoors.
                    </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} className="col-md-4 d-flex align-items-stretch">
              <Card className="mb-3">
                <CardBody className="aboutus-card">
                    <img 
                    className="aboutus-bio-pic" 
                    src="/Ahmed.jpeg" 
                    alt="Ahmed's Profile" 
                    width="auto"
                    height="auto"
                    fluid
                    variant="center"
                    />
                  <CardTitle className="aboutus-title"> 
                    <h1 id="capstone-team-member">
                      Ahmed
                    </h1>
                    <h3 id="capstone-role">
                      Design Lead
                    </h3>
                  </CardTitle>
                    <CardText className="aboutus-text"> 
                    <NavLink> 
                      <a href="https://github.com/Ahmedkhafaji" target="_blank"> 
                      <img 
                      src="/githubIcon.png"
                      className="aboutus-GitHub-icon"
                      width="60"
                      height="40"
                      fluid
                      />
                      </a>
                    </NavLink>
                    <br></br>
                    <NavLink> 
                      <a href="https://www.linkedin.com/in/ahmed-alkhafaji/" target="_blank"> 
                      <img 
                      src="/linkedinIcon.png" 
                      className="aboutus-LinkedIn-icon"
                      width="60"
                      height="48"
                      fluid
                      />
                      </a>
                    </NavLink>
                      Ahmed is a full-stack developer, student, and athlete. He enjoys being outdoors, building new things, and learning new skills. He finds joy and motivation working with others, especially pair-programming. Ahmed will continue his journey in the tech development doing new projects, obtaining new skills, and making new connections.
                    </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} className="col-md-4 d-flex align-items-stretch">
              <Card className="mb-3">
                <CardBody className="aboutus-card">
                    <img 
                    className="aboutus-bio-pic" 
                    src="/Steven.png" 
                    alt="Steven's Profile" 
                    width="auto"
                    height="auto"
                    fluid
                    variant="center"
                    />
                  <CardTitle className="aboutus-title"> 
                    <h1 id="capstone-team-member">
                      Steven
                    </h1>
                    <h3 id="capstone-role">
                      Product Manager
                    </h3>
                  </CardTitle>
                    <CardText className="aboutus-text"> 
                    <NavLink> 
                      <a href="https://github.com/scharlez" target="_blank"> 
                      <img 
                      src="/githubIcon.png"
                      className="aboutus-GitHub-icon"
                      width="60"
                      height="40"
                      fluid
                      />
                      </a>
                    </NavLink>
                    <br></br>
                    <NavLink> 
                      <a href="https://www.linkedin.com/in/steven-charlez-dunn/" target="_blank"> 
                      <img 
                      src="/linkedinIcon.png" 
                      className="aboutus-LinkedIn-icon"
                      width="60"
                      height="48"
                      fluid
                      />
                      </a>
                    </NavLink>
                      Steven is a U.S. veteran, former system & network administrator turned dynamic, detail-oriented full stack web developer driven by the passion of building effective coding solutions. Focuses on front-end technologies and creating user-friendly code experiences. He is highly collaborative with unique perspective and problem-solving abilities. When he's not coding, some of his favorite distractions might include: photography, writing, outdoor adventures, calisthenics, and of course traveling. 
                    </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} className="col-md-4 d-flex align-items-stretch">
              <Card className="mb-3">
                <CardBody className="aboutus-card">
                    <img 
                    className="aboutus-bio-pic" 
                    src="/Leo.png" 
                    alt="Leo's Profile" 
                    width="auto"
                    height="auto"
                    fluid
                    variant="center"
                    />
                  <CardTitle className="aboutus-title"> 
                    <h1 id="capstone-team-member">
                      Leo
                    </h1>
                    <h3 id="capstone-role">
                      Project Manager
                    </h3>
                  </CardTitle>
                    <CardText className="aboutus-text"> 
                    <NavLink> 
                      <a href="https://github.com/LeoContreras93" target="_blank"> 
                      <img 
                      src="/githubIcon.png"
                      className="aboutus-GitHub-icon"
                      width="60"
                      height="40"
                      fluid
                      />
                      </a>
                    </NavLink>
                    <br></br>
                    <NavLink> 
                      <a href="https://www.linkedin.com/in/leo-contreras/" target="_blank"> 
                      <img 
                      src="/linkedinIcon.png" 
                      className="aboutus-LinkedIn-icon"
                      width="60"
                      height="48"
                      fluid
                      />
                      </a>
                    </NavLink>
                      Leo is a full-stack developer, passionate about learning new things. He is a team player, who enjoys pair-programming and firmly commits to accomplishing both personal and professional projects. You can be sure he will give his utmost dedication to working on both front-end and back-end development processes. As an avid PC gamer, he enjoy tinkering with electronics. You can usually find him at the beach on a sunny day or searching for a concert to attend.
                    </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


export default AboutUs;
