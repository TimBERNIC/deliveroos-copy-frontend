import "./App.css";
import "./assets/Header/Header.css";
import Header from "./assets/Header/Header";
import "./assets/Main/Main.css";
import "./assets/Footer/Footer.css";
import Footer from "./assets/Footer/Footer";
import axios from "axios";

import { useState, useEffect } from "react";
import ProductElment from "./assets/Main/ProductElement";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(data.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroos-copy-server--cp75xnbbqn97.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header
        title="deliveroo"
        icon="https://lereacteur-react-deliveroo.netlify.app/favicon.ico"
      />
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <section className="section-top">
              <div>
                <h1>{data.restaurant.name}</h1>
                <p>{data.restaurant.description}</p>
              </div>
              <div className="section-top-img-box">
                <img
                  src={data.restaurant.picture}
                  alt="Bon déjeuner végétarien"
                />
              </div>
            </section>
            <section className="section-bottom container">
              <div className="global-products-box">
                {data.categories.map((element) => {
                  return (
                    <div className="type-of-product-box">
                      <h2>{element.name}</h2>
                      <ProductElment element={element} />
                    </div>
                  );
                })}
              </div>
              <div className="basket"></div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
