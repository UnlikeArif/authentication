import './App.css';
import Layouts from "./layout/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="dark" style={{ width: '400px' }} />
      <Router>
        <Layouts />
      </Router>
    </>
  );
}

export default App;
