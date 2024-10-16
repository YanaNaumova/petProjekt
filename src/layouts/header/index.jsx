import Logo from "../../assets/icons/logo.svg";
import EmptyBasket from "../../assets/icons/basketEmpty.svg";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Header() {
  //   1. Логотип
  // ● В левом углу размещен логотип сайта - изображение.
  // ● Сделайте логотип ссылкой, которая ведет на главную страницу (`/`).
  // 2. Навигация:
  // ● Рядом с логотипом размещаются навигационные ссылки на основные
  // страницы сайта, такие как "Главная", "Категории", "Все продукты", "Все акции".
  // ● Используйте `react-router-dom` для создания этих ссылок, чтобы переходы
  // между страницами были плавными.
  // 3. Иконки:
  // ● В правом углу разместите иконку корзины пользователя.
  // ● Иконка корзины должна вести на страницу корзины.
  // ● Нужно также добавить индикатор количества товаров в корзине рядом с
  // иконкой корзины.
  const count = useSelector((state) => state.counter.counter);
  console.log(count);
  return (
    <header className={styles.container}>
      <NavLink to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </NavLink>
      <nav className={styles.nav_container}>
        <NavLink to="/" className={styles.navlink}>
          Main Page
        </NavLink>
        <NavLink to="/categories/all" className={styles.navlink}>
          Categories
        </NavLink>
        <NavLink to="/allProducts" className={styles.navlink}>
          All products
        </NavLink>
        <NavLink to="/allSales" className={styles.navlink}>
          All sales
        </NavLink>
      </nav>
      <NavLink to="/cartPage" className={styles.navlink_basket}>
        <img
          src={EmptyBasket}
          alt="empty Basket"
          className={styles.empty_basket}
        />
        {count !== 0 && <div className={styles.badge}>{count}</div>}
      </NavLink>
    </header>
  );
}

export default Header;
