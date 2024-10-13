import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function CategoriesPage() {
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  if (status === "failed") return <h1>{error}</h1>;
  if (status === "loading") return <h1>loading ...</h1>;
  //     Создание компонента страницы категорий:
  // ● Создайте отдельный компонент для страницы категорий.
  // ● Компонент содержит Header, Footer и основную часть
  // ● Этот компонент будет отвечать за отображение всех категорий товаров.
  // ● Также в левом верхнем углу основной части компонента отображается
  // текущий маршрут пользователя (Main page - Categories)
  //   Получение данных о категориях:
  // ● Используйте библиотеку Axios для выполнения HTTP-запроса к backend
  // серверу, чтобы получить данные о категориях.
  // ● Выполните запрос к маршруту `/categories/all`, чтобы получить список всех
  // категорий.

  return (
    <div>
      {status === "succeeded" &&
        categories.map((category) => {
          return (
            <div key={category.id}>
              <img src={category.image} alt={category.title} />
              <p>{category.title}</p>
            </div>
          );
        })}
    </div>
  );
}

export default CategoriesPage;
