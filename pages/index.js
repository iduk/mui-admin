import * as React from 'react'
import Paper from '@mui/material/Paper'
import Layout from '../components/Layout'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import theme from '../theme'
import DataTable from '../components/DataTable'
import { styled } from '@mui/material/styles'

export default function Index() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      {/* Tabs */}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="기본탭">
            <Tab label="기본 아이템 원" {...a11yProps(0)} />
            <Tab label="기본 아이템 투" {...a11yProps(1)} />
            <Tab label="기본 아이템 뜨리" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box sx={{ py: 2 }}>
          <TabPanel value={value} index={0}>
            <PanelContent />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Box>
    </Layout>
  )
}

function PanelContent() {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item md="8">
          <Typography variant="headline" component="h2">
            테이블 제목
          </Typography>
          <Paper elevation={1}>
            <DataTable />
          </Paper>
        </Grid>
        <Grid item md="4">
          <Typography variant="headline" component="h2">
            상담 내용
          </Typography>
        </Grid>
      </Grid>
    </div>
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
