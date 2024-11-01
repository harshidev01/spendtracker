import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
