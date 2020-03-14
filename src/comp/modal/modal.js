import React, { Component } from 'react'
import Modal from "react-modal";

const customStyles = {
    content: {
      top: "59%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "499px",
      width: "300px",
      backgroundColor: "#1c1e21",
      color: "white"
    }
  };
export default class modal extends Component {
   
    state = {
        isOpen: false,
        film: {
          title: "",
          lien: "",
          rating:"",
          img:"",
        }
      };
    
      handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
      closeModal = () => this.setState({ isOpen: false });
      changeHandler = e => {this.setState({ film: {...this.state.film,[e.target.name]: e.target.value}
        });
      };

      click = () => {
        this.props.addItem(this.state.film);
       
      };
   
   
    render() {
        return (
            
                  <div className="add-film"><a onClick={this.handleOpen} className="add-film-button" href="#">+</a> 
                  
            <Modal   
            style={customStyles}
            isOpen={this.state.isOpen}
            onRequestClose={this.closeModal}>

                <form onSubmit={(e)=> e.preventDefault()} >
                <label  style={{ margin: "15px" }}> img</label>


                <input type="text" 
                name="img"
                onChange={this.changeHandler}

                style={{
                   margin: "15px",
                   padding: "13px 40px",
                   borderRadius: "5px"
                  }} > 
                 </input> 
                <label  style={{ margin: "15px" }}> title</label>


                <input type="text" 
                name="title"
                onChange={this.changeHandler}

                style={{
                    margin: "15px",
                    padding: "13px 40px",
                    borderRadius: "5px"
                  }} > 
                 </input> 


                 <label  style={{ margin: "15px" }}> rate</label>


                <input type="text"
                 name="rating"
                 onChange={this.changeHandler}

                 style={{
                    margin: "15px",
                    padding: "13px 40px",
                    borderRadius: "5px"
                  }} > 
                 </input> 


                 <label  style={{ margin: "15px" }} > lien</label>


                <input type="text" 
                name="lien" 
                onChange={this.changeHandler}

                style={{
                    margin: "15px",
                    padding: "13px 40px",
                    borderRadius: "5px"
                  }}> 
                 </input> 
                 
                 <button onClick={this.click}
                 style={{
                    margin: "25px 50px",
                    padding: "15px 35px",
                    borderRadius: "5px"
                  }} >
                       Submit
                        </button> 

                <button onClick={this.closeModal}
                 style={{
                    margin: "25px 50px",
                    padding: "15px 35px",
                    borderRadius: "5px"
                  }} >
                       Cancel
                        </button> 
            

                </form>

            </Modal>
            </div>
        )
    }
}
