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
  // Получение всех категорий: `/categories/all
  // axios.get("http://localhost:3333/categories/all").then((response) => {
  //   this.SetState({
  //     categories: response.data,
  //   }).catch((error) => {
  //     console.error("There was an error fetching categories", error);
  //   });
  // });

  // Получение продуктов по категории: `/categories/:id
  //   Этот маршрут возвращает список продуктов, принадлежащих к определенной
  // категории. Параметр `:id` - это идентификатор категории.
  // axios
  //   .get(`http://localhost:3333/categories/${categoryId}`)
  //   .then((response) => {
  //     this.SetState({
  //       products: response.data,
  //     }).catch((error) => {
  //       console.error("There was an error fetching products", error);
  //     });
  //   });
  // Получение всех продуктов**: `/products/all`
  // Этот маршрут возвращает список всех продуктов. Мы можем использовать его для
  // отображения всех продуктов на странице "Все продукты".

  // axios.get("http://localhost:3333/products/all").then((response) => {
  //   this.SetState({
  //     products: response.data,
  //   }).catch((error) => {
  //     console.error("There was an error fetching products", error);
  //   });
  // });

  // Получение продукта по ID: `/products/:id`
  //   Этот маршрут возвращает информацию о продукте по его идентификатору.
  // Параметр `:id` - это идентификатор продукта.
  // axios.get(`http://localhost:3333/products/${productId}`).then((response) => {
  //   this.SetState({
  //     product: response.data,
  //   }).catch((error) => {
  //     console.error("There was an error fetching product", error);
  //   });
  // });

  //   5. Оформление заказа: `/order/send`
  // Этот маршрут используется для оформления заказа. Мы будем отправлять POST
  // запрос с данными заказа (имя, номер телефона, электронная почта и товары)
  // axios
  //   .post(`http://localhost:3333/order/send`, {
  //     name: this.state.name,
  //     phone: this.state.phone,
  //     email: this.state.email,
  //     products: this.state.cartProducts,
  //   })
  //   .then((response) => {
  //     alert("Order successfully placed");
  //   })
  //   .catch((error) => {
  //     console.error("There was an error placing the order", error);
  //   });

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
        <Route path="/allProducts" element={<ProductsPage />} />
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
