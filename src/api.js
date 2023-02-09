import axios from "axios";

export const gamesInstanceAPI = axios.create({
  baseURL: "https://lukes-games.onrender.com/api",
});

export const getReviews = (date, comments, votes) => {
  return gamesInstanceAPI
    .get("/reviews", {
      params: {
        date: date,
        comments: comments,
        votes: votes,
        order: "asc",
      },
    })
    .then((response) => {
      return response.data.reviews;
    });
}; // here

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
