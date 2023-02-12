import { useState, useContext } from "react";
import { deleteComment } from "../api";
import { UserContext } from "../Context/userContext"


export const CommentList = ({comments, setComments}) => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const userValue = useContext(UserContext);

    const handleDeleteComment = (comment_id) => {
        deleteComment(comment_id)
          .then(() => {
            setComments((prevComments) =>
              prevComments.filter((comment) => comment.comment_id !== comment_id)
            );
          })
          .catch(() => {
            setError(`Oops, we ran into a problem deleting your comment! ${error}`);
            setLoading(false);
            
          });
      };

      if (loading && !error){
        return (
            
            <section>
                <h2>Loading ...</h2>
            </section>
        )
      }

    return (
        <section>
        <ul>
        {comments.map((comment)=>{
            return (
                 <li alt="List of comments"className="commentList"key={comment.comment_id}>
            <strong alt="comment">Comment : </strong> {comment.body}
            <br></br>
            <strong alt="author">Written by :</strong> {comment.author}
            <br></br>
            <strong alt="date written">Date :</strong> {comment.created_at} 
            <br></br>
            {comment.author === userValue.loggedInUsername.name ? (
                <button className="delButt" onClick={() => handleDeleteComment(comment.comment_id)}>
                Delete
                </button>) : null}
            </li>
            )
        })}
        </ul> 
    </section>
    )
}