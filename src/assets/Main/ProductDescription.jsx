const ProductDescription = ({ elementMeals }) => {
  return (
    <>
      {elementMeals.description && (
        <p className="product-description">{elementMeals.description}</p>
      )}
    </>
  );
};

export default ProductDescription;
