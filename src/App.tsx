import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/auth/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
