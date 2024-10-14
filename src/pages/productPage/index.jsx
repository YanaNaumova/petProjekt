import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/slices/productSlice";

function ProductPage() {
  const { productId } = useParams();
  // axios.get(`http://localhost:3333/products/${productId}`)
  //     Переход на страницу продукта при клике на карточку товара
  // Используйте `react-router-dom` для настройки маршрутов. Добавьте маршрут для
  // страницы продукта, который будет включать параметр `id` продукта, например,
  // `/products/:id`.
  // Оберните каждую карточку продукта в компонент `Link` из `react-router-dom`.
  // При клике на карточку будет происходить перенаправление на страницу продукта,
  // URL которой будет включать идентификатор продукта.
  //   Создание компонента страницы продукта:
  // ● Этот компонент будет отвечать за отображение деталей конкретного
  // продукта.
  // Получение данных о продукте:
  // ● Используйте библиотеку Axios для выполнения HTTP-запроса к backend
  // серверу, чтобы получить данные о конкретном продукте.
  // ● Выполните запрос к маршруту `/products/:id`, где `id` — это идентификатор
  // продукта, переданный через URL.
  // Структура компонента:
  // ● В компоненте создайте структуру для отображения изображения, названия,
  // описания, цены и кнопки для добавления в корзину.
  // Обработка нажатия на кнопку:
  // ● Добавьте обработчик событий для кнопки. При нажатии на кнопку продукт
  // должен добавляться в корзину.
  // ● Используйте глобальное состояние приложения (например, Redux) для
  // управления состоянием корзины. В обработчике кнопки вызывайте
  // соответствующее действие, которое добавляет продукт в корзину.
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (status === "failed") return <h1>{error}Error</h1>;
  if (status === "loading") return <h1>loading ...</h1>;

  return (
    status === "succeeded" &&
    product.map((element) => {
      return (
        <div className={styles.productPage_container} key={element.id}>
          <img src={element.image} alt={element.title} />
          <p>{element.title}</p>
          <p>{element.price}</p>
          <p>{element.discont_price}</p>
          <p>{element.description}</p>
        </div>
      );
    })
  );
}

export default ProductPage;
