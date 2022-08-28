import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class ExternalResources extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <>
        <div className='resource-title'>
        <h2>Making traveling simple and more affordable!</h2>
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Transportation
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Hotels
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Helpful Travel Sites
            </NavLink>
          </NavItem>
        </Nav>



{/* ________Transportation Content________         */}
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className='transportation-logo'>
                <div className='mini-header'>
                <h4>Flights & Car Rentals</h4>
                </div>
                <ul>
            <li>
              <a 
                id="travelPiratesLink" 
                href="https://www.travelpirates.com"        
                target="_blank">
                  Travel Pirates
              </a>
            </li>
            <li>
              <a 
                id="skyscannerLink" 
                href="https://www.skyscanner.com"        
                target="_blank">
                  Skyscanner
              </a>
            </li>
            <li>
              <a 
                id="cheapoairLink" 
                href="https://www.cheapoair.com"        
                target="_blank">
                  CheapOair
              </a>
            </li>
            <li>
              <a 
                id="kiwiLink" 
                href="https://www.kiwi.com"        
                target="_blank">
                  Kiwi
              </a>
            </li>
            <li>
              <a 
                id="hophsLink" 
                href="https://hophs.com"        
                target="_blank">
                  Hophs
              </a>
            </li>
            <li>
              <a 
                id="carrentalLink" 
                href="https://carrental.deals/"        
                target="_blank">
                  Car Rental Deals
              </a>
            </li>
            <li>
              <a 
                id="enterpriseLink" 
                href="https://www.enterprise.com"        
                target="_blank">
                  Enterprise
              </a>
            </li>
          </ul>
          </div>
           </Col>
            </Row>
          </TabPane>
        </TabContent>
{/* ________________Hotel Contents______________________ */}        
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className='hotel-logo'>
                <div className='mini-header'>  
                <h4>Need a place to stay?</h4>
                </div>
                <ul>
            <li>
              <a 
                id="airbnbLink" 
                href="https://www.airbnb.com"        
                target="_blank">
                  Airbnb
              </a>
            </li>
            <li>
              <a 
                id="bookingLink" 
                href="https://www.booking.com"        
                target="_blank">
                  Booking.com
              </a>
            </li>
            <li>
              <a 
                id="hotelsLink" 
                href="https://www.hotels.com"        
                target="_blank">
                  Hotels
              </a>
            </li>
            <li>
              <a 
                id="expediaLink" 
                href="https://www.expedia.com"        
                target="_blank">
                  Expedia
              </a>
            </li>
            <li>
              <a 
                id="oysterLink" 
                href="https://oyster.com"        
                target="_blank">
                  Oyster
              </a>
            </li>
          </ul>
          </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
{/* ________________Helpful Site Content______________________ */}
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div className='helpful-logo'>
                <div className='mini-header'>
                <h4>Help yourself to...</h4>
                </div>
                <ul>
            <li>
              <a 
                id="sleepopolisLink" 
                href="https://www.sleepopolis.com"        
                target="_blank">
                  SLEEPOPOLiS
              </a>
            </li>
            <li>
              <a 
                id="flightawareLink" 
                href="https://flightaware.com"        
                target="_blank">
                  Flight Aware
              </a>
            </li>
            <li>
              <a 
                id="responsibletravelLink" 
                href="https://www.responsibletravel.com"        
                target="_blank">
                  Responsible Travel
              </a>
            </li>
            <li>
              <a 
                id="befrugalLink" 
                href="https://www.befrugal.com/tools/fly-or-drive-calculator/"        
                target="_blank">
                  Be Frugal
              </a>
            </li>
            <li>
              <a 
                id="dollarflightLink" 
                href="https://dollarflightclub.com"        
                target="_blank">
                  Dollar Flight Club
              </a>
            </li>
            <li>
              <a 
                id="secretflyingLink" 
                href="https://secretflying.com"        
                target="_blank">
                  Secret Flying
              </a>
            </li>
            <li>
              <a
                id="ivisaLink" 
                href="https://www.ivisa.com"        
                target="_blank">
                  iVisa 
              </a>
            </li>
            <li>
              <a 
                id="sleepinginairportsLink" 
                href="https://www.sleepinginairports.net/"        
                target="_blank">
                  Sleeping in Airports
              </a>
            </li>
            <li>
              <a 
                id="airhelpLink" 
                href="https://www.airhelp.com"        
                target="_blank">
                  Air Help
              </a>
            </li>
          </ul>
          </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
         <div className='resource-paragraph'>
          <p>Disclaimer: Any links to third-party software available on this website are provided "as is" without warranty of any kind, either expressed or implied and such software is to be used at your own risk.</p>
          </div>
      </>
    );
  }
}
export default ExternalResources;

          
        
