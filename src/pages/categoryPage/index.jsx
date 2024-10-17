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
  //     Переход на страницу категории при клике на категорию
  // Настройка роутинга:
  // ● Используйте `react-router-dom` для настройки маршрутов. В компоненте
  // `App.js` добавьте маршрут для страницы категории, который будет включать
  // параметр `id` категории, например, `/categories/:id`.
  // Ссылка на страницу категории:
  // ● Оберните каждую карточку категории в компонент `Link` из
  // `react-router-dom`.
  // ● При клике на карточку будет происходить перенаправление на страницу
  // категории, URL которой будет включать идентификатор категории.
  //   Создание компонента страницы категории:
  // ● Создайте отдельный компонент для страницы категории.
  // ● Этот компонент будет отвечать за отображение продуктов, относящихся к
  // выбранной категории.
  // ● В левом верхнем углу этого компонента тоже отображается текущий маршрут
  // (на всех страницах кроме главной, корзины и 404 должен отображаться
  // маршрут).
  //   Получение данных о продуктах:
  // ● Данные о товарах определенной категории необходимо получать с сервера.
  // Отображение продуктов:
  // ● Каждый продукт отображается в виде отдельной карточки товара.
  // ● При наведении на карточку товара появляется кнопка добавления товара в
  // корзину.
  // ● Если на товар действует скидка, то это должно отображаться на карточке.
  // ● Товары можно отфильтровать по новизне, цене.

  const { categoryId } = useParams();
  const [inputValue, setInputValue] = useState({
    priceFrom: "",
    priceTo: "",
  });

  const dispatch = useDispatch();
  const location = useLocation();
  const { data, status, error } = useSelector((state) => state.category);
  const filterData = useSelector((state) => state.filter);
  console.log(data.data);
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
