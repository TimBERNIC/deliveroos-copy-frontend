const SectionTop = ({ data }) => {
  return (
    <section className="section-top">
      <div>
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div className="section-top-img-box">
        <img src={data.restaurant.picture} alt="Bon déjeuner végétarien" />
      </div>
    </section>
  );
};

export default SectionTop;
