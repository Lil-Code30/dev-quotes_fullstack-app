import { addNewQuote } from "../api";
import useStore from "../store/store";

const AddQuoteForm = () => {
  const resData = useStore((state) => state.resData);
  const token = resData?.jsonToken;
  const username = resData?.username;
  const handleSubmit = (formData) => {
    const message = formData.get("quote");
    const author = formData.get("author");

    const newQuote = { message, author, username };
    console.log(token, username);
    addNewQuote(newQuote, token);
  };

  return (
    <form
      action={handleSubmit}
      className="max-w-sm mx-auto p-3 my-5 border rounded-lg border-gray-700 shadow-lg"
    >
      <label
        htmlFor="quote"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Enter Your Quote
      </label>
      <textarea
        id="quote"
        name="quote"
        rows="4"
        required
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="quotes goes here..."
      ></textarea>
      <label
        htmlFor="author"
        className="block mb-2 mt-3  text-sm font-medium text-gray-900 dark:text-white"
      >
        Author
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </span>
        <input
          type="text"
          id="author"
          name="author"
          required
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Bonnie Green"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add new Quote
      </button>
    </form>
  );
};

export default AddQuoteForm;
