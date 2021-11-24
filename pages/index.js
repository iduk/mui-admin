import * as React from 'react'
import Layout from '../components/Layout'
import Button from '@mui/material/Button'
import AlertDialog from '../components/AlertDialog'

import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function Index() {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <Layout>
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

// const AlertSample = ({ open, handleClose }) => {
//   return (
//     <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
//       <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
//       <DialogContent>
//         <DialogContentText id="alert-dialog-description">
//           Let Google help apps determine location. This means sending anonymous location data to Google, even when no
//           apps are running.
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Disagree</Button>
//         <Button onClick={handleClose} autoFocus>
//           Agree
//         </Button>
//       </DialogActions>
//     </Dialog>
//   )
// }
