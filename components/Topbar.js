import PropTypes from 'prop-types'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
// import NavTabs from './NavTabs'
import BreadCrumb from './BreadCrumb'

const appbarStyle = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.2) inset',
  height: 60,
  justifyContent: 'center',
  borderRadius: 0,
}

function Topbar(props) {
  const { onDrawerToggle } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <AppBar sx={{ ...appbarStyle }} elevation={0} position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* 하위탭이 상단에 있을때 */}
            {/* <NavTabs /> */}
            <BreadCrumb />
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>사용자 정보 수정</MenuItem>
            <MenuItem onClick={handleClose}>환경설정..이라던지</MenuItem>
          </Menu>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ ml: 1 }}
            href={'/Signin'}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

Topbar.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
}

export default Topbar
