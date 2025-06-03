import "./App.css";
import "./assets/Header/Header.css";
import Header from "./assets/Header/Header";
import "./assets/Main/Main.css";
import "./assets/Footer/Footer.css";
import Footer from "./assets/Footer/Footer";
import axios from "axios";
import icon from "./assets/img/favicon.ico";
import { useState, useEffect } from "react";
import SectionTop from "./assets/Main/SectionTop";
import SectionBottom from "./assets/Main/SectionBottom";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basketTab, setBasketTab] = useState([]);

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
      <Header title="deliveroo" icon={icon} />
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <SectionTop data={data} />
            <SectionBottom
              data={data}
              basketTab={basketTab}
              setBasketTab={setBasketTab}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
