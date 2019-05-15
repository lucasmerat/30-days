import React from 'react';
import { FormBtn,FormBtnlink } from "../../UiComponents/Form";
import "./TimelinePost.css";

export default function TimelinePost() {
  return (
    <div>
      <div className="card post-card gedf-card">
                    <div className="card-header post-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">@LeeCross</div>
                                    <div className="h5 m-0">From challenge: INSERT CHALLENGE LINK HERE</div>
                                </div>
                            </div>

                                </div>

                    </div>
                    <div className="card-body">
                        <div className="text-white h7 mb-2"> <i className="fa fa-clock-o"></i>10 min ago</div>
                            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                            <img width="100%" src="https://picsum.photos/200/100" alt="" />

                        <p className="card-text my-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </div>
                    <div className="card-footer">
                    <FormBtn className="edit-profile-btn">
                    Like
                      </FormBtn>
                    </div>
                </div>
    </div>
  )
}
