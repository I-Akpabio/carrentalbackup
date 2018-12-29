import React from 'react'
import "./index.css";

import { Button, Grid, Container, Select, Form, Icon, Segment } from 'semantic-ui-react'

import CarList from './CarList'
import RecentlyListed from './RecentlyListed'

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CarListing extends React.Component {

  constructor(props) {
    super(props);

    this.brand = [
      { text: 'BMW', value: '2', key: '2' }, 
      { text: 'Audi', value: '3', key: '3' },
      { text: 'Nissan', value: '4', key: '4' },
      { text: 'Toyota', value: '5', key: '5' }
    ];

    this.fuel = [
      { text: 'Petrol', value: 'Petrol', key: 'petrol' }, 
      { text: 'Diesel', value: 'Diesel', key: 'diesel' },
      { text: 'CNG', value: 'CNG', key: 'cng' }
    ];

    this.state = {
      imageSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-range-rover-velar-2t-lt20k-101-124-1544726647.jpg?crop=0.827xw:0.758xh;0,0.112xh&resize=980:*",
      search: null,
      brand: "",
      fuel: ""
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e, { name, value })  { 
    this.setState({[name]: value }); 
  }

  submitSearch() {
    const { brand, fuel } = this.state;
    this.setState(function () {
      return {
        search: { action: 'go', brand, fuel }
      }
    });
  }

  reset() {
    this.setState({ search: null });
  }

  render() {
    return (
      <div>
    <section className="page-header listing_page">
      <div className="container">
        <div className="page-header_wrap">
          <div className="page-heading">
            <h1>Car Listing</h1>
          </div>
        </div>
      </div>
      <div className="dark-overlay"></div>
    </section>

    <Container style={{paddingTop: '50px'}}>
      <Grid>
        <Grid.Column width={4}>
          <Segment>
            <h2> <Icon name='search' color="green" /> Find Your Car</h2>

            <Form onSubmit={this.submitSearch}>
              <Form.Field>
                <Select name="brand" 
                  placeholder="Select Brand" 
                  options={this.brand} 
                  onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <Select name="fuel" 
                  placeholder="Select Fuel Type" 
                  options={this.fuel} 
                  onChange={this.handleChange} />
              </Form.Field>

              <Button fluid> <Icon name="search" /> Search Car</Button>
            </Form>
          </Segment>

          <Segment style={{marginTop: '70px'}}>
            <h2> <Icon name='search' color="green" /> Recently Rented</h2>

            <Grid>
              <RecentlyListed {...this.props} imageSrc={this.state.imageSrc} />
            </Grid>
          </Segment>
        </Grid.Column>

        <Grid.Column width={12}>
          <h1>Search Results</h1>
          <Grid>
            <CarList {...this.props} 
              search={this.state.search}
              reset={ this.reset.bind(this) } />
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
    );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarListing)
