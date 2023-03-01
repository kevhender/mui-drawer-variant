import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {DrawerProps} from "@mui/material";

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module '@mui/material/Drawer' {
  interface DrawerPropsOverride extends DrawerProps  {
    variant?: 'permanent' | 'persistent' | 'temporary' | 'custom' | undefined;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiDrawer: {
      variants: [
        {
          props: {
            variant: 'custom',
          },
          style: {
            '& .MuiDrawer-paper': {
              border: '3px solid lime',
              padding: 20
            },
            '& .MuiBackdrop-root': {
              background: 'rgba(0, 0, 150, 0.2)'
            },
          }
        }
      ]
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '.MuiDrawer-custom &': {
            border: '3px solid red'
          }
        }
      }
    }
  }
});

export default theme;
