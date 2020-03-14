import React, { Component } from 'react'
import Search from '../search/search'
import Rate from '../rate/rate'
import Films from '../films/filmsdata'
import './container.css'


 class Container extends Component {
    state ={
        s:"",
        results: [],
       }
       handlchange = newStar => this.setState({ star: newStar });
          handleInput=(e)=> {
      
                this.setState({
                    s:e.target.value,
                })        
             };

             
    render() {


        return (
           <div className="container">
          <header>
              <h1> Movie Search  !</h1>
          </header>
          <main>
              <div className="flex">
          <Search handleInput={this.handleInput}/>
           <div className="stars">
          <Rate rate={this.state.star} onChange={this.handlchange}/>
          </div>
          </div>
          <section className="bloc">
            <Films rate={this.state.star} search={this.state.s} />
           
        </section>
          
          </main>


      </div>
        )
    }
}
export default Container