import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main/>}></Route>
        <Route path="login" element={<LogIn/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
      </Routes>
    </>
  );
}

export default App;
