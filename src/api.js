import axios from "axios";

export const gamesInstanceAPI = axios.create({
  baseURL: "https://lukes-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesInstanceAPI.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};
