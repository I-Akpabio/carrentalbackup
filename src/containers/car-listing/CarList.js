import React from 'react';
import { Grid, Image, Card, Button, Icon } from 'semantic-ui-react'

import Api from "../../utils/Api";

class CarList extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = { cars: null, searching: false };

        this.api = new Api();
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.search != null ) {

            const { brand, fuel } = nextProps.search;
            
            this.setState({ searching: true });
            
            this.api.post("carsearch", `brand=${brand}&fueltype=${fuel}`)
            .then((res) => {
                this.setState({ cars: res });
                console.info("Car search SUCCESSFUL");

                this.setState({ searching: false });
            });

            this.props.reset(); // NECCESARRY TO ENSURE SEARCH ON BUTTON PRESS
        }
    }

    render() {
    	let List;
    	if(this.state.cars == null) {
    		List = this.state.searching ? <p>Loading...</p> : null;
    	} else {
    		List = this.state.cars.map( (car, i) => (
        		<Grid.Row key={i}>
              
				    <Grid.Column width={7}>
				        <Image style={{width: '100%'}} src={"http://localhost/carrental/admin/img/vehicleimages/" + car.Vimage1} height="200" />
				    </Grid.Column>

				    <Grid.Column width={9}>
				        <Card fluid>
				            <Card.Content>
				              <Card.Header>{`${car.BrandName}, ${car.VehiclesTitle}`}</Card.Header>
				              <Card.Description> <h4> $ {car.PricePerDay} per day</h4> </Card.Description>
				            </Card.Content>
				            <Card.Content extra>
				             <a href="/book-car" style={{marginRight: '20px'}}>
                                {' '}
                                <Icon name="calendar" /> {car.ModelYear} Model
                              </a>
                              <a href="/book-car" style={{marginRight: '20px'}}>
                                {' '}
                                <Icon name="user" /> {car.SeatingCapacity} Seats
                              </a>
                              <a href="/book-car" style={{marginRight: '20px'}}>
                                {' '}
                                <Icon name="car" /> {car.FuelType}
                              </a>
				              <br /> <br />
				              <Button positive onClick={() => this.props.changePage(`book-car/${car.id}`)}>
				                View Details
				                <Icon name="arrow alternate circle right" />
				              </Button>
				            </Card.Content>
				        </Card> 
				    </Grid.Column>
				</Grid.Row>
    			) 
    		); 
    	} 

        return (
        <React.Fragment>
        	{ List }
        </React.Fragment>
    );
    }
}


CarList.displayName = 'CarList';

export default CarList;
