import ProductElement from "./ProductElement";
const GlobalProduct = ({ element, index }) => {
  return (
    <div className="type-of-product-box" key={index}>
      <h2>{element.name}</h2>
      <div className="products-detail-box">
        {element.meals.map((elementMeals, index) => {
          return <ProductElement elementMeals={elementMeals} index={index} />;
        })}
      </div>
    </div>
  );
};

export default GlobalProduct;
