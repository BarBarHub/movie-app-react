import React from 'react'
import './search.css'

 function Search({handleInput}) {
    return (
       <section className="searchbox-wrap">

           <input type="text" 
           placeholder="Search for a movie"
           className="searchbox"
           onChange={handleInput}
           />
       </section> 

    )
}
export default Search
