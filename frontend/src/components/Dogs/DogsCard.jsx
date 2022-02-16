import { useContext } from "react";
import { useState } from "react";

import { CardContext } from "../../Contexts/CartContext";

const DogsCard = (props) => {
  const { id, name, breed, description, price, imageUrl } = props;
  const {addToCart, setTotal} = useContext(CardContext);
  const [isAdded, setAdded] = useState(false);
  const handleClick = () => {
      setAdded(true);
      const newItems = {
          name: name,
          price: price,
          imageUrl: imageUrl
      };
      addToCart((item) => [...item, newItems]);
      setTotal((total) => (total += parseInt(price)));
  };
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p> {name} </p>
          <p> {breed} </p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={`err`} />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded ? (
            <button disabled className="dogs-btn-disabled">ADDED</button>
        ) : (
            <button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>  
        )}
      </section>
    </>
  );
};

export default DogsCard;


