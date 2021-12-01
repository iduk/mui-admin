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
  FormLabel,
  Container,
  TextareaAutosize,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
// "LocalizationProvider" Datepicker 사용시 얘로 감싸주어야함
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import DateRangePicker from '@mui/lab/DateRangePicker'
import { grey } from '@mui/material/colors'

export default function Index() {
  const [value, setValue] = React.useState(0)

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      {/* Tabs */}
      <Box sx={{ width: '100%' }}>
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
  const [value, setValue] = React.useState(new Date())

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
        <Grid item md={9}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Box
              sx={{
                '& .MuiTextField-root': { minWidth: 'auto' },
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Grid spacing={2} container alignItems="center">
                <Grid item md={3}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="상담기간"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue)
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item md={3}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue)
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item md={2}>
                  <FormControl fullWidth>
                    <InputLabel id="select1">상담사유</InputLabel>
                    <Select
                      labelId="select1-label"
                      id="select1"
                      value={option}
                      onChange={handleChangeSelect}
                      autoWidth
                      label="상담사유"
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={2}>
                  <FormControl fullWidth>
                    <InputLabel id="select2">상담결과</InputLabel>
                    <Select
                      labelId="select2-label"
                      id="select2"
                      value={option}
                      onChange={handleChangeSelect}
                      autoWidth
                      label="상담결과"
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={2}>
                  <Button variant="text">조회</Button>
                </Grid>
              </Grid>
            </Box>
            <DataTable />
          </Paper>
          {/* searching form */}
        </Grid>

        <Grid item md={3}>
          <Paper elevation={2} sx={{ px: 2, py: 3, height: '100%' }}>
            <Typography sx={{ mb: 3, fontSize: 14, lineHeight: 1, color: grey[600] }}>상담내용</Typography>

            <Stack spacing={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="상담일시"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  readOnly
                />
              </LocalizationProvider>
              <TextField label="상담사유" />
              <TextField label="상담결과" />
              <TextField label="상담내용" multiline rows={8} />
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Button color="info">초기화</Button>
                <Button>저장</Button>
              </Stack>
            </Stack>
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
