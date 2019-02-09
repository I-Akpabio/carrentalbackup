import React, { Component } from 'react'
import Api from '../../utils/Api'
import { 
  Grid, Container, Tab, Icon, Button, Segment, Form, Card, Image, Menu, Input
} from 'semantic-ui-react'

import Slider from 'react-slick'

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Accessories from './Accessories'
import VehicleOverview from './VehicleOverview'
import SimilarCars from './SimilarCars'

import { isEqual } from 'lodash';
  
class BookCar extends Component {
  constructor(props) {
    super(props)

    /* CAR IS COMING BACK AS AN ARRAY */
    this.state = { 
      car: null, 
      similar: [], 
      page: null, 
      form: {
        fromdate: '', 
        todate: '', 
        message: ''
      } 
    }

    this.api = new Api()

    this.baseImgUrl = 'http://localhost/carrental/admin/img/vehicleimages/'

    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true
    }

    this.panes = [
      {
        menuItem: (
          <Menu.Item key="msg"
            style={{fontSize: '18px',padding: '25px',fontFamily: "Lato', sans-serif"}}>
            <h3>Vehicle Overview</h3>
          </Menu.Item>
        ),
        render: () => 
          <Tab.Pane attached={false}>
            <VehicleOverview text={this.state.car[0].VehiclesOverview} />
          </Tab.Pane>
      },
      {
        menuItem: (
          <Menu.Item
            key="acc"
            style={{fontSize: '18px',padding: '25px',fontFamily: "Lato', sans-serif"}}>
            <h3>Accessories</h3>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false}>
            <Accessories data={this.state.car[0]} />
          </Tab.Pane>
        )
      }
    ]
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { page: nextProps.match.params.id }
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    if(!isEqual(prevProps, this.props)) {
      this.getData();
    }
  }

  componentDidMount = () => {
    this.getData();
  }
  

  getData() {
    const id = this.props.match.params.id
    this.api.post('carinfo', `id=${id}`).then(res => {
      console.log('Car info done')
      const car = res;
      this.api.post('similarcars', 'brand='+car[0].VehiclesBrand).then(res2 => {
        console.log(res2);
        this.setState({ car: car, similar: res2 })
      })
    })
  }

  handleChange = (e, { name, value }) => { 
    const data = Object.assign({}, this.state.form, { [name]: value }); 
    this.setState({ form: data }) 
  }

  bookSubmit() {
    const id = this.props.match.params.id;
    let { fromdate, todate, message } = this.state.form; 

    this.api.post("postrental", `fromdate=${fromdate}&todate=${todate}&message=${message}&id=${id}`)
    .then(res => console.log(res));
  }

  render() {
    let { car } = this.state
    let { fromdate, todate, message } = this.state.form; 

    if (car === null) return <p>Loading</p>
    else {
      car = car[0]
      return (
        <div>
          <div>
            <Slider {...this.settings}>
              <div>
                <Image src={this.baseImgUrl + car.Vimage1} />
              </div>
              <div>
                <Image src={this.baseImgUrl + car.Vimage2} />
              </div>
              <div>
                <Image src={this.baseImgUrl + car.Vimage3} />
              </div>
              <div>
                <Image src={this.baseImgUrl + car.Vimage4} />
              </div>
            </Slider>
          </div>
          <Container>
            <Grid style={{ paddingTop: '40px' }}>
              <Grid.Row>
                <Grid.Column width={12}>
                  <h1 style={{ fontSize: '3.2em' }}>{`${car.BrandName}, ${car.VehiclesTitle}`}</h1>
                  
                  <Card.Group itemsPerRow={6} style={{ paddingTop: '30px' }}>
                    <Card>
                      <Card.Content>
                        <Icon color="grey" name="calendar alternate outline" size="huge" />
                        <br /> <br />
                        <Card.Description>
                          <h3>{car.ModelYear}</h3>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <h5 style={{ color: 'green' }}>Reg Year</h5>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Icon color="grey" name="car" size="huge" />
                        <br /> <br />
                        <Card.Description>
                          <h3>{car.FuelType}</h3>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <h5 style={{ color: 'green' }}>Fuel Type</h5>
                      </Card.Content>
                    </Card>

                    <Card>
                      <Card.Content>
                        <Icon color="grey" name="user plus" size="huge" />
                        <br /> <br />
                        <Card.Description>
                          <h3>{car.SeatingCapacity} </h3>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <h5 style={{ color: 'green' }}>Seats</h5>
                      </Card.Content>
                    </Card>
                  </Card.Group>

                  <Tab
                    style={{ paddingTop: '40px' }}
                    menu={{ secondary: true }}
                    panes={this.panes}
                  />
                </Grid.Column>

                <Grid.Column width={4}>
                  <h1 align="right">$ {car.PricePerDay}</h1>
                  <p align="right">Per Day</p>
                  <br />

                  <Segment
                    style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <span style={{ fontSize: '1.6em' }}>Share: </span>
                    <Button circular color="facebook" icon="facebook" />
                    <Button circular color="twitter" icon="twitter" />
                    <Button circular color="instagram" icon="instagram" />
                    <Button circular color="google plus" icon="google plus" />
                  </Segment>

                  <Segment>
                    <h2>
                      {' '}
                      <Icon name="mail" color="green" /> Book Now
                    </h2>

                    <Form onSubmit={() => this.bookSubmit()}>
                      <Form.Field>
                        <label>Pick Up Date</label>
                        <Input value={fromdate} name="fromdate" onChange={this.handleChange} placeholder="Pick Up Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>Returning Date</label>
                        <Input value={todate} name="todate" onChange={this.handleChange} placeholder="Returning Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>Message: </label>
                        <Input value={message} name="message" onChange={this.handleChange} placeholder="Message" />
                      </Form.Field>
                      <Button type="submit" size="big" color="green">
                        Book Now
                      </Button>
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <br />
            <hr />

            <SimilarCars 
              cars={this.state.similar} 
              changePage={this.props.changePage} 
            />
          </Container>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ counter }) => ({

})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: (url) => push(`/${url}`)
    },
    dispatch
  )

export default 
  connect(
  mapStateToProps,
  mapDispatchToProps
)(BookCar);
