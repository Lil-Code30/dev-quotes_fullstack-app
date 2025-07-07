import axios from "axios";

const BASE_URL = "http://localhost:8000/quotes";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//api to fetch all quotes
export const getAllQuotes = async () => {
  try {
    const res = await api.get(`/allquotes`);

    return res.data;
  } catch (err) {
    console.log(`Error when fetching all quotes : ${err.message}`);
  }
};

// api to add a new quote
export const addNewQuote = async (newQuote) => {
  try {
    const res = await api.post("/newquote", newQuote);

    return res;
  } catch (err) {
    console.log(`Error when add a new quote : ${err.message}`);
  }
};

// api to edit a quote
export const editQuote = async (quoteID, editQuote) => {
  try {
    if (!quoteID) {
      console.log("Please enter the quote ID");
    }
    const res = await api.put(`/${quoteID}`, editQuote);

    return res;
  } catch (err) {
    console.log(`Error when deleting the quote : ${err.message}`);
  }
};
// api to delete a quote
export const deleteQuote = async (quoteID) => {
  try {
    if (!quoteID) {
      console.log("Please enter the quote ID");
    }
    const res = await api.delete(`/${quoteID}`);

    return res;
  } catch (err) {
    console.log(`Error when deleting the quote : ${err.message}`);
  }
};

//api to get a quote with an id
// export const getQuoteById = async (quoteID) => {
//   try {
//     if (!quoteID) {
//       console.log("Please enter the quote ID");
//     }
//     const res = await api.get(`/${quoteID}`);

//     return res;
//   } catch (err) {
//     console.log(`Error when fetching the quote : ${err.message}`);
//   }
// };
