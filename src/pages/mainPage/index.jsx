import CategoriesList from "../../components/categoriesList";
import PromoSection from "../../components/promoSection";
import FirstOrderDiscount from "../../components/firstOrderDiscount";
import DiscountedProducts from "../../components/discountedProducts";
import styles from "./styles.module.css";

function MainPage() {
  //     Реализация главной страницы состоит из нескольких ключевых секций: секция с
  // промо-акциями, список категорий и секция с контактной информацией. Давайте
  // разберем каждую из них.

  return (
    <div className={styles.main_container}>
      <PromoSection />
      <CategoriesList />
      <FirstOrderDiscount />
      <DiscountedProducts />
    </div>
  );
}

export default MainPage;
