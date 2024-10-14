import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import Card from "../../components/card";

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
    <div className={styles.categoriesPage_container}>
      <div className={styles.routes_container}>
        <p className={styles.main_page_rout}>Main page</p>
        <hr className={styles.hr} />
        <p className={styles.categories_page_rout}>Categories</p>
      </div>
      <h1 className={styles.categories_text}>Categories</h1>
      <div className={styles.cards_container}>
        {status === "succeeded" &&
          categories.map((category) => {
            return (
              <Card
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
