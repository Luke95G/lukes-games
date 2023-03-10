import axios from "axios";

export const gamesInstanceAPI = axios.create({
  baseURL: "https://lukes-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesInstanceAPI.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const getQueriedReviews = (sortByQuery) => {
  return gamesInstanceAPI
    .get(`/reviews/?category=${sortByQuery}`)
    .then((response) => {
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

export const postComment = (review_id, body) => {
  const postBody = {
    username: "grumpy19",
    body: body,
  };
  return gamesInstanceAPI
    .post(`/reviews/${review_id}/comments`, postBody)
    .then((response) => {
      return response.data.newComment;
    });
};

export const deleteComment = (comment_id) => {
  return gamesInstanceAPI.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
};
