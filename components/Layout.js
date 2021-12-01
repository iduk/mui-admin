import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navigator from '../components/Navigator'
import Topbar from '../components/Topbar'
import AlertDialog from '../components/AlertDialog'
import {
  CssBaseline,
  useMediaQuery,
  Box,
  Typography,
  Link,
  Paper,
  Breadcrumbs,
  Grid,
  Container,
  Button,
  Stack,
  Divider,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
// "LocalizationProvider" Datepicker 사용시 얘로 감싸주어야함
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import DateRangePicker from '@mui/lab/DateRangePicker'
import SearchForm from './SearchForm'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  )
}

const drawerWidth = 240

export default function Index({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(new Date())

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

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

        <Container component="main" sx={{ flex: 1, minWidth: 'auto' }}>
          <Grid container spacing={2} sx={{ py: 5, mb: 4 }} alignItems="center">
            <Grid item md={6}>
              <Typography variant={'h4'} sx={{ fontWeight: 'bold' }}>
                현재 페이쥐스어타이를
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Stack spacing={1} direction="row" sx={{ justifyContent: 'end', alignItems: 'center' }}>
                <Button variant="outlined" color="light" size="large" onClick={handleClickOpen}>
                  모달 버튼
                </Button>
                <Button variant="contained" size="large">
                  현재 페이지 저장
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Box>
            <SearchForm />
          </Box>

          <Box>{children}</Box>
        </Container>
      </Box>

      {/* dialog */}
      <AlertDialog open={open} handleClose={handleClose} maxWidth={'xs'}>
        {/* Title */}
        <DialogTitle id="alert-dialog-title">제목은 이렇게</DialogTitle>

        {/* Content */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack spacing={2} sx={{ mt: 2 }}>
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
            </Stack>
          </DialogContentText>
        </DialogContent>

        {/* Buttons */}
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </AlertDialog>
    </Box>
  )
}
