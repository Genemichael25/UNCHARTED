import React, { Component } from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap'


class SevenWonders extends Component {
  render() {
    return(
    <>
      <h3>Seven Wonders of the World</h3>
        <Row>
            <Col sm='4'>
                <Card className='card'>
                    <CardImg 
                        top width='100%' 
                        src={"https://images.pexels.com/photos/1423580/pexels-photo-1423580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 (2)"} 
                        alt='seven wonders pic' />
                    <CardBody>
                    <CardTitle>
                        Great Wall of China
                        <hr></hr>
                        China
                    </CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>    
                <Card className='card'>
                    <CardImg 
                        top width='100%' 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5do7jKBKkVbFMP3O2jCfzdu6pYTLH0BbxmA&usqp=CAU"} alt='seven wonders pic' />
                    <CardBody>
                    <CardTitle>
                        Taj Mahal
                        <hr></hr>
                        Agra, India
                    </CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>
                <Card className='card'>
                    <CardImg 
                        top width='100%' 
                        src={"https://thumbs.dreamstime.com/b/famous-historic-colosseum-rome-morning-sun-old-civilisation-italy-114418686.jpg"} 
                        alt='seven wonders pic' />
                    <CardBody>
                    <CardTitle>
                        Colosseum
                        <hr></hr>
                        Rome, Italy
                    </CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>    
                <Card className='card'>
                    <CardImg 
                        top width='100%' 
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Christ_on_Corcovado_mountain.JPG/800px-Christ_on_Corcovado_mountain.JPG?20121214014657"} 
                        alt='seven wonders pic' />
                    <CardBody>
                    <CardTitle>
                        Christ the Redeemer
                        <hr></hr>
                        Rio de Janeiro, Brazil
                    </CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>
                <Card className='card'>
                    <CardImg 
                        top width='100%' 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2yzt4nT1SjYbV3itXx6HZHVmqpCrsRsBbQ&usqp=CAU"} alt='seven wonders pic' />
                    <CardBody>
                    <CardTitle>
                        Petra
                        <hr></hr> 
                        Jordan
                    </CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>    
                <Card className='card'>
                    <CardImg 
                        top width='100%' 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkk0Ppoj2lB1Dd02PIVUZr8S_w4zh4xvrlRQ&usqp=CAU"} alt='seven wonders pic' />
                    <CardBody>
                    <CardTitle>
                        Machu Picchu
                        <hr></hr>
                        Peru
                    </CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='4'>
                <Card className='card'>
                    <CardImg 
                        top width='100%' 
                        src={"https://upload.wikimedia.org/wikipedia/commons/e/e5/Chichen_Itza_CB.jpg"} 
                        alt='seven wonders pic' />
                    <CardBody>
                    <CardTitle>
                        Chichen Itza
                        <hr></hr>
                        Yucatan, Mexico
                    </CardTitle>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </>
    )
  }
}

export default SevenWonders;
                      
            