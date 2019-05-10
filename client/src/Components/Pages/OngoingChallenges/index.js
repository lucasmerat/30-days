import React from 'react'
import "./style.css";
import { Input, TextArea, FormBtn,FormBtnlink } from "../../UiComponents/Form";
export default function BrowseChallegnes(props) {
  return (
    <div className="row">
       
          <div className="card browse-card" >
            <img src="https://images.vexels.com/media/users/3/138778/isolated/preview/cdd6b2f922a8bea7fb38b54b80a2dc65-fitness-woman-silhouette-stretching-legs-by-vexels.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title challenge-title">Core Challenge</h5>
                <p className="card-text challenge-text">Progress</p>
                <p className="card-text challenge-text progress-chart">
                <p className="card-text challenge-text fill-progress-chart"></p>
                </p>
                <p className="card-text challenge-text"># of challengers</p>
                <FormBtn href="#" className="btn btn-primary join-btn ">
                View Challenge</FormBtn>
            </div>
            <p className="card-text challenge-info">Ends:  | 10 Days Left <i class="fas fa-share-alt "></i></p>
          </div>
          
    </div>
   
  )
}
