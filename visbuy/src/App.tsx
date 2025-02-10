import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import SelectedProduct from "./pages/selectedProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<SelectedProduct />} />
      </Routes>
    </div>
  );
}

export default App;
