import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg w-[100%] h-[200px]"
          src={ CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes </h4>
      </div>
    );
  };

//Higher Order Component 

// Input  - RestaurantCard => RestaurantCardPromoted

  export default RestaurantCard;