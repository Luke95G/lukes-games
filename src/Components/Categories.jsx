import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { getQueriedReviews, getReviews } from "../api"
import { Link } from "react-router-dom"


export const Categories = ({ setReviews}) => {

    let [searchParams, setSearchParams] = useSearchParams()
    const sortByQuery = searchParams.get("category_name")

    const setSpecificCategory = (category) => {
        const updatedParams = new URLSearchParams(searchParams)
        updatedParams.set("category_name", category)
        setSearchParams(updatedParams)
}

useEffect(()=>{
    if (sortByQuery){
        getQueriedReviews(sortByQuery).then((reviews)=>{
            setReviews(reviews)
        })
    }
}, [sortByQuery, setReviews])



return (
    <section>
        <h2>{sortByQuery}</h2>
       
        <label htmlFor="category"></label>
        <button className="categoryBar" onClick={()=>setSpecificCategory("hidden-roles")}>Hidden-roles</button>
        <button className="categoryBar" onClick={()=>setSpecificCategory("dexterity")}>Dexterity</button>
        <button className="categoryBar" onClick={()=>setSpecificCategory("strategy")}>Strategy</button>
        <button className="categoryBar" onClick={()=>setSpecificCategory("deck-building")}>Deck-building</button>
        <button className="categoryBar" onClick={()=>setSpecificCategory("engine-building")}>Engine-building</button>
        <button className="categoryBar" onClick={()=>setSpecificCategory("push-your-luck")}>Push-your-luck</button>
        <button className="categoryBar" onClick={()=>setSpecificCategory("roll-and-write")}>Roll-and-write</button>
        <Link to="/"><button className="clearFilter" onClick={()=>getReviews().then((reviews)=>{setReviews(reviews)})}>Clear Filter</button></Link>
        
    </section>
)   

}