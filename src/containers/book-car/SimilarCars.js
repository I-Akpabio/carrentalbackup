import React from 'react'
import { Image, Icon, Card} from 'semantic-ui-react';

const SimilarCars = () => (
  <div style={{paddingTop: '30px'}}>
    <h1>Similar Cars</h1>
    <br />

    <Card.Group>
    <Card>
    <Image src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-range-rover-velar-2t-lt20k-101-124-1544726647.jpg?crop=0.827xw:0.758xh;0,0.112xh&resize=980:*' />
    <Card.Content>
      <Card.Header>BMW , Lexus</Card.Header>
      <Card.Description>
        <h3>$ 800</h3>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href> <Icon name='calendar' /> 2013 Model</a>
      <a href> <Icon name='user' /> 7 Seats</a>
      <a href> <Icon name='car' /> Petrol</a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-range-rover-velar-2t-lt20k-101-124-1544726647.jpg?crop=0.827xw:0.758xh;0,0.112xh&resize=980:*' />
    <Card.Content>
      <Card.Header>Toyota Corolla</Card.Header>
      <Card.Description>
        <h3>$ 1000</h3>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href> <Icon name='calendar' /> 2015 Model</a>
      <a href> <Icon name='user' /> 4 Seats</a>
      <a href> <Icon name='car' /> Diesel</a>
    </Card.Content>
  </Card>
    </Card.Group>
    
  </div>
)

export default SimilarCars

