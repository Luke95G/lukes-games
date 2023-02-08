import { useState } from "react";
import { postComment } from "../api";

export const AddComments = ({ setComments, review_id}) => {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event)=> {
        event.preventDefault();
        postComment(review_id, newComment)
        .then((commentFromApi)=>{
            setComments((currentComments)=>{
                return [commentFromApi, ...currentComments]
            })
        })
    }


    return (<form className="comment" onSubmit={handleSubmit}>
        <label htmlFor="newComment"></label>
        <br></br>
        <textarea className="commentBody" htmlFor="comment"
        type="text"
        value={newComment}
        placeholder="Add a comment here..."
        onChange={(event)=>setNewComment(event.target.value)} required/>
        <br></br>

<button className="Butt">Submit</button>
    </form>)
}