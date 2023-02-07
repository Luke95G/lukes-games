import {useState, useEffect} from "react" 
import{getReviews} from "../api"
import {Link} from "react-router-dom"

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
        <div>
            <h2>Categories that I will change later!</h2>
            <ul id="reviewList">
                {reviews.map((review)=>{
                    return (
                        <li className="listedItem" key={review.review_id}>
                            <h3>{review.title}</h3><br></br>
                            <img src={review.review_img_url} alt={`${review.title}`}/>
                            <br></br>
                            Posted : {review.created_at} by {review.owner}
                            <br></br>
                            Category : {review.category}
                            <br></br>
                            Comments: {review.comment_count}
                            <br></br>
                            <Link to={`/reviews/${review.review_id}`}>
                             Click to read comments and reviews!
                            </Link>
                            <br></br>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default AllReviews