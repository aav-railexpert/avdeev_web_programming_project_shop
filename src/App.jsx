import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import IndexPage from "./pages/IndexPage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
