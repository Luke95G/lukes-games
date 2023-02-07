import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getOneReview } from "../api"




export const OneReview = () => {

    const [review, setReview] = useState([])
    const {review_id} = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getOneReview(review_id).then((review)=>{
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
        Posted : {review.created_at} by {review.owner}
        <br></br>
        {review.review_body}
        <br></br>
        Comments: {review.comment_count}
    </section>
}



