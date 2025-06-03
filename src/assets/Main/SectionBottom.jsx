import ProductElement from "./Products/ProductElement";
import Basket from "./Basket";

const SectionBottom = ({ data }) => {
  return (
    <section className="section-bottom container">
      <div className="global-products-box">
        {data.categories.map((element, index) => {
          if (element.meals.length !== 0) {
            return (
              <div key={element.name + index} className="type-of-product-box">
                <h2>{element.name}</h2>
                <div className="products-detail-box">
                  {element.meals.map((elementMeals, index) => {
                    return (
                      <ProductElement
                        elementMeals={elementMeals}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
      <Basket />
    </section>
  );
};

export default SectionBottom;
