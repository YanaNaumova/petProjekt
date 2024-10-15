import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import Card from "../../components/card";
import RoutsBtn from "../../components/routsBtn";

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

  const obj = [
    {
      link: "/",
      title: "Main page",
    },
    {
      link: "/categories/all",
      title: "Categories",
    },
  ];

  return (
    <div className={styles.categoriesPage_container}>
      <RoutsBtn obj={obj} />
      <h1 className={styles.categories_text}>Categories</h1>
      <div className={styles.cards_container}>
        {status === "succeeded" &&
          categories.map((category) => {
            return (
              <Card
                key={category.id}
                id={category.id}
                image={category.image}
                title={category.title}
              />
            );
          })}
      </div>
    </div>
  );
}

export default CategoriesPage;
