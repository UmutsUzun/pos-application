import {BrowserRouter, Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomerPage from "./pages/CustomerPage";
import StatsPage from "./pages/StatsPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/invoices" element={<InvoicesPage />} />
         <Route path="/customers" element={<CustomerPage />} />
         <Route path="/stats" element={<StatsPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
