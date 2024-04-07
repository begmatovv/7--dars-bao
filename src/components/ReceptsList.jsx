import { Link } from "react-router-dom";

const ReceptsList = ({ recepts }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
      {recepts.map((recept) => {
        return (
          <div key={recept.id} className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                src={recept.image}
                alt="Shoes"
                className=" h-[200px] w-full object-cover md:h-auto  "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl">{recept.name}</h2>
              <span  className="">{recept.time}</span>
              <p className="line-clamp-3">{recept.body}</p>
              <div className="card-actions">
                <Link
                  to={`/singleRecept/${recept.id}`}
                  className="btn btn-sm  md:btn-md btn-primary w-full"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReceptsList;
