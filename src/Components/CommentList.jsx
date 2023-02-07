import {useState, useEffect} from "react"
import { OneReview } from "./OneReview";
import { useParams } from "react-router-dom";
import { getOneReview } from "../api";


export const CommentList = ({comments}) => {


    const [review, setReview] = useState([]);
    const [votes, setVotes] = useState(OneReview.votes);
    const {review_id} = useParams();
    const [isClicked, setIsClicked] = useState(false)
    useEffect(()=>{
        getOneReview(review_id)
        .then((review)=>{
            setVotes(review.votes)
            setReview(review)
        })
    }, [review_id])


    const handleClick = (event) => {
        setIsClicked(!isClicked)
        let voteOnCLick = 1
        if (isClicked){
            voteOnCLick = -1
        }
        setVotes((currentVotes)=>{
            let upVote = currentVotes + voteOnCLick
            return upVote
        })
      
    }

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
            <strong>Add your vote here : </strong><button onClick={handleClick}>{`Vote ${votes}`}</button>
            </li>
            )
        })}
        </ul> 
    </section>
    )
}