import React from 'react';
import './MainPage.css';
import { useState } from 'react';
import book from '../assets/book.png'
import clock from '../assets/clock.png'
import live from '../assets/live.png'
import noAdd from '../assets/no-add.png'
import scholar from '../assets/scholar.png'
import { LiaRupeeSignSolid } from 'react-icons/lia';
import {FaRupeeSign} from 'react-icons/fa'
import OfferCard from './OfferCards'
import Data from '../Data'
import RazorLogo from '../assets/razorpay.png'

const MainPage = () => {
  //adding states

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const calculateDiscount = () => {
    if (selectedPlan) {
      const originalPrice = selectedPlan.valid ? selectedPlan.total : 18500;
      const discountedPrice = selectedPlan.total;
      const discount = originalPrice - discountedPrice;
      return discount;
    }
    return 0;
  };

  const calculateTotalAmount = () => {
    if (selectedPlan) {
      const discount = calculateDiscount();
      const totalAmount = selectedPlan.total + (selectedPlan.valid ? 0 : 18500) + (discount * 0.18);
      return totalAmount.toFixed(2);
    }
    return 0;
  };

  return (
    <div className='mainpage-container'>
      <div className='left-container'>
        <h2>Access curated courses worth</h2> 
        <h2 ><b><LiaRupeeSignSolid/><s>18,500</s></b> at just <b><LiaRupeeSignSolid/>99</b> per year !</h2> 
        <p><img src={book} className='icon'/>100+ Job relevant courses</p>
        <p><img src={clock} className='icon'/>20,000+ Hours of content</p>
        <p><img src={live} className='icon'/>Exclusive webinar access</p>
        <p><img src={scholar} className='icon'/>Scholarship worth <LiaRupeeSignSolid/> 94,500</p>
        <p><img src={noAdd} className='icon'/>Ad free learning experience</p>
      </div>
      <div className='right-container'>
      <div className='decide-todo'>
        <div className='decide'>
          <div className='circle'><span>1</span></div>
          <p className='circle-text'>Sign up</p>
        </div>
        <div className='decide'>
          <div className='circle'><span>2</span></div>
          <p className='circle-text'>Subscribe</p>
        </div>
      </div>
      <div className='card-container'>
        <div className='card'>
        <h3>Select Your Subscription Plan</h3>
        <div className="offer-cards">
          {Data.map(plan => (
            <OfferCard 
              key={plan.id}
              plan={plan}
              isSelected={selectedPlan === plan}
              onClick={() => handlePlanClick(plan)}
            />
          ))}
        </div>
        </div>
      </div>
          <hr/>
          <div className='subscription-details'>
            <p>Subscription Fee</p>
            {/* made changes */}
            <p><LiaRupeeSignSolid/>{selectedPlan ? selectedPlan.valid ? selectedPlan.total : 18500 : 0}</p>
          </div>
          <div className='offer-details'>
            <div className='time-limit'>
            <p>Limited time offer</p>
            {/* //made changes */}
            <p>- <LiaRupeeSignSolid/> {calculateDiscount()}</p>
            </div>
            <div>
            <p><img src={clock}/>Offer valid till 25th March 2023</p>
            </div>
          </div>
          <div className='total-amnt'>
            <p>Total (Incl. of 18% GST)</p>
            <p><FaRupeeSign/>{calculateTotalAmount()}</p>
          </div>
          <div className='process-btn'>
            <button className='btns btn1 '>CANCEL</button>
            <button className='btns btn2'>PROCEED TO PAY</button>
          </div>
          <div className='upi-logo'>
            <img className='logo-img' src={RazorLogo}/>
          </div>
      </div>
    </div>
  )
}

export default MainPage
