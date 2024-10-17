import { Button } from "antd";
import styles from "./styles.module.css";
import { addProductToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductCard({ id, price, discont_price, image, title }) {
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === id);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  function addProduct(e) {
    e.preventDefault();
    const existingProduct = cart.find((item) => item.id === id);
    const newCount = existingProduct ? existingProduct.count + 1 : 1;
    dispatch(addProductToCart({ product: product, count: newCount }));
  }

  let sale = Math.floor(((price - discont_price) / price) * 100);
  return sale !== 100 ? (
    <Link key={id} to={`/products/${id}`} className={styles.link}>
      <div className={styles.card_container}>
        <div className={styles.img_container}>
          <img src={image} alt={title} className={styles.img} />
          <p className={styles.sale}>-{sale}%</p>
        </div>
        <div className={styles.text_container}>
          <p className={styles.card_title}>{title}</p>
          <div className={styles.price_container}>
            <p className={styles.discont_price}>{discont_price}$</p>
            <p className={styles.price}>${price}</p>
          </div>
        </div>
        <Button className={styles.btn} type="primary" onClick={addProduct}>
          Add to cart
        </Button>
      </div>
    </Link>
  ) : (
    <Link key={id} to={`/products/${id}`} className={styles.link}>
      <div className={styles.card_container}>
        <div className={styles.img_container}>
          <img src={image} alt={title} className={styles.img} />
        </div>
        <div className={styles.text_container}>
          <p className={styles.card_title}>{title}</p>
          <div className={styles.price_container}>
            <p className={styles.price_without_price}>${price}</p>
          </div>
        </div>
        <Button className={styles.btn} type="primary" onClick={addProduct}>
          Add to cart
        </Button>
      </div>
    </Link>
  );
}

export default ProductCard;
