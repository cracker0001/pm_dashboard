import React from "react";
import "./ota.css";
import tractorImg from "../assets/tractor.png";

const Ota = () => {
  return (
    <div className="ota-screen">
      <div className="ota-cards">
        <div className="ota-card">
          <div className="ota-card-left">
            <span className="ota-left-label">Total Tractors</span>
            <span className="ota-left-value">112</span>
          </div>

          <div className="ota-card-right">
            <div className="ota-card-right-child">
              <div className="ota-stat">
                <span className="ota-stat-label">Updated Tractors</span>
                <span className="ota-stat-value">59</span>
              </div>

              <div className="ota-stat">
                <span className="ota-stat-label">Outdated Tractors</span>
                <span className="ota-stat-value">63</span>
              </div>

              <div className="ota-stat">
                <span className="ota-stat-label">Successful Updates</span>
                <span className="ota-stat-value">39</span>
              </div>

              <div className="ota-stat">
                <span className="ota-stat-label">Failed Updates</span>
                <span className="ota-stat-value">29</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="ota-tractor-list">
        <div className="ota-updating-container">
        <div className="ota-updating-header">
          Tractors Currently Updating
        </div>

        <div className="ota-update-row">
          <div className="ota-row-left">
            <img
              src={tractorImg}
              alt="tractor"
              className="ota-tractor-img"
            />

            <div className="ota-tractor-text">
             <p>HighForce 50 HP</p>
            </div>
            <div className="status">
              <p>Active</p>
            </div>
          </div>

          <div className="ota-row-right">
            <div className="ota-progress">
             <div className="progress-bar">

             </div>
            
            </div>
            <div className="progress-value">
             <p>70%</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Ota;