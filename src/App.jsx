import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from "./component/PasswordGenerator/index"
import Button from "./Libary/KeepLibary/index"
import Menu from  "./Libary/Antd/index"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/password" element={<Password />} />
        <Route path="/button" element={<Button />} />
        <Route path="/Menu" element={<Menu />} />
    
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
