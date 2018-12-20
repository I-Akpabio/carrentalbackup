import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from '../home'
import About from '../about'
import CarListing from '../car-listing'
import Contact from '../contact'
import Faq from '../faqs'
import BookCar from '../book-car'

import { Menu, Segment, Dropdown } from 'semantic-ui-react'

const App = (props) => {
  const activeItem = props.location.pathname.substr(1);
  return (
  <div>
    <header>
     <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' 
            active={activeItem === ''} 
            onClick={() => props.changePage('')}
           />
          <Menu.Item
            name='about us'
            active={activeItem === 'about-us'}
            onClick={() => props.changePage('about-us')}
          />
          <Menu.Item
            name='car listing'
            active={activeItem === 'car-listing'}
            onClick={() => props.changePage('car-listing')}
          />

          <Menu.Item
            name='faqs'
            active={activeItem === 'faqs'}
            onClick={() => props.changePage('faqs')}
          />

          <Menu.Item
            name='contact us'
            active={activeItem === 'contact'}
            onClick={() => props.changePage('contact')}
          />          

          <Menu.Menu position='right'>
            <Dropdown item text='John Smith'>
              <Dropdown.Menu>
                <Dropdown.Item>Profile Settings</Dropdown.Item>
                <Dropdown.Item>Update Password</Dropdown.Item>
                <Dropdown.Item>Post A Testimonial</Dropdown.Item>
                <Dropdown.Item>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Segment>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/car-listing" component={CarListing} />
      <Route exact path="/faqs" component={Faq} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path='/book-car' component={BookCar} />
    </main>
  </div>
)}

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: (url) => push(`/${url}`)
    },
    dispatch
  )

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))