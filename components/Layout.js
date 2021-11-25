import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Navigator from '../components/Navigator'
import Topbar from '../components/Topbar'
import Paper from '@mui/material/Paper'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

const drawerWidth = 256

export default function Index({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Navigator PaperProps={{ style: { width: drawerWidth } }} open={mobileOpen} onClose={handleDrawerToggle} />

        <Navigator PaperProps={{ style: { width: drawerWidth } }} sx={{ display: { sm: 'block', xs: 'none' } }} />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar onDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, borderWidth: 1 }}>
          <Paper
            elevation={1}
            variant="outlined"
            sx={{ padding: 3, height: '100%', display: 'grid', gridTemplateColumns: '1fr', gap: 2 }}
          >
            {children}
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}
