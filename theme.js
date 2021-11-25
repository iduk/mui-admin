import { blueGrey, teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { palette, spacing, typography } from '@mui/system'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal.A400,
    },
    secondary: {
      main: '#323c4a',
    },
    background: {
      default: '#111111',
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Noto Sans KR',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 14,
      letterSpacing: '-0.4px',
      lineHeight: 'normal',
    },
  },
  shape: {
    borderRadius: 4,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        borderRadius: 2,
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: 4,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgb(255,255,255,0.15)',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: blueGrey.A700,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          color: blueGrey.A100,
        },
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontSize: 14,
        fontWeight: typography.fontWeightMedium,
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: 'inherit',
        minWidth: 'auto',
        marginRight: spacing(2),
        '& svg': {
          fontSize: 20,
        },
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
})

export default theme
