//offercard 
import React from "react";
import './OfferCards.css'
import { LiaRupeeSignSolid } from 'react-icons/lia';


const OfferCard = ({ plan, isSelected, onClick , color}) => {
  return (
    <div className={`offer-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className={`check-box ${isSelected ? 'selected' : ''}`}></div>
      <div className="plans">
        <div className="subscription-duration">
          <b>{plan.duration} Months Subscription</b>
        </div>
        <div className="pricing">
          <p>
            Total{" "}
              <strong>
              <LiaRupeeSignSolid/>
              {plan.total}
              </strong>  
          </p>
          <p>
            <LiaRupeeSignSolid/>
            {plan.perMonth} /mo</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
//made two changes