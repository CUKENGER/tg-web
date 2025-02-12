import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoPage } from "./pages/Todo";
import { CreateProduct } from "./pages/createProduct";
import { ProductsPage } from "./pages/Products";
import { Header } from './components/header';
import { ProductPage } from './pages/Product';

export const App = () => {

  return (
    <div className="max-w-7xl mx-auto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
};
