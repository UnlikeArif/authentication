import './App.css';
import Layouts from "./layout/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer position="top-right" theme="dark" style={{ width: '400px' }} />
        <Router>
          <Layouts />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
