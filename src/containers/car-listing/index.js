import React from 'react'

import { Button, Grid, Container, Select, Form, Card, Icon, Image } from 'semantic-ui-react'

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const brand = [
  {text: 'BMW', value: 'bmw', key: 'bmw'}, 
  {text: 'Audi', value: 'aud', key: 'aud'},
  {text: 'Toyata', value: 'toy', key: 'toy'}
];

const fuel = [
  {text: 'BMW', value: 'bmw', key: 'bmw'}, 
  {text: 'Audi', value: 'aud', key: 'aud'},
  {text: 'Toyata', value: 'toy', key: 'toy'}
];

const cars = (props) => {
  let arr = [];
  for(var i = 0; i <= 10; i++) {
    arr.push(<Grid.Row key={i}>
              
      <Grid.Column width={8}>
         <Image src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-range-rover-velar-2t-lt20k-101-124-1544726647.jpg?crop=0.827xw:0.758xh;0,0.112xh&resize=980:*' height="200" />
      </Grid.Column>

      <Grid.Column width={8}>
         <Card fluid>
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>Matthew is a musician living in Nashville.bdfyfdbgldughdbuygbdhgbdgh</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href> <Icon name='user' /> 22 Friends</a>
              <a href> <Icon name='user' /> 22 Friends</a>
              <a href> <Icon name='user' /> 22 Friends</a>
              <br /> <br />
              <Button positive onClick={() => props.changePage('book-car')}>View Details</Button>
            </Card.Content>
          </Card> 
      </Grid.Column>
    </Grid.Row>);
  }
  return arr;
};

const CarListing = props => (
  <div>
    <h1>Car Listings</h1>

    <Container>
      <Grid>
      <Grid.Row>
        
        <Grid.Column width={4}>
          <h3>Find Your Car</h3>

          <Form>
            <Form.Field>
              <Select placeholder="Select Brand" options={brand}></Select>
            </Form.Field>
            <Form.Field>
              <Select placeholder="Select Fuel Type" options={fuel}></Select>
            </Form.Field>
           
            <Button>Search Car</Button>
          </Form>
        </Grid.Column>

        <Grid.Column width={12}>
          <Grid>
            { cars(props) }
          </Grid> 
        </Grid.Column>
      </Grid.Row>
    </Grid> 
    </Container>
    
  </div>
)

const mapStateToProps = ({ counter }) => ({

})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: (url) => push(`/${url}`)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarListing)
