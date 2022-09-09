import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
