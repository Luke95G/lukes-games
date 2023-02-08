import {useState, useEffect} from "react"
import { patchReviewVotes, getOneReview } from "../api";
import { useParams } from "react-router-dom";

export const Votes = ({review}) => {
    
    const [votes, setVotes] = useState(review.votes);
    const {review_id} = useParams();
    const [isClicked, setIsClicked] = useState(false)
    const [error, setError] = useState(false)


    useEffect(()=>{
        getOneReview(review_id)
        .then((review)=>{
            setVotes(review.votes)
        })
    }, [])

    const handleClick = () => {
        setIsClicked(!isClicked)
        let voteOnCLick = 1
        if (isClicked){
            voteOnCLick = -1
        }
        setVotes((currentVotes)=>{
            let upVote = currentVotes + voteOnCLick
            return upVote
        })
        patchReviewVotes(review_id, voteOnCLick)
        .then(()=>{
            setError(null)
        }).catch(()=>{
            setError("Oops. Something went wrong ...")
        })
      
    }

return (<section>
    {error ? <p>{error}</p> : null}
    <button className="voteButt" onClick={handleClick}>{`Vote | ${votes}`}</button> 
</section>)
}