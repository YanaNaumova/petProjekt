import styles from "./styles.module.css";
import ProductCard from "../../components/productCard";
import RoutsBtn from "../../components/routsBtn";
import CustomHeader from "../../components/customHeader";
import FilterElement from "../../components/filterElement";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  setPriceFilter,
  setSortBy,
  toggleCheckbox,
  applyFilters,
  resetFilters,
} from "../../redux/slices/filterSlice";
import { useLocation } from "react-router-dom";

function DiscountedItemsPage() {
  const { discountedProducts, status, error } = useSelector(
    (state) => state.products
  );

  const [inputValue, setInputValue] = useState({
    priceFrom: "",
    priceTo: "",
  });

  const obj = [
    {
      link: "/",
      title: "Main page",
    },
    {
      link: `/allSales`,
      title: "All Sales",
    },
  ];

  const filterData = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetFilters());
  }, [location, dispatch]);

  useEffect(() => {
    const priceFrom = Number(inputValue.priceFrom) || 0;
    const priceTo = Number(inputValue.priceTo) || Infinity;
    dispatch(setPriceFilter({ priceFrom, priceTo }));
    dispatch(applyFilters({ data: discountedProducts }));
  }, [
    inputValue,
    discountedProducts,
    filterData.sortBy,
    filterData.isChecked,
    dispatch,
  ]);

  if (status === "failed") return <h1>{error}</h1>;
  if (status === "loading") return <h1>loading ...</h1>;

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onChangeCheckbox = (e) => {
    dispatch(toggleCheckbox());
  };

  const handleChange = (value) => {
    dispatch(setSortBy(value));
  };

  return (
    <div className={styles.discountedItemsPage_container}>
      <RoutsBtn obj={obj} />
      <FilterElement
        onChangeInput={onChangeInput}
        onChangeCheckbox={onChangeCheckbox}
        handleChange={handleChange}
        valuepriceFrom={inputValue.priceFrom}
        valuepriceTo={inputValue.priceTo}
      />
      <CustomHeader title="Discounted items" />
      <div className={styles.cards_container}>
        {status === "succeeded" &&
          filterData.data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                price={product.price}
                discont_price={product.discont_price}
                image={product.image}
                title={product.title}
              />
            );
          })}
      </div>
    </div>
  );
}

export default DiscountedItemsPage;
