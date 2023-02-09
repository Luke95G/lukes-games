import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCommentByReviewId } from "../api"
import { AddComments } from "./AddComment"
import { CommentList } from "./CommentList"


export const Comments = () => {
    const [comments, setComments] = useState([]);
    const {review_id} = useParams();


    useEffect(()=>{
        getCommentByReviewId(review_id).then((response)=>{
            setComments(response.comments)
        })
    }, [review_id])
    return (
        <section>
        <AddComments review_id={review_id} setComments={setComments}/>
        <CommentList comments={comments}/>
        </section>
        )
}

