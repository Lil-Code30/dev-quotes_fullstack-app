import { useState, useEffect } from "react";
import AddQuoteForm from "../components/AddQuoteForm";
import Loading from "../components/Loading";
import { getAllQuotes } from "../api";
import QuoteCard from "../components/QuoteCard";

const Home = () => {
  const [allQuotes, setAllQuotes] = useState([]);

  // useEffect to load all quotes
  useEffect(() => {
    const data = async () => {
      getAllQuotes().then((data) => setAllQuotes(data));
    };
    data();
  }, [allQuotes]);

  return (
    <main className="px-2 my-5">
      <AddQuoteForm />
      <h1 className="mb-3 mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
        <span className="bg-clip-text  text-transparent bg-gradient-to-b from-gray-300 via-gray-700 to-white">
          All Dev Quotes
        </span>
      </h1>
      <div
        className=" w-full h-px max-w-6xl mx-auto "
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
        }}
      ></div>
      <section>
        {allQuotes.length === 0 ? (
          <Loading />
        ) : (
          <div className="my-3 mt-8 grid gap-5 grid-cols-2 md:grid-cols-3">
            {allQuotes.map((quote) => (
              <QuoteCard key={quote._id} quote={quote} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
