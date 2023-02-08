import {useState, useEffect} from "react"
import { OneReview } from "./OneReview";
import { useParams } from "react-router-dom";
import { getOneReview } from "../api";


export const CommentList = ({comments}) => {
    
    return (
        <section>
        <ul>
        {comments.map((comment)=>{
            return (
                 <li className="commentList"key={comment.comment_id}>
            <strong>Comment : </strong> {comment.body}
            <br></br>
            <strong>Written by :</strong> {comment.author}
            <br></br>
            <strong>Date :</strong> {comment.created_at} 
            <br></br>
            </li>
            )
        })}
        </ul> 
    </section>
    )
}