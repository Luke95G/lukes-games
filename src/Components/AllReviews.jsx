import {useState, useEffect} from "react" 
import { gamesInstanceAPI } from "../api"
import {Link} from "react-router-dom"
import { Categories } from "./Categories"


export const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)   
    const [order, setOrder ] = useState("desc")
    const [sortQuery, setSortQuery] = useState()


    const queryParams = new URLSearchParams(window.location.search)
    const category = queryParams.get("category_name")

    useEffect(()=>{
        gamesInstanceAPI.get('/reviews',
         {params:
            {category: category,
             sort_by: sortQuery,
             order: order
            }}).then((result)=>{
            setReviews(result.data.reviews)
            setIsLoading(false)
        }).catch((error)=>{
        })
    }, [category, sortQuery, order])

    const handleOrderChange = (event) =>{
        event.preventDefault()
        setOrder(event.target.value)
    }

    const handleSortByChange = (event) => {
        event.preventDefault()
        setSortQuery(event.target.value)
    }


    if (isLoading){
        return  <h2>Loading please wait ...</h2>
    }

    return (
        <section>
            <br></br>
            <label htmlFor="sort" alt="sort by drop down, ascending or descending"><strong>Sort by : </strong></label>
                <select className="dropDown" onChange={handleOrderChange}>
                    <option alt="Descending"value="desc">Descending</option>
                    <option alt="Ascending"value="asc">Ascending</option>
                </select>
                <label htmlFor="sortBy" alt="drop down sort by date, votes"><strong>Sort by : </strong></label>
                <select className="dropDown" onChange={handleSortByChange}>
                    <option alt="Date"value="created_at">Date</option>
                    <option alt="Votes"value="votes">Votes</option>
                </select>
                
            <Categories reviews={reviews} setReviews={setReviews}/>
            <ul id="reviewList" alt="list of all reviews">
                {reviews.map((review)=>{
                    return (
                        <li className="listedItem" key={review.review_id}>
                            <h3>{review.title}</h3><br></br>
                            <img src={review.review_img_url} alt={`${review.title}`}/>
                            <br></br>
                            <strong alt="Author of review">Posted : </strong>{review.created_at} by {review.owner}
                            <br></br>
                            <strong alt="Category of review">Category :</strong> {review.category}
                            <br></br>
                            <strong alt="Comments on review">Comments : </strong> {review.comment_count}
                            <br></br>
                            <strong alt="Votes on review">Votes :</strong> {review.votes}
                            <br></br>
                            <Link alt="link to the review" to={`/reviews/${review.review_id}`}>
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
