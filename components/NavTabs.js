import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { createTheme } from '@mui/material/styles'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <LinkTab sx={{ fontWeight: 'bold' }} label="하위항목명1" href="/" />
        <LinkTab sx={{ fontWeight: 'bold' }} label="하위항목명2" href="/" />
        <LinkTab sx={{ fontWeight: 'bold' }} label="하위항목명3" href="/" />
      </Tabs>
    </Box>
  )
}
