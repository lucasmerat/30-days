import React, { Component } from "react";
import { FormBtn } from "../../UiComponents/Form";
import "./ChallengeDetails.css";
import API from "../../../utils/API";

class ChallengeDetails extends Component {
  componentDidMount() {
    this.loadChallenge();
  }
  state = {
    title: "",
    description: "",
    days: [],
    numUsers: 0,
    isJoinedUser: false
  };
  loadChallenge = () => {
    API.getChallengebyId(this.props.match.params.id)
      .then(res =>
        this.setState({
          title: res.data.title,
          description: res.data.description,
          days: res.data.days,
          numUsers: res.data.user.length
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    return this.props.userChallenges ? (
      // <div className="card challenge-details-card">
         <div className="card-body">
            <table >
              <tbody>
              <tr>
              <td COLSPAN="7" ><b>{this.state.title}</b></td> 
              </tr>
              <tr> 
              <td COLSPAN="7" ><i> {this.state.description}</i></td>
              </tr>
              
              <tr className="workout-days">
              {this.state.days &&
                this.state.days.map((day, index) => {
                  return (
                    <p key={day}>
                      Day {index + 1}: {day === null ? "Break" : day}
                    </p>
                  );
                })}
              </tr>

              <tr> 
              <td >1</td>
              <td >2</td>
              <td >3</td>
              <td >4</td>
              <td >5</td>
              <td >6</td>
              <td >7</td>
              
              </tr>
              
              <tr>
              <td >8</td> 
              <td >9</td>
              <td >10</td>
              <td >11</td>
              <td >12</td>
              <td >13</td>
              <td >14</td>
              
              </tr>
              
              <tr> 
              <td >15</td>
              <td >16</td>
              <td >17</td>
              <td >18</td>
              <td >19</td>
              <td >20</td>
              <td >21</td>
              
              </tr>
              
              <tr> 
              <td >22</td>
              <td >23</td>
              <td >24</td>
              <td >25</td>
              <td >26</td>
              <td >27</td>
              <td >28</td>
            
              </tr>
              
              <tr> 
              <td >29</td>
              <td >30</td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              <td ></td>
              
              </tr>
              </tbody> 
            </table>
          </div>
        // </div>    
    ) : (
      <div>Loading challenge</div>
    );
  }
}

export default ChallengeDetails;


// <div className="row">
// <div className="card challenge-details-card">
//   <div className="card-body">
  
//     <h5 className="card-title challenge-title">{this.state.title}</h5>
//     <div className="card-body">
//       <div>{this.state.numUsers} challengers</div>
//       {this.state.description}
//     </div>
//     {/* Checks that user is not already part of challenge and shows button if they are not */}
//     {!this.props.userChallenges.some(
//       challenge => challenge._id === this.props.match.params.id
//     ) && (
//       <FormBtn onClick={()=>{this.props.joinChallenge(this.props.match.params.id, {userId: this.props.userId})}} href="#" className="btn btn-primary join-btn ">
//         Join Challenge
//       </FormBtn>
//     )}
//     <hr />
//     <div className="workout-days">
//       {this.state.days &&
//         this.state.days.map((day, index) => {
//           return (
//             <p key={day}>
//               Day {index + 1}: {day === null ? "Break" : day}
//             </p>
//           );
//         })}
//     </div>
//   </div>
  
// </div>
// </div>