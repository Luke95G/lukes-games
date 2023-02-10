import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCommentByReviewId } from "../api"
import { AddComments } from "./AddComment"
import { CommentList } from "./CommentList"


export const Comments = () => {
    const [comments, setComments] = useState([]);
    const {review_id} = useParams();
    const [error, setError] = useState(false);


    useEffect(()=>{
        getCommentByReviewId(review_id).then((response)=>{
            setComments(response.comments)
        }).catch((error)=>{
            setError(error);
        })
    }, [review_id])

    if (!error){
    return (
        <section>
        <AddComments review_id={review_id} setComments={setComments}/>
        <CommentList comments={comments} setComments={setComments}/>
        </section>
        )
}
}

