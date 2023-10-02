import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [reslist, setReslist] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = reslist.filter((res) => res.data.avgRating > 4);
            setReslist(filterlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
