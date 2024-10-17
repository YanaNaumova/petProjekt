import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../redux/slices/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import RoutsBtn from "../../components/routsBtn";
import {
  setPriceFilter,
  setSortBy,
  toggleCheckbox,
  applyFilters,
  resetFilters,
} from "../../redux/slices/filterSlice";
import CustomHeader from "../../components/customHeader";
import FilterElement from "../../components/filterElement";
import { useLocation } from "react-router-dom";

function CategoryPage() {
  const { categoryId } = useParams();
  const [inputValue, setInputValue] = useState({
    priceFrom: "",
    priceTo: "",
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const { data, status, error } = useSelector((state) => state.category);
  const filterData = useSelector((state) => state.filter);

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
      link: `/categories/${categoryId}`,
      title: data.category?.title || "",
    },
  ];

  useEffect(() => {
    dispatch(resetFilters());
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [dispatch, categoryId]);

  useEffect(() => {
    const priceFrom = Number(inputValue.priceFrom) || 0;
    const priceTo = Number(inputValue.priceTo) || Infinity;
    dispatch(setPriceFilter({ priceFrom, priceTo }));
    dispatch(applyFilters({ data: data.data }));
  }, [
    inputValue,
    filterData.sortBy,
    filterData.isChecked,
    data.data,
    dispatch,
  ]);

  if (status === "failed") return <h1>{error}Error</h1>;
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
    status === "succeeded" && (
      <div className={styles.categoryPage_container}>
        <RoutsBtn obj={obj} />
        <CustomHeader title={data.category.title} />
        <FilterElement
          onChangeInput={onChangeInput}
          onChangeCheckbox={onChangeCheckbox}
          handleChange={handleChange}
          valuepriceFrom={inputValue.priceFrom}
          valuepriceTo={inputValue.priceTo}
        />
        <div className={styles.cards_container}>
          {filterData.data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                price={item.price}
                discont_price={item.discont_price}
                image={item.image}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    )
  );
}

export default CategoryPage;
