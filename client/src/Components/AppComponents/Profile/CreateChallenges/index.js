import React, { Component } from "react";
import "./style.css";
import { Input, FormBtn } from "../../../BootstrapComponents/Form";
import API from "../../../../utils/API";
// import { Redirect } from "react-router-dom";

class CreateChallegnes extends Component {
  state = {
    title:"",
    description:"",
    image: "",
    days: []
  }
  handleTitleChange = (e) =>{
   this.setState({
     title: e.target.value
   })
  }
  handleDescriptionChange = (e) =>{
    this.setState({
      description: e.target.value
    })
   }
  handleDayChange = (e) =>{
    let dayChanged= e.target.getAttribute('day') - 1;
    let newState = [...this.state.days];
    newState[dayChanged] = e.target.value;
    this.setState({
      [e.target.name]: newState
    })
  }
  handleImageChange = (e) =>{
    console.log(e.target.id)
    this.setState({
      image: e.target.id
    })
  }
  handleSubmit = () =>{
    API.createChallenge({...this.state, createdAt: new Date()})
    .then ((res)=>{
      this.props.loadChallenges();
      this.props.history.push(`/profile/challenge/${res.data._id}`)
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="row">
        <div className="card create-challenge-card">
          <div className="card-body">
            <h5 className="card-title challenge-title">Create a workout</h5>
            <div className="row">
              <label> Title of workout</label>
              <Input value={this.state.title} onChange={this.handleTitleChange}/>
              <label> Short description</label>
              <Input value={this.state.description} onChange={this.handleDescriptionChange}/>
              <label>Select an Image For Your Workout </label>
              <div className="row">
                <div className="col-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="onlyOne"
                      id="https://images.vexels.com/media/users/3/138766/isolated/preview/aa86bc7fc758d324029168656a5b6874-fitness-woman-silhouette-by-vexels.png"
                      onClick={this.handleImageChange}
                    />
                    <label className="custom-control-label" htmlFor="https://images.vexels.com/media/users/3/138766/isolated/preview/aa86bc7fc758d324029168656a5b6874-fitness-woman-silhouette-by-vexels.png">
                      {" "}
                      <img
                        className="challenge-img-pick"
                        alt="workout-placeholder"
                        src="https://images.vexels.com/media/users/3/138766/isolated/preview/aa86bc7fc758d324029168656a5b6874-fitness-woman-silhouette-by-vexels.png"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="onlyOne"
                      className="custom-control-input"
                      id="https://images.vexels.com/media/users/3/131346/isolated/preview/e35291e5e0befe8215c03b06c92c161f-man-fitness-training-silhouette-by-vexels.png"
                      onChange={this.handleImageChange}
                    />
                    <label className="custom-control-label" htmlFor="https://images.vexels.com/media/users/3/131346/isolated/preview/e35291e5e0befe8215c03b06c92c161f-man-fitness-training-silhouette-by-vexels.png">
                      {" "}
                      <img
                        className="challenge-img-pick"
                        name="onlyOne"
                        alt="workout-placeholder"
                        src="https://images.vexels.com/media/users/3/131346/isolated/preview/e35291e5e0befe8215c03b06c92c161f-man-fitness-training-silhouette-by-vexels.png"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="onlyOne"
                      className="custom-control-input"
                      id="https://images.vexels.com/media/users/3/138770/isolated/preview/e00461c64feae7746c6ab1cd50268f85-fitness-woman-silhouette-lifting-hips-by-vexels.png"
                      onChange={this.handleImageChange}
                    />
                    <label className="custom-control-label" htmlFor="https://images.vexels.com/media/users/3/138770/isolated/preview/e00461c64feae7746c6ab1cd50268f85-fitness-woman-silhouette-lifting-hips-by-vexels.png">
                      {" "}
                      <img
                        className="challenge-img-pick"
                        alt="workout-placeholder"
                        src="https://images.vexels.com/media/users/3/138770/isolated/preview/e00461c64feae7746c6ab1cd50268f85-fitness-woman-silhouette-lifting-hips-by-vexels.png"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="onlyOne"
                      className="custom-control-input"
                      id="https://i0.wp.com/abjsfitness.com/wp-content/uploads/2018/09/429472415c458712f85bc19b240091e5-bodybuilder-double-biceps-pose-silhouette-by-vexels.png?resize=512%2C460&ssl=1"
                      onChange={this.handleImageChange}
                    />
                    <label className="custom-control-label" htmlFor="https://i0.wp.com/abjsfitness.com/wp-content/uploads/2018/09/429472415c458712f85bc19b240091e5-bodybuilder-double-biceps-pose-silhouette-by-vexels.png?resize=512%2C460&ssl=1">
                      {" "}
                      <img
                        className="challenge-img-pick"
                        alt="workout-placeholder"
                        src="https://i0.wp.com/abjsfitness.com/wp-content/uploads/2018/09/429472415c458712f85bc19b240091e5-bodybuilder-double-biceps-pose-silhouette-by-vexels.png?resize=512%2C460&ssl=1"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="onlyOne"
                      className="custom-control-input"
                      id="https://images.vexels.com/media/users/3/138773/isolated/preview/1cb1b8e931e5f9d9bdc4abe479cde54b-fitness-woman-silhouette-run-by-vexels.png"
                      onChange={this.handleImageChange}
                    />
                    <label className="custom-control-label" htmlFor="https://images.vexels.com/media/users/3/138773/isolated/preview/1cb1b8e931e5f9d9bdc4abe479cde54b-fitness-woman-silhouette-run-by-vexels.png">
                      {" "}
                      <img
                        className="challenge-img-pick"
                        alt="workout-placeholder"
                        src="https://images.vexels.com/media/users/3/138773/isolated/preview/1cb1b8e931e5f9d9bdc4abe479cde54b-fitness-woman-silhouette-run-by-vexels.png"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      name="onlyOne"
                      className="custom-control-input"
                      id="https://images.vexels.com/media/users/3/132736/isolated/preview/c5beec0aff097139052f79f2e19a3a51-woman-doing-exercise-fitness-silhouette-by-vexels.png"
                      onChange={this.handleImageChange}
                    />
                    <label className="custom-control-label" htmlFor="https://images.vexels.com/media/users/3/132736/isolated/preview/c5beec0aff097139052f79f2e19a3a51-woman-doing-exercise-fitness-silhouette-by-vexels.png">
                      {" "}
                      <img
                        className="challenge-img-pick"
                        alt="workout-placeholder"
                        src="https://images.vexels.com/media/users/3/132736/isolated/preview/c5beec0aff097139052f79f2e19a3a51-woman-doing-exercise-fitness-silhouette-by-vexels.png"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {this.props.numDays &&
                this.props.numDays.map(day => {
                  return (
                    <div style={{ width: "100%", textAlign: "left" }} key={day}>
                      <label>Day {day}</label>
                      <Input value={this.state.days[day-1]} key={day} name={"days"} day={day} onChange={this.handleDayChange}/>
                    </div>
                  );
                })}
            </div>

            <FormBtn
              href="#"
              className="btn btn-primary join-btn"
              onClick={this.handleSubmit}
            >
              Create Workout
            </FormBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateChallegnes;
