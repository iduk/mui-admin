import * as React from 'react'
import Layout from '../components/Layout'
import Button from '@mui/material/Button'
import AlertDialog from '../components/AlertDialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import theme from '../theme'
import { styled } from '@mui/material/styles'

export default function Index() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(0)

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      {/* Tabs */}
      {/* <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="기본탭">
            <Tab label="기본 아이템 원" {...a11yProps(0)} />
            <Tab label="기본 아이템 투" {...a11yProps(1)} />
            <Tab label="기본 아이템 뜨리" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box> */}
      <div>
        <Button variant="contained" color="primary" size="large" onClick={handleClickOpen}>
          일반팝업
        </Button>

        <AlertDialog open={open} handleClose={handleClose} maxWidth={'xs'}>
          {/* Title */}
          <DialogTitle id="alert-dialog-title">제목은 이렇게</DialogTitle>

          {/* Content */}
          <DialogContent>
            <DialogContentText id="alert-dialog-description">여따가 내용</DialogContentText>
          </DialogContent>

          {/* Buttons */}
          <DialogActions>
            <Button onClick={handleClose}>취소</Button>
            <Button onClick={handleClose} autoFocus>
              확인
            </Button>
          </DialogActions>
        </AlertDialog>
      </div>
    </Layout>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
