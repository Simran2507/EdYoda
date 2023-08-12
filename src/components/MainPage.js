import React from 'react';
import './MainPage.css';
import { useState } from 'react';
import book from '../assets/book.png'
import clock from '../assets/clock.png'
import live from '../assets/live.png'
import noAdd from '../assets/no-add.png'
import scholar from '../assets/scholar.png'
import { LiaRupeeSignSolid } from 'react-icons/lia';
import {BsClockHistory} from 'react-icons/bs'
import OfferCard from './OfferCards'
import Data from '../Data'
import RazorLogo from '../assets/razorpay.png'

const MainPage = () => {
  //adding states

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [color,setColor] = useState();

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setColor('#47BA68');
  };

  const calculateDiscount = () => {
    if(selectedPlan){
      const actualprice = 18500 - selectedPlan.total;
      return actualprice;
    }
    return 0;
  };

  const calculateTotalAmount = () => {
    if(selectedPlan){
      return selectedPlan.total;
    }
    return 0;
  };

  return (
    <div className='mainpage-container'>
      <div className='left-container'>
        <h2>Access curated courses worth</h2> 
        <h2 ><LiaRupeeSignSolid/><s className='cut-text'>18,500</s> at just <span className='highlight-text a' ><LiaRupeeSignSolid/>99</span> per year !</h2>
        <div className='benefits'>
          <p><img src={book} className='icon' alt='icons'/><span className='highlight-text' >100+</span> Job relevant courses</p>
          <p><img src={clock} className='icon' alt='icons'/><span className='highlight-text'>20,000+</span> Hours of content</p>
          <p><img src={live} className='icon' alt='icons'/><span className='highlight-text'>Exclusive</span> webinar access</p>
          <p><img src={scholar} className='icon' alt='icons'/> Scholarship worth <span className='highlight-text'><LiaRupeeSignSolid/> 94,500</span></p>
          <p><img src={noAdd} className='icon' alt='icons'/><span className='highlight-text'>Ad free</span> learning experience </p>
        </div>
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
              color={color}
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
            <div className='discount'>
              <p>Limited time offer</p>
              <p>    - <LiaRupeeSignSolid/>{calculateDiscount()}</p>
            </div>
            <div className='last-date'>
              <p><BsClockHistory style={{fontWeight:'bold'}}/>  Offer valid till 25th March 2023</p>
            </div>
          </div>
          <div className='total-amnt'>
            <p><strong>Total</strong> (Incl. of 18% GST)</p>
            <p><strong className='final-amnt'><LiaRupeeSignSolid/>{calculateTotalAmount()}</strong></p>
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

export default MainPage;