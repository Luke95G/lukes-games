import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getOneReview, getReviews } from "../api"
import { Comments } from "./Comments"
import { Votes } from "./Votes"



export const OneReview = () => {

    const [review, setReview] = useState([]);
    const {review_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        setError(false)
        setIsLoading(true)
        Promise.all([getOneReview(review_id), getReviews(review_id) ])
        .then(([review, comments])=>{
            setReview(review)
            setIsLoading(false)
        }).catch((error)=>{
            console.log(error)
            setError(error)
            setIsLoading(false)
        })
    }, [review_id])

    if (isLoading){
        return  <h2>Loading please wait ...</h2>
    }
    

    return <section className="listedItem">
        
        <h3>{review.title}</h3>
        <br></br>
        <img src={review.review_img_url} alt={`${review.title}`} />
        <br></br>
        <strong>Posted : </strong> {review.created_at} by {review.owner}
        <br></br>
        {review.review_body}
        <br></br>
       <strong> Comments : </strong> {review.comment_count}
        <br></br>
        <Votes review={review}/>
        <br></br>
        <Comments OneReview={OneReview} />
    </section>
}



