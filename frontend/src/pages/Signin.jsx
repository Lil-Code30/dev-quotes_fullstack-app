import { useState, useEffect } from "react";
import { ErrorMessage } from "../components/Alerts";
import { createUser } from "../api";

const Signin = () => {
  const [errorMsg, setErrorMsg] = useState();
  const [resData, setResData] = useState(
    JSON.parse(localStorage.getItem("resData")) || []
  );

  const handleSignin = async (formData) => {
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const repeatePassword = formData.get("repeat-password");

    if (password !== repeatePassword) {
      setErrorMsg("The Two password must be similar");
      return;
    }
    const newUser = { email, username, password };
    console.log(newUser);
    const userData = await createUser(newUser);

    if (!userData) {
      console.log("error when creating a user");
      setErrorMsg("error when creating a user");
      return;
    }

    setResData(userData.data);
    setErrorMsg("");
  };

  useEffect(() => {
    localStorage.setItem("resData", JSON.stringify(resData));
  }, [resData]);

  return (
    <form action={handleSignin} className="max-w-sm mx-auto my-5">
      <div className="mb-5">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Repeat password
        </label>
        <input
          type="password"
          id="repeat-password"
          name="repeat-password"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="terms"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
      {errorMsg && <ErrorMessage message={errorMsg} />}
    </form>
  );
};

export default Signin;
