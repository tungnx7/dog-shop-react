import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../Contexts/CartContext";


const Cart = () => {
    const {myCart, total, addToCart, setTotal} = useContext(CardContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
    }
    const handleHome = () => {
        navigate("/");
    }
    return ( 
        <>
           <section className="cart-container">
               <div className="cart-header"> CHECKOUT: </div>
               <div className="cart-items">
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className="cart-item">
                                <img src={item.imageUrl} className='cart-item-img' alt="err" />
                                {item.name} : {item.price}$
                            </div>
                        )
                    })}
                    <div className="cart-total"> TOTAL: {total}$</div>
               </div>
               <button className="cart-checkout" onClick={handleCheckout}> DONE </button>
               <button className="cart-gohome" onClick={handleHome}> RETURN HOME</button>
           </section>
        </>
     );
}
 
export default Cart;
