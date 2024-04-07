import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleRecept = () => {
  const { id } = useParams();
  const [recept, setRecept] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/recepts/" + id)
      .then((data) => {
        return data.json();
      })
      .then((recepts) => {
        setRecept(recepts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {recept && (
        <div>
          <img
            src={recept.image}
            alt=""
            className="w-full h-80 object-cover rounded mb-5 "
          />
          <div>
            <h1 className="font-bold text-2xl mb-5">{recept.name}</h1>
            <span className=" p-1 rounded-md text-white bg-red-500">{recept.time}</span>
          </div>
          <span className="flex gap-2 justify-start text-white items-center">
            Ingredients:
            {recept.ingredients.map((ingredient) => (
              <span className="  rounded-lg p-3 bg-green-500">
                {ingredient}
              </span>
            ))}
          </span>
          <p>{recept.body}</p>
        </div>
      )}
    </div>
  );
};

export default SingleRecept;
