import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser"
import User from "./component/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
