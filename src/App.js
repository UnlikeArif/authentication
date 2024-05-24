
import './App.css';
import Layouts from "./layout/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer position="top-right" theme="dark" style={{ width: '400px' }} />
      <Layouts />
    </>
  );
}

export default App;
