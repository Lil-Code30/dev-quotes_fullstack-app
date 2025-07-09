import axios from "axios";

const BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// create a newAccount
export const createUser = async (newUser) => {
  try {
    const res = await api.post("/auth/signin", newUser);

    return res;
  } catch (err) {
    console.log(`Error when created the user : ${err.message}`);
  }
};

// login
export const loginUser = async (user) => {
  try {
    const res = await api.post("/auth/login", user);
    return res;
  } catch (error) {
    console.log(`Error when login : ${error.message}`);
  }
};

//api to fetch all quotes
export const getAllQuotes = async () => {
  try {
    const res = await api.get(`/quotes/allquotes`);

    return res.data;
  } catch (err) {
    console.log(`Error when fetching all quotes : ${err.message}`);
  }
};

// api to add a new quote
export const addNewQuote = async (newQuote, token) => {
  try {
    const res = await api.post("/quotes/newquote", newQuote, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (err) {
    console.log(`Error when add a new quote : ${err.message}`);
  }
};

// api to edit a quote
export const editQuote = async (quoteID, editQuote, token) => {
  try {
    if (!quoteID) {
      console.log("Please enter the quote ID");
    }
    const res = await api.put(`/quotes/${quoteID}`, editQuote, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (err) {
    console.log(`Error when deleting the quote : ${err.message}`);
  }
};
// api to delete a quote
export const deleteQuote = async (quoteID, token) => {
  try {
    if (!quoteID) {
      console.log("Please enter the quote ID");
    }
    const res = await api.delete(`/quotes/${quoteID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
