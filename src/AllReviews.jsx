import {useState, useEffect} from "react" 
import{getReviews} from "./api"


const AllReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        getReviews().then((reviews)=>{
            setReviews(reviews)
        })
    }, [])
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
                            {review.review_body}
                            <br></br>
                            
                          
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default AllReviews