import { FcPrevious } from "react-icons/fc";
import ProductDescription from "./ProductDescription";
import ProductPicture from "./ProductPicture";
import ProductPrice from "./ProductPrice";

const ProductElement = ({ elementMeals, basketTab, setBasketTab }) => {
  return (
    <div
      onClick={() => {
        const copy = [...basketTab];
        const foundArticle = copy.find((copyElement) => {
          return elementMeals.id === copyElement.id;
        });
        if (foundArticle) {
          foundArticle.quantity++;
        } else {
          copy.push({
            ...elementMeals,
            quantity: 1,
          });
        }
        setBasketTab(copy);
      }}>
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
