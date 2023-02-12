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
       
        <label htmlFor="category" alt="category selection"></label>
        <button className="categoryBar" alt="hidden-roles" onClick={()=>setSpecificCategory("hidden-roles")}>Hidden-roles</button>
        <button className="categoryBar" alt="dexterity" onClick={()=>setSpecificCategory("dexterity")}>Dexterity</button>
        <button className="categoryBar" alt="strategy" onClick={()=>setSpecificCategory("strategy")}>Strategy</button>
        <button className="categoryBar" alt="deck-building" onClick={()=>setSpecificCategory("deck-building")}>Deck-building</button>
        <button className="categoryBar" alt="engine-building" onClick={()=>setSpecificCategory("engine-building")}>Engine-building</button>
        <button className="categoryBar" alt="push-your-luck" onClick={()=>setSpecificCategory("push-your-luck")}>Push-your-luck</button>
        <button className="categoryBar" alt="roll-and-write" onClick={()=>setSpecificCategory("roll-and-write")}>Roll-and-write</button>
        <Link to="/"><button className="clearFilter" onClick={()=>getReviews().then((reviews)=>{setReviews(reviews)})}>Clear Filter</button></Link>
        
    </section>
)   

}