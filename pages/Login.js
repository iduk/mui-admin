import * as React from 'react'
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
            <img src="logo.svg" width="100px" alt="logo" />
          </div>
          <Typography variant="h4" c sx={{ py: 1, textTransform: 'uppercase' }}>
            Admin Login
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="dense"
            label={'아이디'}
            id="userid"
            name="userid"
            type="text"
            required
            fullWidth
            autoComplete
            autoFocus
          />
          <TextField
            margin="normal"
            label="비밀번호"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="아이디 저장" />
          <Button href="/" type="submit" fullWidth variant="contained" sx={{ py: 1.5, mt: 1 }}>
            <Typography variant="h6">로그인</Typography>
          </Button>
          <Button type="submit" fullWidth variant="text" sx={{ py: 1.5, my: 2 }}>
            <Typography variant="body2">관리자 등록</Typography>
          </Button>
          <Grid container>
            <Grid item xs textAlign="right">
              <Link href="#" variant="body2">
                비밀번호찾기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
  )
}
