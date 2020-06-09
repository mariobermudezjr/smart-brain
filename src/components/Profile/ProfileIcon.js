import React, { useState } from 'react'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const ProfileIcon = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <div className="pa4 tc">
      <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
          <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>View Profile</DropdownItem>
          <DropdownItem onClick={() => props.onRouteChange('signout')}>Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ProfileIcon
