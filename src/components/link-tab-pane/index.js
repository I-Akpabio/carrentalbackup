import React from 'react'

import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export function LinkTabPane(props) {
  const activeItem = props.activeItem;
  return (
    <List link>
      <List.Item active={activeItem === 'profile'}>
        <Link to="/profile">Profile Settings</Link>
      </List.Item>
      <List.Item active={activeItem === 'update-password'}>
        <Link to="/update-password">Update Password</Link>
      </List.Item>
      <List.Item active={activeItem === 'bookings'}>
        <Link to="/bookings">My Bookings</Link>
      </List.Item>
      <List.Item>
        <Link to="/">Sign Out</Link>
      </List.Item>
    </List>
  )
}
