import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo == null) return  <Shimmer /> ;

    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //Dispatch an action 
        dispatch(addItem(item))
    }

    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <h2 className="font-bold text-lg">{resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h2>
            <h2>{resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
            <ul>
                {resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item) => (
                    <li key={item.card.info.id} className="py-2">
                        {item.card.info.name} - {" Rs."}
                        {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                        <button className="font-bold p-1 bg-gray-400 cursor-pointer mx-2"
                        onClick={() => handleAddItem(item)}>
                            ADD +
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;