import { FaStar } from "react-icons/fa";
import ProductElement from "./ProductElement";

const ProductElementList = ({ element }) => {
  return (
    <div className="products-detail-box">
      {element.meals.map((elementMeals, index) => {
        return <ProductElement elementMeals={elementMeals} index={index} />;
      })}
    </div>
  );
};

export default ProductElementList;
