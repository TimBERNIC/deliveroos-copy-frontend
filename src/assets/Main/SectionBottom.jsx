import Basket from "./Basket";
import GlobalProduct from "./Products/GlobalProduct";

const SectionBottom = ({ data }) => {
  return (
    <section className="section-bottom container">
      <div className="global-products-box">
        {data.categories.map((element, index) => {
          if (element.meals.length !== 0) {
            return <GlobalProduct element={element} index={index} />;
          }
        })}
      </div>
      <Basket />
    </section>
  );
};

export default SectionBottom;
