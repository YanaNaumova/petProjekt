import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Button } from "antd";

function CategoriesList() {
  const categories = useSelector((state) => state.categories.categories);
  //     Эта секция отображает первые четыре категории товаров с соответствующими
  // изображениями и ссылками на страницы категорий. Для ее реализации потребуется:
  // ● Компонент будет получать данные о категориях (названия, изображения и
  // ссылки) через props или из глобального состояния (например, Redux).
  // ● Для каждой категории отрисовывать карточку с изображением и названием.
  // ● В правом верхнем углу кнопка, перенаправляющая на страницу со всеми
  // категориями.
  // ● Использовать `react-router-dom` для создания ссылок на страницы категорий.
  // ● Каждая карточка должна быть обернута в компонент `Link`, который
  // перенаправляет на соответствующую страницу категории.

  // useEffect(() => {
  //   // getCategoryById(2);
  // }, []);
  return (
    <div className={styles.cards_categories_container}>
      <div className={styles.header_container}>
        <h1 className={styles.header_text}>Categories</h1>
        <hr className={styles.hr} />
        <NavLink to="/categories">
          <Button className={styles.btn}>All categories</Button>
        </NavLink>
      </div>
      <div className={styles.cards_container}>
        {categories &&
          categories.slice(0, 4).map((category) => {
            return (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className={styles.link}
              >
                <div className={styles.card_container}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className={styles.img}
                  />
                  <p className={styles.card_title}>{category.title}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
export default CategoriesList;
