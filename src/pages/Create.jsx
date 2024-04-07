import { useState } from "react";
import { toast } from "react-hot-toast";
function Create() {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      if (!ingredients.includes(ingredient)) {
        setIngredients((prev) => {
          return [...prev, ingredient];
        });
      } else {
        toast.error("Already has been added ");
      }
    } else {
      toast.error("Write an ingredient");
    }
    setIngredient("");
  };
  return (
    <div className="w-full ">
      <h1 className="text-3xl text-center font-bold mb-10">
        Create New Recipie
      </h1>

      <form className="flex items-center flex-col gap-5 ">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingredients:</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
            />
            <button onClick={addIngredient} className="btn btn-secondary">
              Add
            </button>
          </div>
          <div className="mt-1">
            <p>
              Ingredients:
              {ingredients.map((ing) => {
                return <span key={ing}>{ing},</span>;
              })}
            </p>
          </div>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Cooking Time</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image URL:</span>
          </div>
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Method</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>

        <button className="btn btn-secondary w-full max-w-xs">Submit</button>
      </form>
    </div>
  );
}

export default Create;
