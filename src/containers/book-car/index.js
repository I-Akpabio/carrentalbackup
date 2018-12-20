import React from 'react'
import { Grid, Container, Tab, Icon, Button, Segment, Form, Card} from 'semantic-ui-react';

import Accessories from './Accessories';
import VehicleOverview from './VehicleOverview';
import SimilarCars from './SimilarCars';

const panes = [
    { menuItem: 'Vehicle Overview', render: () => <Tab.Pane attached={false}> <VehicleOverview /> </Tab.Pane> },
    { menuItem: 'Accessories', render: () => <Tab.Pane attached={false}> <Accessories /> </Tab.Pane> },
]

const BookCar = () => (
  <div>
        <Container>
            <Grid style={{paddingTop: '40px'}}>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <h1 style={{fontSize: '3.2em'}}>BMW Car</h1>

                        <Card.Group itemsPerRow={6} style={{paddingTop: '30px'}}>
                            <Card>
                                <Card.Content>
                                    <Icon color="grey" name="calendar alternate outline" size="huge"></Icon>
                                    <br/> <br/>
                                    <Card.Description>
                                        <h3>2015</h3>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <h5 style={{color: 'green'}}>Reg Year</h5>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Card.Content>
                                    <Icon color="grey" name="car" size="huge"></Icon>
                                    <br/> <br />
                                    <Card.Description>
                                        <h3>Petrol</h3>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <h5 style={{color: 'green'}}>Fuel Type</h5>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Card.Content>
                                    <Icon color="grey" name="user plus" size="huge"></Icon>
                                    <br/> <br />
                                    <Card.Description>
                                        <h3>4</h3>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <h5 style={{color: 'green'}}>Seats</h5>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    

                        <Tab style={{paddingTop: '40px'}} menu={{ secondary: true }} panes={panes} />
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <h1 align="right">$ 250</h1>
                        <p align="right">Per Day</p>
                        <br />

                        <Segment style={{paddingTop: '25px', paddingBottom: '25px'}}>
                            <span style={{fontSize: '1.6em'}}>Share: </span>
                            <Button circular color='facebook' icon='facebook' />
                            <Button circular color='twitter' icon='twitter' />
                            <Button circular color='instagram' icon='instagram' />
                            <Button circular color='google plus' icon='google plus' />
                        </Segment>

                        <Segment>    
                            <h2> <Icon name='mail' color="green" /> Book Now</h2>
                        
                            <Form>
                                <Form.Field>
                                    <label>Pick Up Date</label>
                                    <input placeholder='Pick Up Date' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Returning Date</label>
                                    <input placeholder='Returning Date' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Message: </label>
                                    <input placeholder='Message' />
                                </Form.Field>
                                <Button type='submit' size="big" color="green">Book Now</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <br />
            <hr />

            <SimilarCars />

        </Container>
  </div>
)

export default BookCar
