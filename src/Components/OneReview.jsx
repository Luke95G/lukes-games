import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getOneReview } from "../api"
import { Comments } from "./Comments"




export const OneReview = () => {

    const [review, setReview] = useState([]);
    const {review_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getOneReview(review_id)
        .then((review)=>{
            setIsLoading(false)
            setReview(review)
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
        <Comments OneReview={OneReview} />
    </section>
}



