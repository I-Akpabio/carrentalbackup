import React from 'react'
import "./index.css";

import { isEqual } from "lodash"
import { Container, Grid, Form, Button, Header, Message } from 'semantic-ui-react'

import Api from "../../utils/Api"

import { LinkTabPane } from '../../components/link-tab-pane';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.api = new Api();

    this.oldData = {};

    this.state = {
      "FullName": "",
      "EmailId": "",
      "ContactNo": "",
      "dob": "",
      "Address": "",
      "City": "",
      "Country": "",
      'updated': false
    };

    this.handleChange = this.handleChange.bind(this);
    this.profileUpdate = this.profileUpdate.bind(this);
  }

  handleChange (e, { name, value })  { 
    this.setState({[name]: value }); 
  }

  componentDidMount() {
    this.api.post("profileinfo", "")
      .then(res => {
        const obj = {
          "FullName": res.FullName,
          "EmailId": res.EmailId,
          "ContactNo": res.ContactNo,
          "dob": res.dob,
          "Address": res.Address,
          "City": res.City,
          "Country": res.Country
        };
        this.oldData = obj;
        this.setState(obj);
      });
  }

  profileUpdate() {

    const s = this.state;
    const data = `fullname=${s.FullName}&mobilenumber=${s.ContactNo}&dob=${s.dob}
    &address=${s.Address}&city=${s.City}&country=${s.Country}`;

    this.api.post("updateprofile", data)
    .then((res) => {
      if(res.done) {
        this.setState({ updated: true });
      }
      this.oldData = s;

      setTimeout(() => {
        this.setState({ updated: false });
      }, 3000);

    });

  }

  render() {
    const activeItem = this.props.location.pathname.substr(1);
    const loading = this.state.FullName === "";
    const { 
      FullName, EmailId, ContactNo, dob, Address, City, Country 
    } = this.state;

    return (
      <div>
        <section className="page-header listing_page">
          <div className="container">
            <div className="page-header_wrap">
              <div className="page-heading">
                <h1>Your Profile</h1>
              </div>
            </div>
          </div>
          <div className="dark-overlay"></div>
        </section>

        <Container style={{paddingTop: '50px'}}>
          <Grid>
            <Grid.Column width={4}>
              <LinkTabPane activeItem={activeItem} />
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h2'>
                <Header.Content>
                  Profile Settings
                  <Header.Subheader>Update your Profile</Header.Subheader>
                </Header.Content>
              </Header>

              <Form size="large" loading={loading} onSubmit={this.profileUpdate} success>
                <Message hidden={this.state.updated !== true} 
                  success 
                  header='Profile Updated' 
                  content="Your Profile has been successfully updated" 
                 />

                <Form.Field>
                  <Form.Input value={FullName} 
                    name="FullName"
                    onChange={this.handleChange} 
                    label='Full name' 
                    placeholder='Full name' />
                </Form.Field>

                <Form.Field>
                  <Form.Input 
                    value={EmailId} 
                    label='Email Address' 
                    placeholder='Email' />
                </Form.Field>

                <Form.Field>
                  <Form.Input value={ContactNo}
                    name="ContactNo" 
                    onChange={this.handleChange} 
                    label='Phone Number' 
                    placeholder='Phone Number' />
                </Form.Field>

                <Form.Field>
                  <Form.Input value={dob} 
                    name="dob"
                    onChange={this.handleChange} 
                    label='Date of birth(yyyy-mm-dd)' 
                    placeholder='D.O.B' />
                </Form.Field>

                <Form.Field>
                  <Form.TextArea value={Address} 
                    name="Address"
                    onChange={this.handleChange} 
                    label='Address' 
                    placeholder='Address' />
                </Form.Field>

                <Form.Field>
                  <Form.Input value={Country} 
                    name="Country"
                    onChange={this.handleChange} 
                    label='Country' 
                    placeholder='Country' />
                </Form.Field>

                <Form.Field>
                  <Form.Input value={City} 
                    name="City"
                    onChange={this.handleChange} 
                    label='City' 
                    placeholder='City' />
                </Form.Field>

                <Button disabled={isEqual(this.state, this.oldData)} 
                  type='submit' 
                  size="large" 
                  color="green">Save Changes</Button>
              </Form>
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
)(Profile)
