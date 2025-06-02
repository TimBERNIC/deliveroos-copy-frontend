const ProductPicture = ({ elementMeals }) => {
  return (
    <>
      {elementMeals.picture && (
        <div className="main-product-img-box">
          <img src={elementMeals.picture} alt="image de repas" />
        </div>
      )}
    </>
  );
};

export default ProductPicture;
