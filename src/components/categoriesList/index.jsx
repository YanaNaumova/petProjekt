import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import Card from "../card";
import AllShowButton from "../allShowButon";

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
      <AllShowButton
        textTitle="Categories"
        btnTitle="All Categories"
        link="/categories/all"
      />
      <div className={styles.cards_container}>
        {categories &&
          categories.slice(0, 4).map((category) => {
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
export default CategoriesList;
