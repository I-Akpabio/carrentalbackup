import React, {Component} from 'react'
import Api from '../../utils/Api';
import { Grid, Container, Tab, Icon, Button, Segment, Form, Card, Image, Menu} from 'semantic-ui-react';

import Slider from "react-slick";

import Accessories from './Accessories';
import VehicleOverview from './VehicleOverview';
import SimilarCars from './SimilarCars';

class BookCar extends Component {

    constructor(props) {
        super(props);

        /* CAR IS COMING BACK AS AN ARRAY */
        this.state = { car: null };

        this.api = new Api();

        this.baseImgUrl = "http://localhost/carrental/admin/img/vehicleimages/";

        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true
        };

        this.panes = [
            { 
                menuItem: (
                  <Menu.Item key='msg' style={{'fontSize': '18px', padding: "25px", fontFamily: "Lato', sans-serif"}}>
                    <h3>Vehicle Overview</h3>
                  </Menu.Item>
                ),
                render: (p) => {
                    return <Tab.Pane attached={false}> <VehicleOverview text={this.state.car[0].VehiclesOverview} /> </Tab.Pane> 
                }
            },
            { 
                menuItem: (
                  <Menu.Item key='acc' style={{'fontSize': '18px', padding: "25px", fontFamily: "Lato', sans-serif"}}>
                    <h3>Accessories</h3>
                  </Menu.Item>
                ),
                render: () => <Tab.Pane attached={false}> <Accessories data={this.state.car[0]} /> </Tab.Pane> 
            },
        ];
    }

    componentDidMount() {
        this.api.post("carinfo", "id=2")
        .then((res) => {
            console.log("Car info done");
            this.setState({ car: res });
        });
    }

    bookSubmit() {
    }

    render() {
        let { car } = this.state;

        if(car === null) return <p>Loading</p>
        else {
            car = car[0];
        return (
    <div> 
        <div>
            <Slider {...this.settings}>
                <div>
                    <Image src={this.baseImgUrl + car.Vimage1 } />
                </div>
                <div>
                    <Image src={this.baseImgUrl + car.Vimage2 } />
                </div>
                <div>
                    <Image src={this.baseImgUrl + car.Vimage3 } />
                </div>
                <div>
                    <Image src={this.baseImgUrl + car.Vimage4  } />
                </div>
            </Slider>
        </div>
        <Container>
            <Grid style={{paddingTop: '40px'}}>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <h1 style={{fontSize: '3.2em'}}>{`${car.BrandName}, ${car.VehiclesTitle}`}</h1>

                        <Card.Group itemsPerRow={6} style={{paddingTop: '30px'}}>
                            <Card>
                                <Card.Content>
                                    <Icon color="grey" name="calendar alternate outline" size="huge"></Icon>
                                    <br/> <br/>
                                    <Card.Description>
                                        <h3>{car.ModelYear}</h3>
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
                                        <h3>{car.FuelType}</h3>
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
                                        <h3>{car.SeatingCapacity} </h3>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <h5 style={{color: 'green'}}>Seats</h5>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    

                        <Tab style={{paddingTop: '40px'}} menu={{ secondary: true }} panes={this.panes} />
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <h1 align="right">$ {car.PricePerDay}</h1>
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
                        
                            <Form onSubmit={() => this.bookSubmit()}>
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
        );
}
    }
}


export default BookCar
