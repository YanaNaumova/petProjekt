import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../redux/slices/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function CategoryPage() {
  //     Переход на страницу категории при клике на категорию
  // Настройка роутинга:
  // ● Используйте `react-router-dom` для настройки маршрутов. В компоненте
  // `App.js` добавьте маршрут для страницы категории, который будет включать
  // параметр `id` категории, например, `/categories/:id`.
  // Ссылка на страницу категории:
  // ● Оберните каждую карточку категории в компонент `Link` из
  // `react-router-dom`.
  // ● При клике на карточку будет происходить перенаправление на страницу
  // категории, URL которой будет включать идентификатор категории.
  //   Создание компонента страницы категории:
  // ● Создайте отдельный компонент для страницы категории.
  // ● Этот компонент будет отвечать за отображение продуктов, относящихся к
  // выбранной категории.
  // ● В левом верхнем углу этого компонента тоже отображается текущий маршрут
  // (на всех страницах кроме главной, корзины и 404 должен отображаться
  // маршрут).
  //   Получение данных о продуктах:
  // ● Данные о товарах определенной категории необходимо получать с сервера.
  // Отображение продуктов:
  // ● Каждый продукт отображается в виде отдельной карточки товара.
  // ● При наведении на карточку товара появляется кнопка добавления товара в
  // корзину.
  // ● Если на товар действует скидка, то это должно отображаться на карточке.
  // ● Товары можно отфильтровать по новизне, цене.
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [dispatch, categoryId]);

  if (status === "failed") return <h1>{error}Error</h1>;
  if (status === "loading") return <h1>loading ...</h1>;

  return (
    status === "succeeded" && (
      <div className={styles.categoryPage_container}>
        <div>{data.category.title}</div>
        {data.data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.discont_price}</p>
            </div>
          );
        })}
      </div>
    )
  );
}

export default CategoryPage;
