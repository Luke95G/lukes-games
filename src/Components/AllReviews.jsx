import {useState, useEffect} from "react" 
import{getReviews} from "../api"
import {Link} from "react-router-dom"
import { Categories } from "./Categories"

const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getReviews().then((reviews)=>{
            setIsLoading(false)
            setReviews(reviews)
        })
    }, [])

    if (isLoading){
        return  <h2>Loading please wait ...</h2>
    }

    return (
        <section>
            <Categories reviews={reviews} setReviews={setReviews}/>
            <ul id="reviewList">
                {reviews.map((review)=>{
                    return (
                        <li className="listedItem" key={review.review_id}>
                            <h3>{review.title}</h3><br></br>
                            <img src={review.review_img_url} alt={`${review.title}`}/>
                            <br></br>
                            <strong>Posted : </strong>{review.created_at} by {review.owner}
                            <br></br>
                            <strong>Category :</strong> {review.category}
                            <br></br>
                            <strong>Comments: </strong> {review.comment_count}
                            <br></br>
                            <Link to={`/reviews/${review.review_id}`}>
                             Click to read comments and reviews!
                            </Link>
                            <br></br>
                            </li>
                    )
                })}
            </ul>
        </section>
    )
}


export default AllReviews