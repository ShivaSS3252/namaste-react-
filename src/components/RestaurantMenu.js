import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>Name of the Restaurant</h1>
      <h3>{name}</h3>
      <p>{cuisines.join(",")}</p>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards
          ? itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name}-
                {item.card.info.price || item.card.info.defaultPrice}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
