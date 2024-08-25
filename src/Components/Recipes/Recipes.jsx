import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wants, setWants] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [time, setTime] = useState(0);
  const [cal, setCal] = useState(0);

  const handleWants = (obj) => {
    // console.log(obj);
    // console.log(wants);
    const newArray = [...wants];
    newArray.push(obj);
    setWants(newArray);
  };

  useEffect(() => {
    // const totalTime = cooks.reduce((acc, cook) => acc + cook.prepTimeMinutes, 0);
    // const totalCal = cooks.reduce((acc, cook) => acc + cook.caloriesPerServing, 0);    
    // setTime(totalTime);
    // setCal(totalCal);
    
    cooks.map((cook) => {
      let newTime = cook.prepTimeMinutes;
      let newCal = cook.caloriesPerServing;
      console.log(newTime, newCal);
      setTime(newTime + cook.prepTimeMinutes);
      setCal(newCal + cook.caloriesPerServing);
    });

  }, [cooks]);

  const handleCheckBox = (event, want) => {
    // console.log(event);
    // console.log(want);

    //   cooks.map((cook) => {
    //     let newTime = cook.prepTimeMinutes;
    //     let newCal = cook.caloriesPerServing;
    //     console.log(newTime,newCal);
    //     setTime(newTime + cook.prepTimeMinutes);
    //     setCal(newCal + cook.caloriesPerServing);
    //   });

    const id = want.id;
    const newArray = [...cooks];
    newArray.push(want);
    setCooks(newArray);
    const updateArray = wants.filter((want) => want.id != id);
    setWants(updateArray);

    event.target.checked = false;
  };

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-2xl md:text-5xl font-bold brand-font text-center">
        Our Recipes
      </h1>
      <p className="text-center">
        This is summertime in a bowl! Spicy shrimp with all the delicious heat,
        smoke, and sweetness we want, alongside a fresh peach and cucumber
        salad.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              handleWants={handleWants}
              recipe={recipe}
            ></Recipe>
          ))}
        </div>

        {/* right  side div*/}
        <div className="sticky top-0 h-screen overflow-y-auto">
          <div>
            <h1 className="title-font text-center text-3xl">
              Want to Cook:{wants.length}
            </h1>
            <div className="overflow-x-auto">
              {/* section - 01 */}
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="font-bold text-black">
                    <th>Status</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>

                <tbody>
                  {/* row 1 */}
                  {wants.map((want, idx) => (
                    <tr key={idx}>
                      <td>
                        <label>
                          <input
                            type="checkbox"
                            onChange={(e) => handleCheckBox(e, want)}
                            className="checkbox border border-black"
                          />
                        </label>
                      </td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={want.image} alt={want.name + "image"} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{want.name}</div>
                            <div className="text-sm opacity-50">
                              {want.cuisine}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{want.cookTimeMinutes}</td>
                      <td>{want.caloriesPerServing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr className="text-green-600 text-3xl" />
              {/* section-02  */}

              <h1 className="title-font text-center text-3xl mt-5">
                Currently cooking: {cooks.length}
              </h1>
              <hr />

              <table className="table">
                {/* head */}
                <thead>
                  <tr className="font-bold text-black">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>

                <tbody>
                  {/* row 1 */}
                  {cooks.map((want, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={want.image} alt={want.name + "image"} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{want.name}</div>
                            <div className="text-sm opacity-50">
                              {want.cuisine}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{want.cookTimeMinutes}</td>
                      <td>{want.caloriesPerServing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-black font-sans text-[10px] md:text-[15px]">
                Total Time: {time} Minutes
                <hr />
                Total Calories: {cal} calories
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
