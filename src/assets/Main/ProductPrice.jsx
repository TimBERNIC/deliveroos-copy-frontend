const ProductPrice = ({ elementMeals }) => {
  return (
    <div className="price-box">
      <p className="price">{elementMeals.price} €</p>
      <div className="populaire">
        {elementMeals.popular && (
          <p>
            <span>★</span> Populaire
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
