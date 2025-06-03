import ProductDescription from "./ProductDescription";
import ProductPicture from "./ProductPicture";
import ProductPrice from "./ProductPrice";

const ProductElement = ({ elementMeals, basketTab, setBasketTab }) => {
  return (
    <div>
      <article
        onClick={() => {
          const copy = [...basketTab];
          const foundArticle = copy.find((copyElement) => {
            return elementMeals.id === copyElement.id;
          });
          if (foundArticle) {
            foundArticle.quantity++;
          } else {
            copy.push({
              title: elementMeals.title,
              price: Number(elementMeals.price),
              quantity: 1,
              total: Number(elementMeals.price),
              id: elementMeals.id,
            });
          }
          setBasketTab(copy);
        }}>
        <h3>{elementMeals.title}</h3>
        <ProductDescription elementMeals={elementMeals} />
        <ProductPrice elementMeals={elementMeals} />
      </article>
      <ProductPicture elementMeals={elementMeals} />
    </div>
  );
};

export default ProductElement;
