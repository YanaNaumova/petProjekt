import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import MainPage from "./pages/mainPage";
import CategoriesPage from "./pages/categoriesPage";
import CategoryPage from "./pages/categoryPage";
import ProductsPage from "./pages/productsPage";
import DiscountedItemsPage from "./pages/discountedItemsPage";
import CartPage from "./pages/cartPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "./redux/slices/categoriesSlice";
import { fetchProducts } from "./redux/slices/productsSlice";
import ProductPage from "./pages/productPage";
import Error404Page from "./pages/error404Page";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories/all" element={<CategoriesPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/allSales" element={<DiscountedItemsPage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
