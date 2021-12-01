import { blueGrey, grey, teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { palette, spacing, typography } from '@mui/system'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // BrandColor = #5cbbbb
      main: '#41d6d6',
    },
    secondary: {
      main: '#323c4a',
    },
    light: {
      main: '#eee',
    },
    info: {
      main: grey[600],
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
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
      lineHeight: 'normal',
    },
    body2: {
      lineHeight: 'normal',
    },
    h6: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 4,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          lineHeight: 1.5,
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
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiSelect: {
      styleOverrides: {
        borderRadius: 2,
      },
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',

          paddingTop: '1rem',
          paddingBottom: '1rem',

          // '& .MuiTabs-indicator': {
          //   position: 'absolute',
          //   width: '100%',
          //   height: '2px',
          //   left: '9px !important',
          //   right: '9px !important',
          //   bottom: 0,
          //   backgroundColor: palette.primary,
          // },
        },
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
  MuiListItemButton: {
    styleOverrides: {
      root: {
        //
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
  MuiIconButton: {
    styleOverrides: {
      sizeMedium: {
        color: 'inherit',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: 'inherit',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: 'inherit',
      },
    },
  },
})

export default theme
