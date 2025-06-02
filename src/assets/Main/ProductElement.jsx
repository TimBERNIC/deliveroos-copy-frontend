import { FaStar } from "react-icons/fa";

const ProductElment = ({ element }) => {
  return (
    <div className="products-detail-box">
      {element.meals.map((elementMeals) => {
        return (
          <div>
            <article>
              <h3>{elementMeals.title}</h3>
              {elementMeals.description && (
                <p className="produt-description">{elementMeals.description}</p>
              )}

              <div className="price-box">
                <p className="price">{elementMeals.price} €</p>
                <p className="populaire">
                  {elementMeals.popular && (
                    <p>
                      <span>★</span> Populaire
                    </p>
                  )}
                </p>
              </div>
            </article>
            {elementMeals.picture && (
              <div className="main-product-img-box">
                <img src={elementMeals.picture} alt="image de repas" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductElment;
