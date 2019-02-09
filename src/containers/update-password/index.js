import React from 'react'
import "./index.css";

import { Container, Grid, Form, Button, Message } from 'semantic-ui-react'

import { LinkTabPane } from "../../components/link-tab-pane";

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Api from "../../utils/Api"

class UpdatePassword extends React.Component {

  constructor(props) {
    super(props);

    this.api = new Api();

    this.state = {
      current: "",
      next: "",
      verify: "",
      updated: false,
      updateFail: false,
      updateWarning: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.passwordUpdate = this.passwordUpdate.bind(this);
  }


  handleChange (e, { name, value })  { 
    this.setState({[name]: value }); 
  }

  passwordUpdate() {
    const {current, next, verify} = this.state;

    if(next !== verify) {
      this.setState({updateWarning: "The New password and Passord confirm do not match"});
    } else if(next === "" || current === "" || verify === "") {
      this.setState({updateWarning: "Make Sure to fill all fields !"});
    } else {
      const data = `password=${current}&newpassword=${next}`;

      this.api.postText("updatepassword", data).then(r => r.text()).then(console.log);
    }
  }

  render() {
    const activeItem = this.props.location.pathname.substr(1);
    return (
      <div>
        <section className="page-header listing_page">
          <div className="container">
            <div className="page-header_wrap">
              <div className="page-heading">
                <h1>Update Password</h1>
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

            <Grid.Column width={8}>
              <h2>UPDATE PASSWORD</h2>

               <Form size="large" onSubmit={this.passwordUpdate} success error warning>
                <Message hidden={this.state.updated !== true} 
                  success 
                  header='Form Completed' 
                  content="You're all signed up for the newsletter" 
				         />
				  
        				<Message hidden={this.state.updateFail !== true}
        				  error
        				  header='Action Forbidden'
        				  content='You can only sign up for an account once with a given e-mail address.'
        				/>

                <Message hidden={this.state.updateWarning === ""}
        				  warning
        				  header='Warning'
        				  content={this.state.updateWarning}
        				/>
                <Form.Field>
                  <Form.Input name="current" type="password"
                    onChange={this.handleChange} 
                    value={this.state.current}  
                    label='Current Password' 
                    placeholder='Current Password' />
                </Form.Field>

                <Form.Field>
                  <Form.Input name="next" type="password"
                    onChange={this.handleChange} 
                    value={this.state.next}  
                    label='New Password' 
                    placeholder='New Password' />
                </Form.Field>

                <Form.Field>
                  <Form.Input name="verify" type="password"
                    onChange={this.handleChange} 
                    value={this.state.verify} 
                    label='Confirm Password' 
                    placeholder='Confirm Password' />
                </Form.Field>

                <Button color="green" size="large">Update Password</Button>

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
)(UpdatePassword)
