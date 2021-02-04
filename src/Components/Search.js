
import React,{useState} from 'react';
import Reacipedetalies from './Reacipedetalies';

   
const Search= ({recipe})=>{
    const [show, setShow] = useState(false);
    const {label, image,ingredients}= recipe.recipe;
    return(<div className="recipe">
    <h2>{label}</h2>
    <img src={image}/>
    <button onClick={()=>{setShow(!show)}} >ingredients</button>
    {show&&<Reacipedetalies ingredients={ingredients}/>}
 
    </div>)
}
export default Search;