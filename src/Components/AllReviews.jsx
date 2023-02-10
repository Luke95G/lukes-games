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

            <label htmlFor="sort">Sort by : </label>
                <select onChange={handleOrderChange}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
                <label htmlFor="sortBy">Sort by :</label>
                <select onChange={handleSortByChange}>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                </select>
                

            
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
                            <strong>Votes :</strong> {review.votes}
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
