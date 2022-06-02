import { Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";
import Album from "./pages/album";


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main/>}>
        <Route path="*" element={<Calendar/>}></Route>
        <Route path="album" element={<Album/>}></Route>
        <Route path="login" element={<LogIn/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
