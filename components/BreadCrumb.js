import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function BreadCrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        홈
      </Link>
      <Link underline="hover" color="inherit" href="/">
        영업대리점관리
      </Link>
      <Link underline="hover" color="inherit" href="/">
        영업 대리점 목록
      </Link>
      <Typography color="text.primary">R/S 관리</Typography>
    </Breadcrumbs>
  )
}
