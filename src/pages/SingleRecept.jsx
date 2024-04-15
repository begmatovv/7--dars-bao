import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SingleRecept = () => {
  const { id } = useParams();
  const { data: recept } = useFetch("http://localhost:3000/recepts/" + id);
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
            <span className=" p-1 rounded-md text-white bg-red-500">
              {recept.time}
            </span>
          </div>
          <span className="flex gap-2 justify-start items-center">
            Ingredients:{recept.ingredients},
          </span>
          <p>{recept.body}</p>
        </div>
      )}
    </div>
  );
};

export default SingleRecept;
