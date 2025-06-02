import ProductDescription from "./ProductDescription";
import ProductPicture from "./ProductPicture";
import ProductPrice from "./ProductPrice";

const ProductElement = ({ elementMeals, index }) => {
  return (
    <div key={index}>
      <article>
        <h3>{elementMeals.title}</h3>
        <ProductDescription elementMeals={elementMeals} />
        <ProductPrice elementMeals={elementMeals} />
      </article>
      <ProductPicture elementMeals={elementMeals} />
    </div>
  );
};

export default ProductElement;
