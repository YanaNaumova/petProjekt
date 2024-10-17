import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import Card from "../card";
import AllShowButton from "../allShowButon";

function CategoriesList() {
  const categories = useSelector((state) => state.categories.categories);

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
