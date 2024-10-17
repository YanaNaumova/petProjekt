import Logo from "../../assets/icons/logo.svg";
import EmptyBasket from "../../assets/icons/basketEmpty.svg";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart.cart);

  const count = cart.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
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
        <NavLink to="/products/all" className={styles.navlink}>
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
