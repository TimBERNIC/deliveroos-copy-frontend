import { useEffect } from "react";

const Basket = ({ basketTab, setBasketTab }) => {
  const totalBasketPrice = basketTab.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total;
  }, 0);

  const deliveryCosts = 2.5;

  return (
    <div className="basket">
      <button>Valider mon panier</button>

      {basketTab.length === 0 ? (
        <div className="empty-basket-box">Votre panier est vide</div>
      ) : (
        <div className="product-choice-list">
          {basketTab.map((element, index) => {
            return (
              <article key={index} className="article-box">
                <div className="article-counter-box">
                  <button
                    onClick={() => {
                      console.log(element);
                      const copyTab = [...basketTab];
                      if (copyTab[index].quantity === 1) {
                        copyTab.splice(index, 1);
                        setBasketTab(copyTab);
                        return;
                      }
                      copyTab[index].quantity--;
                      copyTab[index].total =
                        copyTab[index].price * copyTab[index].quantity;
                      setBasketTab(copyTab);
                    }}>
                    -
                  </button>
                  <div className="counter-box">
                    {element && element.quantity}
                  </div>
                  <button
                    onClick={() => {
                      const copyTab = [...basketTab];
                      copyTab[index].quantity++;
                      copyTab[index].total =
                        copyTab[index].price * copyTab[index].quantity;

                      setBasketTab(copyTab);
                      console.log(element.total);
                    }}>
                    +
                  </button>
                </div>
                <div className="basket-name-element-box">
                  {element && element.title}
                </div>
                <div className="total-price-element-box">
                  {element && element.total.toFixed(2)} €
                </div>
              </article>
            );
          })}
          <div className="details-basket">
            <div className="total-article-box">
              <span>Sous-total</span>
              <span>{totalBasketPrice} €</span>
            </div>
            <div className="delivery-costs-box">
              <span>Frais de Livraison</span>
              <span>{deliveryCosts} €</span>
            </div>
          </div>
          <div className="total-price-box">
            <span>Total</span>
            <span>{totalBasketPrice + deliveryCosts} €</span>
          </div>

          {/* ICI */}
        </div>
      )}
    </div>
  );
};

export default Basket;
