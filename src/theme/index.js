import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',  // You can replace 'Roboto' with your desired font
            'Arial',
            'sans-serif'
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',  // This disables the default uppercase transformation
                    textTransform: 'capitalize',  // This ensures all button text is lowercase
                },
            },
        },
    },
})

export default theme;