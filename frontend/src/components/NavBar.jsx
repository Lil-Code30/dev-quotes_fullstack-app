import { NavLink, Link } from "react-router-dom";
import useStore from "../store/store";
import { useState, useEffect } from "react";

const NavBar = () => {
  const userCredentials = useStore((state) => state.resData);
  const SetUserCredentials = useStore((state) => state.setResData);
  const [isUserDropdownOpen, setIsUserDropDownOpen] = useState(false);

  const isEmpty = (obj) => !Object.keys(obj).length;

  useEffect(() => {
    localStorage.setItem("resData", JSON.stringify(userCredentials));
  }, [userCredentials]);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/images/icons8-quotes-50.png"
            className="h-8"
            alt="Devquotes Logo"
          />
          <span className="self-center text-3xl font-semibold font-caveat-brush whitespace-nowrap dark:text-white">
            DevQuotes
          </span>
        </Link>
        <div className="flex items-center md:order-2 gap-x-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!isEmpty(userCredentials) ? (
            <div className="relative">
              <button
                onClick={() => setIsUserDropDownOpen((prev) => !prev)}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/icons8-user-48.png"
                  alt="user photo"
                />
              </button>
              {isUserDropdownOpen && (
                <div className="z-50 absolute right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
                  {/* Profile data */}
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Username: @{userCredentials.username}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      Email: {userCredentials.email}
                    </span>
                    <button
                      onClick={() => SetUserCredentials({})}
                      type="button"
                      class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 w-full m"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">Login</Link>
              <Link to="/signin">Signin</Link>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink
              to="/"
              className={`block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:p-0  ${({
                isActive,
              }) => (isActive ? "text-blue-700" : "text-white")}`}
              aria-current="page"
            >
              Home
            </NavLink>

            <NavLink
              to="/favourites"
              className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${({
                isActive,
              }) => (isActive ? "text-blue-700" : "text-white")}`}
            >
              Favourites
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
