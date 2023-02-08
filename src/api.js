import axios from "axios";

export const gamesInstanceAPI = axios.create({
  baseURL: "https://lukes-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesInstanceAPI.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const getOneReview = (review_id) => {
  return gamesInstanceAPI.get(`/reviews/${review_id}`).then((review) => {
    return review.data.review[0];
  });
};

export const getCommentByReviewId = (review_id) => {
  return gamesInstanceAPI
    .get(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data.comments;
    });
};

export const patchReviewVotes = (review_id, inc_votes) => {
  return gamesInstanceAPI
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then((response) => {
      return response.data.review;
    });
};
