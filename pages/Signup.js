/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme } from '@mui/material/styles'
import { blueGrey, grey } from '@mui/material/colors'
import Paper from '@mui/material/Paper'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://vitamate.co.kr" target="_blank">
        https://vitamate.co.kr
      </Link>
    </Typography>
  )
}

const theme = createTheme()

export default function Login() {
  const [values, setValues] = useState([
    {
      id: 'adminId',
      label: '아이디 입력',
      type: 'text',
      autoComplate: 'current-id',
      required: true,
    },
    {
      id: 'adminPw',
      label: '비밀번호 입력',
      type: 'password',
      autoComplate: 'current-pw',
      required: true,
    },
    {
      id: 'adminPwRe',
      label: '비밀번호 재입력',
      type: 'password',
      autoComplate: 'current-pwre',
      required: true,
    },
    {
      id: 'adminEmail',
      label: '이메일 입력',
      type: 'email',
      autoComplate: 'current-email',
      required: true,
    },
    {
      id: 'adminTel',
      label: '연락처',
      type: 'text',
      autoComplate: 'current-tel',
      required: true,
    },
  ])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Box component="main">
      <CssBaseline />
      <Container
        maxWidth="xs"
        sx={{
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ my: 3, width: '100%' }}>
          <div>
            <img src="logo.svg" height={20} alt="logo" />
          </div>
          <Typography variant="h4" c sx={{ py: 1, textTransform: 'uppercase' }}>
            Admin Signup
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TextField label={values[0].label} fullWidth />
            </Grid>
            <Grid item md={6}>
              <TextField label={values[1].label} fullWidth />
            </Grid>
            <Grid item md={6}>
              <TextField label={values[2].label} fullWidth />
            </Grid>
            <Grid item md={12}>
              <TextField label={values[3].label} fullWidth />
            </Grid>
            <Grid item md={12}>
              <TextField label={values[4].label} fullWidth />
            </Grid>
          </Grid>

          <Button href="/" type="submit" fullWidth variant="contained" sx={{ py: 1.5, mt: 2 }}>
            <Typography variant="h6">등록 완료</Typography>
          </Button>
        </Box>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
  )
}
