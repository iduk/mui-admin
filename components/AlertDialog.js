import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { maxWidth } from '@mui/system'

export default function AlertDialog({ open, handleClose, maxWidth, children }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={maxWidth}
      >
        {children}
      </Dialog>
    </div>
  )
}
