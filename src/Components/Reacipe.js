import React,{useState,useEffect} from 'react';

  import Search from './Search';
  import {v4 as uuidv4} from 'uuid';

  

const Reacipe= (props)=> {
     const [Reacipes,SetReacipes] = useState([]);
     const [search,SetSearch] = useState("");

     useEffect(()=>{
     const getData= async()=>{
         const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=ca5bf101&app_key=a0a6984c19d7e66d89948ece31f674d9`);
         const jsonReasonse = await response.json();
         console.log(jsonReasonse);
         SetReacipes(jsonReasonse.hits);
     }
     getData();
     },[search])
    return(<div className="App">
    <h1>Food Searching App</h1>
    <div className="search-form">
    <input placeholder="please enter" type="search" value={search} onChange={(event)=> { SetSearch(event.target.value)}}/>
   <input type="submit" value="search"/>
   </div>
   <div className="recipes">
    {!Reacipes == [] ? (Reacipes.map(recipe => <Search key={uuidv4()}recipe={recipe}/>) )
:
(<p>wait</p>)
}
</div>


    </div>)
}
export default Reacipe;