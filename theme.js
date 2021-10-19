import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#5cbbbb',
    },
    secondary: {
      main: '#f2994a',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
