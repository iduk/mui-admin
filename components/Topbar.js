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

const lightColor = 'rgba(255, 255, 255, 0.7)'

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
      <AppBar
        elevation="0"
        sx={{ bgcolor: '#fff', color: 'black', height: 56, justifyContent: 'center' }}
        position="static"
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <SportsKabaddiIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span name="mberNm">{'멤버명'}</span>
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
            sx={{ ml: 2 }}
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
