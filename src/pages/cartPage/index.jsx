import styles from "./styles.module.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import AllShowButton from "../../components/allShowButon";
import {
  removeProductFromCart,
  increaseProductCount,
  decreaseProductCount,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import CounterBtn from "../../components/counterBtn";
import Close from "../../assets/icons/ic x.svg";
import ContactForm from "../../components/contactForm";
import { Link } from "react-router-dom";

function CartPage() {
  //   Создание компонента корзины:
  // ● Создайте отдельный компонент для страницы корзины.
  // ● Этот компонент будет отвечать за отображение всех товаров, добавленных в
  // корзину.
  // Получение данных о товарах в корзине:
  // ● Используйте глобальное состояние приложения (например, Redux) для
  // хранения информации о товарах в корзине.
  // ● В компоненте `CartPage` получите список товаров из глобального состояния.
  // Отображение товаров в корзине:
  // ● Каждая товарная позиция должна быть представлена карточкой с
  // изображением, названием, ценой, количеством и общей стоимостью.
  // ● Для изменения количества товаров добавьте кнопки.

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const items = cart.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const price = item.product.discont_price
      ? item.product.discont_price
      : item.product.price;
    return acc + price * item.count;
  }, 0);

  return (
    <div className={styles.cartPage_container}>
      <AllShowButton
        textTitle="Shopping cart"
        btnTitle="Back to the store"
        link="/allProducts"
      />

      <div className={styles.cart_container}>
        <div className={styles.cards_container}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className={styles.item_cart_container} key={item.product.id}>
                <img
                  src={item.product.image}
                  alt="Product"
                  className={styles.img}
                />
                <div className={styles.description}>
                  <div className={styles.header_container}>
                    <h3 className={styles.product_title}>
                      {item.product.title}
                    </h3>
                    <img
                      src={Close}
                      alt="X"
                      className={styles.remove_product}
                      onClick={() =>
                        dispatch(removeProductFromCart(item.product.id))
                      }
                    />
                  </div>
                  <div className={styles.btn_counter}>
                    <CounterBtn
                      minusOneProduct={() =>
                        dispatch(decreaseProductCount(item.product.id))
                      }
                      count={item.count}
                      plusOneProduct={() =>
                        dispatch(increaseProductCount(item.product.id))
                      }
                    />
                    <div className={styles.price_container}>
                      {item.product.discont_price ? (
                        <>
                          <div className={styles.discont_price}>
                            ${item.product.discont_price}
                          </div>
                          <div className={styles.price}>
                            ${item.product.price}
                          </div>
                        </>
                      ) : (
                        <div className={styles.discont_price}>
                          ${item.product.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyCart_conntainer}>
              <div className={styles.emptyCart}>
                Looks like you have no items in your basket currently.
              </div>
              <Link to="/">
                <Button className={styles.continue_shopping} type="primary">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
        <ContactForm items={items} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default CartPage;
