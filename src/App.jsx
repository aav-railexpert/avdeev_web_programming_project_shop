import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import IndexPage from "./pages/IndexPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
