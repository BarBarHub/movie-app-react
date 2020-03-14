import React, { Component } from 'react'
import Modal from "../modal/modal"
import Films from './films'
import film1 from './img/film1.jpg'
import film2 from './img/film2.jpg'
import film3 from './img/film3.jpg'
import film4 from './img/film4.jpg'
import film5 from './img/film5.jpg'
import film6 from './img/film6.jpg'
import film7 from './img/film7.jpg'
import film8 from './img/film8.jpg'
import './films.css'

export default class filmsdata extends Component {
    state ={
    film:[
        {
            lien:"#",
            title:"vice",
            image: <img height="180px" width ="350px"src={film1}/>,
            rating:"5"
        },
        {
            lien:"#",
            title:"Les comedies",
            image: <img height="180px" width ="350px"src={film2}/>,
            rating:"3"
        },
        {
            lien:"#",
            title:"Horreur",
            image: <img height="180px" width ="350px"src={film3}/>,
            rating:"2"
        },
        {
            lien:"#",
            title:"Escape room",
            image: <img height="180px" width ="350px"src={film4}/>,
            rating:"5"
        },
        {
            lien:"#",
            title:"Escape from",
            image: <img height="180px" width ="350px"src={film5}/>,
            rating:"5"
        },
        {
            lien:"#",
            title:"The nun",
            image: <img height="180px" width ="350px"src={film6}/>,
            rating:"1"
        },
        {
            lien:"#",
            title:"The unknow",
            image: <img height="180px" width ="350px"src={film7}/>,
            rating:"2"
        },
        {
            lien:"#",
            title:"Rogue one",
            image: <img height="180px" width ="350px"src={film8}/>,
            rating:"3"
        }],
         };

        addfilm = item => {
            let newState = this.state.film;
            newState.push(item);
            this.setState({ film: newState })
        }
       
    
    
    render() {
        return (
            
            <div className="image-flex" >
            {this.props.search
            ? this.state.film
                .filter(el =>
                  el.title.toLocaleLowerCase().match(this.props.search.toLowerCase().trim())
                )
                .map((element, key) => (
                  
                    <Films key={key} film={element} />
                 
                ))
            : this.props.rate
            ? this.state.film
                .filter(el => {
                  return el.rating >= this.props.rate;
                })
                .map((element, key) => (
                  
                    <Films key={key} film={element} />
                 
                ))
            : this.state.film.map((element, key) => (
               
                  <Films key={key} film={element} />
                  
                
              ))}
                  <Modal  addItem={this.addfilm}/>

         
           </div>
        )
    }
}
