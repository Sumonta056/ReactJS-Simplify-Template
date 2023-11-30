import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from "./component/PasswordGenerator/index"
import Button from "./Libary/KeepLibary/index"
import Menu from  "./Libary/Antd/index"
import CustomMenu from "./component/Menu/App"
import Website from "./Website/App"
import SearchFilter from "./component/Search-Filter/App"
import ShoppingCart from "./component/ShoppingCart/App"
import DarkMode from  "./component/Dark-Light-Mode/App"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/password" element={<Password />} />
        <Route path="/button" element={<Button />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Custom" element={<CustomMenu />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/darkmode" element={<DarkMode />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
