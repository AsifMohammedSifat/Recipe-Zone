import PropTypes from "prop-types";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { loop } from "../utilities/forLoop";

const Recipe = ({ recipe,handleWants }) => {
  return (
    <div className="border-green-500">
      <div className="p-2 m-2 bg-white border border-gray-200 rounded shadow">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-auto rounded-3xl p-2"
        />
        <h2 className="text-sm md:text-lg title-font">
          {recipe.name.slice(0, 13)}
        </h2>
        <div className="flex text-yellow-500">
          <h1 className="font-sans text-gray-500">Rating:</h1>
          {loop(<MdOutlineStarPurple500 />, recipe.rating).map((star, idx) => (
            <span key={idx}>{star}</span>
          ))}{" "}
        </div>

        <hr />
        <h1 className="title-font">Ingradients:{recipe.ingredients.length}</h1>
        <ul className="list-disc pl-5">
          {recipe.ingredients.slice(0, 2).map((ingredient, idx) => (
            <li
              className="text-[8px] md:text-[16px] font-sans text-gray-500"
              key={idx}
            >
              {ingredient.slice(0, 18)}
            </li>
          ))}
          <hr />
        </ul>
        <div className="font-sans text-gray-500 lg:flex text-[15px] md:text-[15px]">
            
          <div className="flex justify-start items-center lg:pr-2">
            <IoIosTimer />
            {recipe.cookTimeMinutes} Minutes
          </div>

          <div className="flex justify-start items-center lg:ml-20">
            <FaFireAlt /> {recipe.caloriesPerServing} Calories
          </div>
        </div>
        <button onClick={()=>handleWants(recipe)} className="rounded-2xl p-2 mt-2 hover:text-white bg-green-500 text-black font-bold text-[10px] md:text-[15px] lg:w-2/5">Want to Cook</button>
      </div>      
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWants:PropTypes.func,
};

export default Recipe;
