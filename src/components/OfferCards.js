import React from "react";
import './OfferCards.css'
import { FaRupeeSign } from "react-icons/fa";
const OfferCard = ({ plan, isSelected, onClick }) => {
  return (
    <div className={`offer-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <p>{plan.duration} Months Subscription</p>
      <div>
        <p>
          Total{" "}
          <bold>
            <FaRupeeSign />
            {plan.total}
          </bold>
        </p>
        <p>
          <FaRupeeSign />
          {plan.perMonth} /mo
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
//made two changes