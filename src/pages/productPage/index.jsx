import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/slices/productSlice";
import { fetchCategory } from "../../redux/slices/categorySlice";

import RoutsBtn from "../../components/routsBtn";
import { useState } from "react";
import { Button } from "antd";
import { addProductToCart } from "../../redux/slices/cartSlice";
import CounterBtn from "../../components/counterBtn";

function ProductPage() {
  const { productId } = useParams();
  const [isShow, setIshow] = useState(false);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);

  const {
    data: categoryData,
    status: categoryStatus,
    error: categoryError,
  } = useSelector((state) => state.category);

  let title = product.length > 0 ? product[0].title : "";
  const obj = [
    {
      link: "/",
      title: "Main page",
    },
    {
      link: "/categories/all",
      title: "Categories",
    },
    {
      link: `/categories/${categoryData.category.id}`,
      title: categoryData.category.title,
    },
    {
      link: `/products/${productId}`,
      title: title,
    },
  ];

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (status === "succeeded" && product.length > 0) {
      const categoryId = product[0]?.categoryId;
      if (categoryId && categoryStatus === "idle") {
        dispatch(fetchCategory(categoryId));
      }
    }
  }, [status, categoryStatus, product, dispatch]);

  function plusOneProduct() {
    setCount(count + 1);
  }

  function minusOneProduct() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function addToCart() {
    const selectedProduct = product[0];
    const finalCount = count < 1 ? 1 : count;
    dispatch(
      addProductToCart({
        product: selectedProduct,
        count: finalCount,
      })
    );
  }

  if (status === "failed") return <h1>{error}Error</h1>;
  if (status === "loading") return <h1>loading ...</h1>;

  return (
    status === "succeeded" && (
      <div className={styles.productPage_container}>
        <RoutsBtn obj={obj} />
        {product.map((element) => {
          return (
            <div className={styles.card_container} key={element.id}>
              <div className={styles.img_container}>
                <img
                  src={element.image}
                  alt={element.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.description_card_container}>
                <p className={styles.header}>{element.title}</p>
                {element.discont_price ? (
                  <div className={styles.price_container}>
                    <p className={styles.discount_price}>
                      ${element.discont_price}
                    </p>
                    <p className={styles.price}>${element.price}</p>
                    <div className={styles.badge}>sale</div>
                  </div>
                ) : (
                  <div className={styles.price_container}>
                    <p className={styles.price}>${element.price}</p>
                  </div>
                )}
                <div className={styles.btn_container}>
                  <CounterBtn
                    minusOneProduct={minusOneProduct}
                    count={count}
                    plusOneProduct={plusOneProduct}
                  />
                  <Button
                    type="primary"
                    className={styles.addToCart}
                    onClick={addToCart}
                  >
                    Add to cart
                  </Button>
                </div>
                <div className={styles.description}>
                  <h3 className={styles.description_header}>Description</h3>
                  <p
                    className={styles.description_text}
                    style={{
                      overflow: isShow ? "visible" : "hidden",
                      maxHeight: isShow ? "none" : "227px",
                    }}
                  >
                    {element.description}
                  </p>
                  <a
                    href="#"
                    className={styles.link}
                    onClick={() => setIshow(!isShow)}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default ProductPage;
