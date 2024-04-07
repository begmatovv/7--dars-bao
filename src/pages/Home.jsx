import React, { useEffect ,useState} from "react";
import ReceptsList from "../components/ReceptsList";
const Home = () => {
  const [recepts, setRecepts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/recepts")
      .then((data) => {
        return data.json();
      })
      .then((recepts) => {
        setRecepts(recepts);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div>
      {recepts && <ReceptsList recepts={recepts}/>}
    </div>
  );
};

export default Home;
