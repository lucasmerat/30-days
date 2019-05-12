import React from 'react'
import { FormBtn } from "../../UiComponents/Form";

export default function ChallengeCard(props) {
  return (
    <div className="row">
          <div className="card browse-card">
            <img
              src="https://images.vexels.com/media/users/3/138778/isolated/preview/cdd6b2f922a8bea7fb38b54b80a2dc65-fitness-woman-silhouette-stretching-legs-by-vexels.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title challenge-title">{props.title}</h5>
              <p className="card-text challenge-text">
                {props.description}
              </p>
              <p className="card-text challenge-text">{props.numUsers} active challengers</p>
              <FormBtn href="#" className="btn btn-primary join-btn ">
                Join Challenge
              </FormBtn>
            </div>
            <p className="card-text challenge-info">
              Starts: | 30 Days <i class="fas fa-share-alt " />
            </p>
          </div>
        </div>
  )
}