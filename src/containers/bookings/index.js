import React from 'react'
import "./index.css"

import { Container, Grid, Label, Image, Segment, Dimmer, Loader } from 'semantic-ui-react'

import Api from '../../utils/Api';

import { LinkTabPane } from "../../components/link-tab-pane"
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Bookings extends React.Component {

  constructor(props) {
    super(props);

    this.api = new Api();

    this.baseImgUrl = 'http://localhost/carrental/admin/img/vehicleimages/'

    this.state = {
      bookings: null
    };
  }

  componentDidMount() {
    this.api.post("bookinginfo")
      .then((res) => {
        this.setState({bookings: res});
      })
  }

  renderLabel(status) {
    if(status === "1") {
      return (
        <Label as='a' color='green' tag>
          Confirmed
        </Label>
      )
    } else if(status === "2") {
      return (
        <Label as='a' color='red' tag>
          Cancelled
        </Label>
      )
    } else if(status === "0") {
      return (
        <Label as='a' color='grey' tag>
          Not Confirmed Yet
        </Label>
      )
    }
  } 

  render() {
    const gStyle = { marginBottom: '25px' };
    const activeItem = this.props.location.pathname.substr(1);
    let GridContent;

    if (this.state.bookings == null) {
      GridContent = (
        <Segment>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>

          <Image src='http://localhost:3000/images/paragraph.png' />
        </Segment>
      )
    } else if (this.state.bookings.length === 0) {
      GridContent =
        <p>There are no bookings availble</p>
    } else if (this.state.bookings.length > 0) {
      GridContent =
        <Grid divided='vertically'>
          {this.state.bookings.map((booking, i) => (
            <Grid.Row style={gStyle} key={i}>
              <Grid.Column width={4}>
                <Image src={this.baseImgUrl + booking.Vimage1} />
              </Grid.Column>

              <Grid.Column width={7}>
                <h3>{booking.BrandName} {booking.VehiclesTitle}</h3>
                <Label size="large">From Date: {booking.FromDate}</Label>
                <br /> <br />
                <Label size="large">To Date: {booking.ToDate}</Label>
              </Grid.Column>

              <Grid.Column width={5}>
                {this.renderLabel(booking.Status)}
              </Grid.Column>

              <p style={{ color: 'grey' }}>Message: {booking.message}</p>
            </Grid.Row>
          ))}
        </Grid>
    }

    return (
      <div>
        <section className="page-header listing_page">
          <div className="container">
            <div className="page-header_wrap">
              <div className="page-heading">
                <h1>My Bookings</h1>
              </div>
            </div>
          </div>
          <div className="dark-overlay"></div>
        </section>

        <Container style={{ paddingTop: '50px' }}>
          <Grid>
            <Grid.Column width={4}>
              <LinkTabPane activeItem={activeItem} />
            </Grid.Column>
            <Grid.Column width={9}> {GridContent}</Grid.Column>
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
)(Bookings)
