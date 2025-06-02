import ProductElementList from "../Main/ProductElementList";
import Basket from "./Basket";

const SectionBottom = ({ data }) => {
  return (
    <section className="section-bottom container">
      <div className="global-products-box">
        {data.categories.map((element, index) => {
          if (element.meals.length !== 0) {
            return (
              <div key={index} className="type-of-product-box">
                <h2>{element.name}</h2>
                <ProductElementList element={element} />
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
