import * as React from 'react'
import PropTypes from 'prop-types'
import theme from '../theme'
import Layout from '../components/Layout'
import DataTable from '../components/DataTable'
import { styled } from '@mui/material/styles'
import {
  Paper,
  Button,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  TextField,
  MenuItem,
  Stack,
  FormControl,
  Select,
  InputLabel,
} from '@mui/material'

export default function Index() {
  const [value, setValue] = React.useState(0)

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      {/* Tabs */}
      <Box sx={{ width: '100%', flexShrink: 1 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChangeTab} aria-label="기본탭">
            <Tab label="상담내역" {...a11yProps(0)} />
            <Tab label="구독 및 약정" {...a11yProps(1)} />
            <Tab label="결제" {...a11yProps(2)} />
            <Tab label="추천인" {...a11yProps(3)} />
            <Tab label="등급이력" {...a11yProps(4)} />
            <Tab label="포인트" {...a11yProps(5)} />
            <Tab label="알림" {...a11yProps(6)} />
            <Tab label="배송" {...a11yProps(7)} />
          </Tabs>
        </Box>
        <Box sx={{ py: 2 }}>
          <TabPanel value={value} index={0}>
            <PanelContent />
          </TabPanel>
          <TabPanel value={value} index={1}>
            아휴...
          </TabPanel>
          <TabPanel value={value} index={2}>
            에혀.......
          </TabPanel>
          <TabPanel value={value} index={3}>
            징글징글.....
          </TabPanel>
          <TabPanel value={value} index={4}>
            돼따 뒈써..
          </TabPanel>
          <TabPanel value={value} index={5}>
            말해모혀
          </TabPanel>
        </Box>
      </Box>
    </Layout>
  )
}

function PanelContent() {
  const [option, setOption] = React.useState('a')

  const handleChangeSelect = (e) => {
    setOption(e.target.value)
  }
  const options = [
    {
      value: 'a',
      label: '전체',
    },
    {
      value: 'b',
      label: '라ㅏ라라라라랄',
    },
  ]

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Box
              sx={{
                '& .MuiTextField-root': { minWidth: '160px' },
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Stack spacing={1} direction="row">
                <TextField
                  id="date"
                  label="상담기간"
                  type="date"
                  defaultValue="2020-01-01"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  sx={{ minWidth: 160 }}
                />
                <TextField
                  id="date"
                  label="상담기간"
                  type="date"
                  defaultValue="2020-12-01"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  sx={{ minWidth: 160 }}
                />
                <FormControl sx={{ minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">상담사유</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={option}
                    onChange={handleChangeSelect}
                    autoWidth
                    label="상담사유"
                    size="small"
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">상담결과</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={option}
                    onChange={handleChangeSelect}
                    autoWidth
                    label="상담결과"
                    size="small"
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button variant="outlined">검색</Button>
              </Stack>
            </Box>
            <DataTable />
          </Paper>
          {/* searching form */}
        </Grid>

        <Grid item md={4}>
          <Paper elevation={2} sx={{ height: '100%' }}>
            asdf
          </Paper>
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
