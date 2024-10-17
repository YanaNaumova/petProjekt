import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import Card from "../../components/card";
import RoutsBtn from "../../components/routsBtn";
import CustomHeader from "../../components/customHeader";

function CategoriesPage() {
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  if (status === "failed") return <h1>{error}</h1>;
  if (status === "loading") return <h1>loading ...</h1>;

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
      <CustomHeader title="Categories" />
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
