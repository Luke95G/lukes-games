import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { getOneReview } from "./api"




export const OneReview = () => {

    const [review, setReview] = useState([])
    const {review_id} = useParams();

    useEffect(()=>{
        getOneReview(review_id).then((review)=>{
            setReview(review)
        })
    }, [review_id])



    return <section>
        <h3>{review.title}</h3>
        <br></br>
        <img src={review.review_img_url} alt={`${review.title}`} />
        <br></br>
        Posted : {review.created_at} by {review.owner}
        <br></br>
        Comments {review.comment_count}
    </section>
}



