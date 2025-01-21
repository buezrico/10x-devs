import { Route, Routes } from "react-router";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import ProductPage from "./components/product/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
