import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.item);

    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">cart</h1>

            { /* add clear cart button having function of handleClearCart
            const dispatch = useDispatch();
              handleClearCart = () => {
                dispatch(clearCart());
              } */  }

            { /* the <itemsList items={cartItems} 
                we have not made the item list which displays the items in a particular manner*/ } 
        </div>
    );
};

export default Cart;