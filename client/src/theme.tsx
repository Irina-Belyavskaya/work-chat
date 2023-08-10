import { createTheme } from '@mui/material/styles';

export const colors = {
  default: {
    white: '#FFFFFF',
    brand_primary: '#25282A',
    gray: {
      main: '#8D8A8B',
      dark: '#6C6C6C',
      dark2: '#353535',
      ligth: '#F3F3F3',
      light2: '#FAFAFA',
      light3: '#9D9D9D',
      light4: '#F4F4F4',
      light5: '#F7F7F7',
      medium2: '#ACACAC',
      medium3: '#5F5F5F',
      disabled: '#CACACA',
      border: '#E6E8EC',
      border2: '#F0F0F0',
    },
    error: {
      main: '#E9424D',
      light: '#FFE8EA',
    },
    success: {
      main: '#0EB115',
      light: '#DBF7DC',
    },
    info: {
      main: '#5537EB',
      light: '#EBE8FF',
    },
    warning: {
      main: '#FFA800',
      light: '#FFF2D9',
    },
    blue: {
      main: '#109FC8',
      light: '#DBF1F7'
    }
  },
};

export default createTheme({
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: colors.default.brand_primary,
      light: colors.default.gray.main,
    },
    secondary: colors.default.gray,
    info: colors.default.info,
    success: colors.default.success,
    warning: colors.default.warning,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: 'Rastella',
          fontSize: 100,
          lineHeight: '151px',
          color: colors.default.white,
        },
        h2: {
          fontSize: '28px',
          lineHeight: '33.6px',
          color: colors.default.brand_primary,
          textTransform: 'uppercase',
        },
        h3: {
          fontSize: '20px',
          lineHeight: '24px',
          color: colors.default.brand_primary,
          textTransform: 'uppercase',
        },
        h4: {
          fontFamily: 'Norwester',
          fontSize: '18px',
          lineHeight: '21.6px',
          color: colors.default.brand_primary,
          textTransform: 'uppercase',
          textDecoration: 'none',
        },
        h5: {
          fontFamily: 'Open Sans',
          fontSize: '16px',
          lineHeight: '21.79px',
          fontWeight: 600,
          color: colors.default.brand_primary,
          textDecoration: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          color: colors.default.gray.medium2,
          fontWeight: 600,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ':before': {
            borderBottom: `1px solid ${colors.default.gray.medium2}`,
          },
          ':after': {
            borderWidth: '1px',
          },
          ':hover:not(.Mui-disabled):before': {
            borderWidth: '1px',
          },
          padding: 0,
          input: {
            paddingTop: '10px',
            '::placeholder': {
              color: colors.default.gray.dark,
              opacity: 1,
            },
          },
          textarea: {
            paddingTop: '10px',
            '::placeholder': {
              color: colors.default.gray.dark,
              opacity: 1,
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiInput-root .MuiInput-input': {
            paddingBottom: '19px',
            paddingTop: '14px',
          },
        },
        endAdornment: {
          top: 'calc(50% - 18px)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: colors.default.gray.dark,
          fontSize: 14,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.Mui-disabled': {
            opacity: 0.5,
          },
          '&.MuiButton': {
            '&-contained': {
              boxShadow: 'none',
              '&Error': {
                backgroundColor: colors.default.error.light,
                color: colors.default.error.main,
              },
              '&Inherit': {
                backgroundColor: colors.default.info.light,
                color: colors.default.info.main,
              },
              '&Success': {
                backgroundColor: colors.default.success.light,
                color: colors.default.success.main,
              },
            },
            '&-outlined': {
              '&Error': {
                backgroundColor: colors.default.error.main,
                color: colors.default.white,
              },
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          th: {
            padding: '14px 0',
            color: colors.default.brand_primary,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.default.gray.border}`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'none',
          padding: '25px 0',
          paddingRight: '10px',
          fontSize: '16px',
          color: colors.default.gray.dark,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '16.34px',
        },
        colorSuccess: {
          backgroundColor: colors.default.success.light,
          color: colors.default.success.main,
        },
        colorError: {
          backgroundColor: colors.default.error.light,
          color: colors.default.error.main,
        },
        colorWarning: {
          backgroundColor: colors.default.warning.light,
          color: colors.default.warning.main,
        },
        colorInfo: {
          backgroundColor: colors.default.info.light,
          color: colors.default.info.main
        }
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          'input[type="checkbox" i]:focus-visible': {
            outlineOffset: 'none',
          },
          ':focus-visible': {
            outline: 'none',
          },
          alignItems: 'center',
          padding: 0,
          '.MuiSwitch-thumb': {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.default.brand_primary}`,
            borderRadius: '2px',
            width: '16px',
            height: '16px',
            boxShadow: 'none',
            marginTop: '7px',
            ':focus-visible': {
              outline: 'none',
            },
          },
          '.MuiTouchRipple-root': {
            ':focus-visible': {
              outline: 'none',
            },
          },
          '.MuiSwitch-switchBase': {
            padding: 3,
            ':focus-visible': {
              outline: 'none',
            },
          },
          '.Mui-checked': {
            '+ .MuiSwitch-track': {
              backgroundColor: 'transparent !important',
            },
            ' .MuiSwitch-thumb': {
              backgroundColor: colors.default.brand_primary,
            },
          },
          '.MuiSwitch-track': {
            backgroundColor: 'transparent !important',
            opacity: 1 + ' !important',
            height: '22px',
            width: '42px',
            borderRadius: '2px',
            border: `1px solid ${colors.default.brand_primary}`,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: '380px',
          borderRadius: '6px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '24.51px',
          textAlign: 'center',
          color: colors.default.brand_primary,
          padding: '20px 10px',
          paddingBottom: '10px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '20px 10px',
          paddingTop: '10px !important',
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '19.07px',
          color: colors.default.brand_primary,
          textAlign: 'center',
          padding: '0 !important',
          paddingBottom: '10px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          padding: '10px 15px',
          button: {
            width: '50%',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '21.79px',
            textAlign: 'center',
            color: colors.default.brand_primary,
            '&.apply-btn': {
              color: colors.default.error.main,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: colors.default.brand_primary,
          border: `1px solid ${colors.default.brand_primary}`,
          borderRadius: '4px',
          padding: '4px 12px',
          '&.Mui-selected': {
            backgroundColor: colors.default.brand_primary,
            color: colors.default.white,
            ':hover': {
              backgroundColor: colors.default.brand_primary,
              color: colors.default.white,
            },
          },
        },
      },
    },
  },
});
