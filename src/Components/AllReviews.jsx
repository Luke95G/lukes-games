import {useState, useEffect} from "react" 
import{getReviews} from "../api"
import {Link} from "react-router-dom"
import { Categories } from "./Categories"

const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // const {params} = useParams()    
    const [sortAsc, setSortAsc ] = useState("asc") // here
    const [sortBy, setSortBy] = useState("")

    useEffect(()=>{
        getReviews({sortAsc}).then((reviews)=>{ // arg in here
            setIsLoading(false)
            setReviews(reviews) // here
        })
        .catch((error)=>{
            return <h2>Something went wrong ...</h2>
        })
    }, [sortAsc, sortBy])

    console.log(sortAsc, "<<sortOrder") // here

    const settingSorted = (event) => {
        event.preventDefault()
        setSortBy(event.target.value)
    } // here

    const settingAsc = (event) =>{
        event.preventDefault()
        setSortAsc(event.target.value)
    } // here

    if (isLoading){
        return  <h2>Loading please wait ...</h2>
    }

    return ( // the setOrder button below updates state
        <section>

            <label htmlFor="sort">Sort by : </label>
                
                <select onChange={settingAsc}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
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