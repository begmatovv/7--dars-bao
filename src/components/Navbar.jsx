import { Link } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
const Navbar = () => {
  // const themes = {
  //   winter: "winter",
  //   dracula: "dracula",
  // };
  // function darkModeFromLocalStorage() {
  //   return localStorage.getItem("mode") || themes.winter;
  // }

  // function Navbar() {
  //   const [theme, setTheme] = useState(darkModeFromLocalStorage());
  //   const handleClick = () => {
  //     const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
  //     setTheme(newTheme);
  //   };
  // }

  // useEffect(() => {
  //   documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("mode", theme);
  // }, [theme]);
  return (
    <div className="navbar mb-10">
      <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center ">
        <Link className="btn btn-primary btn-lg font-bold text-2xl px-2" to="/">
          <span>Home</span>
        </Link>
        {/* <div className="flex gap-10 items-center">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onClick={handleClick}
              defaultChecked={theme == "winter" ? false : true}
            />
            <IoMoonOutline className=" swap-on fill-current w-8 h-8 " />
            <IoSunnyOutline className="swap-off fill-current w-8 h-8" />
          </label>
        </div> */}
        <Link className="btn btn-secondary" to="/create">
          <span>Create page</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
