import { createTheme } from "@mui/material"
import { brandConstants } from "../components/Register/lib/branding";

export const useCustomTheme = () => {

  const { colors, fontSizes } = brandConstants;

  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif;',
      h1: {
        fontSize: fontSizes.xl,
        fontWeight: 450,
        color: colors.primary
      }
    },
    palette: {
      primary: {
        main: colors.primary
      }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            background: colors.white,
            borderRadius: 24,
            padding: 24,
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: fontSizes.sm,
            color: colors.primary
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: colors.white,
            textTransform: 'none'
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          input: {
            fontSize: fontSizes.sm,
            '&[type="text"]': {
              fontSize: fontSizes.sm,
            },
          }
        }
      }
    }
  })

  return { theme }
}