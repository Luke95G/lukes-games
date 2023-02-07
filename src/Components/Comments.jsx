import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCommentByReviewId } from "../api"
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
        <CommentList comments={comments}/>
        )
}

