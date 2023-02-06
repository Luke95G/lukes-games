import axios from "axios";

export const gamesInstanceAPI = axios.create({
  baseURL: "https://lukes-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesInstanceAPI.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const getOneReview = () => {
  return gamesInstanceAPI.get(`/reviews/${review_id}`).then((review) => {
    console.log(review.data.review[0]);
    return review.data.review[0];
  });
};
