import { Heart, Pencil, Trash } from "lucide-react";
import { deleteQuote, editQuote } from "../api";
import useStore from "../store/store";

const QuoteCard = ({ quote }) => {
  const { _id, message, author, likers } = quote;

  const resData = useStore((state) => state.resData);
  const token = resData?.jsonToken;

  //function to delete a quote
  const handleDeleteQuote = () => {
    deleteQuote(_id, token);
  };

  // function to edit a quote
  const handleEditQuote = (formData) => {
    const author = formData.get("author");
    const message = formData.get("quote");
    const newData = {
      message,
      author,
    };
    editQuote(_id, newData, token);
    document.getElementById(_id).close();
  };

  return (
    <>
      {/* dialog box to edit the selected post */}
      <dialog id={_id} className="modal ">
        <div className="bg-black/80 w-screen h-screen flex-center">
          <div className="modal-box">
            <button
              onClick={() => document.getElementById(_id).close()}
              className="btn btn-md btn-circle btn-ghost absolute text-red-600 right-2 top-2"
            >
              ✕
            </button>
            <h1 className="text-center text-3xl">Edit Quote</h1>
            <form
              action={handleEditQuote}
              className="max-w-sm mx-auto p-3 my-5 border rounded-lg border-gray-700 shadow-lg"
            >
              <label
                htmlFor="quote"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quote
              </label>
              <textarea
                id="quote"
                name="quote"
                rows="4"
                required
                defaultValue={message}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  defaultValue={author}
                  type="text"
                  id="author"
                  name="author"
                  required
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Quote
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="relative bg-gray-500 p-2 border rounded-lg flex flex-col">
        <div className="absolute -top-6">
          <img src="/images/icons8-quotes-50.png" alt="quote logo" />
        </div>
        <div className="pt-5 self-end flex-center gap-2">
          <button
            onClick={() => document.getElementById(_id).showModal()}
            title="Edit Quote"
            className="hover:cursor-pointer"
          >
            <Pencil className="fill-orange-400 size-5" />
          </button>
          <button
            onClick={handleDeleteQuote}
            title="Delete Quote"
            className="hover:cursor-pointer"
          >
            <Trash className="fill-red-600 size-5" />
          </button>
        </div>
        <p className="font-eb-garamond text-3xl py-3">{message}</p>
        <div className="mt-auto">
          <div
            className=" w-full h-[2px] max-w-6xl mx-auto "
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
            }}
          ></div>
          <div className="flex justify-between items-center my-3 ">
            <div className="flex items-center gap-2">
              <div>
                <img src="/images/icons8-user-48.png" alt="user logo" />
              </div>
              <p className="font-medium text-md">{author}</p>
            </div>
            <div className="flex-center gap-1 ">
              <span className="text-xl">{likers.length}</span>
              <Heart color="red" className="fill-red-500 size-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteCard;
