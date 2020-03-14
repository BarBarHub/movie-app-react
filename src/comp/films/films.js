import React from 'react'
import Rate from '../rate/rate'
import './films.css'


 function Films(props) {
    return (
      
           
        
               
                    <a className="imgfilm" href={props.film.lien}>
                   
                        {props.film.image}
                        <div className="image-container">
                                      <p className="textimg">{props.film.title}</p>
                                      <div className="textstar"><Rate rate={props.film.rating}/></div>
                        
                        </div>
                        </a>
                    
        
       
   
    )
}
export default Films

