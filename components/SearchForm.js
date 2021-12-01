import React from 'react'
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
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
  SearchIcon,
  RefreshIcon,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from '@mui/material'

export default function SearchForm(props) {
  const { ...other } = props

  return (
    <>
      <Box sx={{ mb: 8 }} {...other}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          회원 상세정보
        </Typography>
        <Grid spacing={2} container alignItems="center">
          <Grid item md={4}>
            <TextField value="dukeeee" label="회원 아이디" fullWidth />
          </Grid>
          <Grid item md={4}>
            <TextField value="dukeeee" label="성명" fullWidth />
          </Grid>

          <Grid item md={4}>
            <TextField label="생년월일" value="1990.10.12" fullWidth />
          </Grid>

          <Grid item md={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">양력/음력</FormLabel>
              <RadioGroup row aria-label="birthdayType" name="birthdayType">
                <FormControlLabel value="solar" control={<Radio />} label="양력" />
                <FormControlLabel value="lunar" control={<Radio />} label="음력" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item md={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">성별</FormLabel>
              <RadioGroup row aria-label="gender" name="gender" onSelect={'male'}>
                <FormControlLabel value="male" control={<Radio />} label="남자" />
                <FormControlLabel value="female" control={<Radio />} label="여자" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item md={2}>
            <TextField label="등급" value="1990.10.12" fullWidth />
          </Grid>
          <Grid item md={2}>
            <TextField label="상태" value="1990.10.12" fullWidth />
          </Grid>

          <Grid item md={8}>
            <Stack direction="row" spacing={2}>
              <TextField label="우편번호" placeholder="우편번호 5자리" value="23430" />
              <TextField label="주소" value="서울시 성동구 왕십리로 234 비타빌딩 2층" fullWidth />
            </Stack>
          </Grid>
          <Grid item md={4}>
            <TextField label="비고" placeholder="입력" fullWidth />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
