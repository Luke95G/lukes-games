import { useState } from "react";
import { postComment } from "../api";

export const AddComments = ({ setComments, review_id}) => {
    const [newComment, setNewComment] = useState("")
    const [submitButton, setSubmitButton] = useState(false)
    const [error, setError] = useState(false);

    const handleSubmit = (event)=> {
        event.preventDefault();
        postComment(review_id, newComment)
        .then((commentFromApi)=>{
            setComments((currentComments)=>{
                return [commentFromApi, ...currentComments]
            })
            setNewComment("")
        }).catch((error) => {
            setError(error);
          });
    }
    
    const handleButtonTimeout = () => {
        setSubmitButton(true)
        setTimeout(()=>{
            setSubmitButton(false);
        }, 3000)
    }

    if (error){
        return (
            <section>
                <p>Oops, something went wrong ...</p>
            </section>
        )
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

<button className="Butt" onClick={handleButtonTimeout}>Submit</button>
{submitButton && <p className="alert">Please wait while we submit your comment...</p>}
    </form>)
}