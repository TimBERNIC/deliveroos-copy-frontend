const ProductDescription = ({ elementMeals }) => {
  const formatString = (str) => {
    if (str.length < 60) {
      return str;
    } else {
      for (let i = 0; i < str.length; i++) {
        if (i > 60 && str[i] === " ") {
          return str.slice(0, i) + "...";
        }
      }
    }
  };
  return (
    <>
      {elementMeals.description && (
        <p className="product-description">
          {formatString(elementMeals.description)}
        </p>
      )}
    </>
  );
};

export default ProductDescription;
