import React from "react";
import "./style.css";
import { Input, FormBtn } from "../../UiComponents/Form";
export default function CreateChallegnes(props) {
  console.log(props);
  return (
    <div className="row">
      <div className="card create-challenge-card">
        <div className="card-body">
          <h5 className="card-title challenge-title">Create a workout</h5>
          <div className="row">
            <label> Title of workout</label>
            <Input />
            <label> Short description</label>
            <Input />
            <label>Select an Image For Your Challenge </label>
            <div className="row">
              <div className="col-4">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" for="customCheck1">
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                  />
                  <label className="custom-control-label" for="customCheck2">
                    {" "}
                    <img
                      className="challenge-img-pick"
                      alt="workout-placeholder"
                      src="https://images.vexels.com/media/users/3/131346/isolated/preview/e35291e5e0befe8215c03b06c92c161f-man-fitness-training-silhouette-by-vexels.png"
                    />
                  </label>
                </div>
              </div>
              <div className="col-4">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck3"
                  />
                  <label className="custom-control-label" for="customCheck3">
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck4"
                  />
                  <label className="custom-control-label" for="customCheck4">
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck5"
                  />
                  <label className="custom-control-label" for="customCheck5">
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck6"
                  />
                  <label className="custom-control-label" for="customCheck6">
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
            {props.numDays &&
              props.numDays.map(week => {
                return (
                  <div style={{width:"100%", textAlign:"left"}}>
                    <label>Day {week}</label>
                    <Input />
                  </div>
                );
              })}
          </div>

          <FormBtn
            href="#"
            className="btn btn-primary join-btn"
            onClick={props.handleClick}
          >
            Create Challenge
          </FormBtn>
        </div>
      </div>
    </div>
  );
}
