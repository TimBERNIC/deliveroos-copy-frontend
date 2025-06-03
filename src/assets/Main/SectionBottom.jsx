import Basket from "./Basket";
import GlobalProduct from "./Products/GlobalProduct";

const SectionBottom = ({ data, basketTab, setBasketTab }) => {
  return (
    <section className="section-bottom container">
      <div className="global-products-box">
        {data.categories.map((element, index) => {
          if (element.meals.length !== 0) {
            return (
              <GlobalProduct
                element={element}
                key={index}
                basketTab={basketTab}
                setBasketTab={setBasketTab}
              />
            );
          }
        })}
      </div>
      <Basket basketTab={basketTab} setBasketTab={setBasketTab} />
    </section>
  );
};

export default SectionBottom;
