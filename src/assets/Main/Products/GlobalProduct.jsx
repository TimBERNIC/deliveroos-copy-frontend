import ProductElement from "./ProductElement";
const GlobalProduct = ({ element, basketTab, setBasketTab }) => {
  return (
    <div className="type-of-product-box">
      <h2>{element.name}</h2>
      <div className="products-detail-box">
        {element.meals.map((elementMeals) => {
          return (
            <ProductElement
              key={elementMeals.id}
              elementMeals={elementMeals}
              basketTab={basketTab}
              setBasketTab={setBasketTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GlobalProduct;
