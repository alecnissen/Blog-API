import Homepage from "./Homepage"
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Create_User from "./Create_User";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Create_User" element={<Create_User></Create_User>} />
      

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
