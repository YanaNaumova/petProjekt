import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/slices/productSlice";
import { fetchCategory } from "../../redux/slices/categorySlice";
import RoutsBtn from "../../components/routsBtn";
import { useState } from "react";
import { Button } from "antd";
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";

function ProductPage() {
  const { productId } = useParams();
  const [isShow, setIshow] = useState(false);
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
  const {
    data: categoryData,
    status: categoryStatus,
    error: categoryError,
  } = useSelector((state) => state.category);

  let title = product.length > 0 ? product[0].title : "";
  const obj = [
    {
      link: "/",
      title: "Main page",
    },
    {
      link: "/categories/all",
      title: "Categories",
    },
    {
      link: `/categories/${categoryData.category.id}`,
      title: categoryData.category.title,
    },
    {
      link: `/products/${productId}`,
      title: title,
    },
  ];

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (status === "succeeded" && product.length > 0) {
      const categoryId = product[0]?.categoryId;
      if (categoryId && categoryStatus === "idle") {
        dispatch(fetchCategory(categoryId));
      }
    }
  }, [status, categoryStatus, product, dispatch]);

  if (status === "failed") return <h1>{error}Error</h1>;
  if (status === "loading") return <h1>loading ...</h1>;

  return (
    status === "succeeded" && (
      <div className={styles.productPage_container}>
        <RoutsBtn obj={obj} />
        {product.map((element) => {
          return (
            <div className={styles.card_container} key={element.id}>
              <div className={styles.img_container}>
                <img
                  src={element.image}
                  alt={element.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.description_card_container}>
                <p className={styles.header}>{element.title}</p>
                {element.discont_price ? (
                  <div className={styles.price_container}>
                    <p className={styles.price}>${element.price}</p>
                    <p className={styles.discount_price}>
                      ${element.discont_price}
                    </p>
                    <div className={styles.badge}>sale</div>
                  </div>
                ) : (
                  <div className={styles.price_container}>
                    <p className={styles.price}>${element.price}</p>
                  </div>
                )}
                <div className={styles.btn_container}>
                  <div className={styles.counter_container}>
                    <div className={styles.minus_btn}>
                      <img
                        src={Minus}
                        alt="minus"
                        className={styles.minus_icon}
                      />
                    </div>
                    <div className={styles.count_number}>1</div>
                    <div className={styles.plus_btn}>
                      <img src={Plus} alt="plus" className={styles.plus_icon} />
                    </div>
                  </div>
                  <Button type="primary" className={styles.addToCart}>
                    Add to cart
                  </Button>
                </div>
                <div className={styles.description}>
                  <h3 className={styles.description_header}>Description</h3>
                  <p
                    className={styles.description_text}
                    style={{
                      overflow: isShow ? "visible" : "hidden",
                      maxHeight: isShow ? "none" : "227px",
                    }}
                  >
                    {element.description}
                  </p>
                  <a
                    href="#"
                    className={styles.link}
                    onClick={() => setIshow(!isShow)}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default ProductPage;
