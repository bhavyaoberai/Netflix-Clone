// import React from 'react'
// import './SignUpPlan.css'
// import Axios from 'axios';
// //import { loadStripe } from '@stripe/stripe-js';

// // Assets
// import { NetflixLogo, LoginBackground2 } from "../../assets/images/";
// import { useNavigate } from 'react-router-dom';


// export const SignupPlanform = () => {

  

//   // Current Date
//   const date = new Date();
//   // generate time like this  "2023-09-14T09:31:37.111Z",
//   const currentTime = date.toISOString();

//   const navigate = useNavigate();
//   // One month from now
//   const oneMonthFromNow = new Date(date.setMonth(date.getMonth() + 1));
// // const clickToSubscribe2 = () =>{
// //  localStorage.getItem("userId",JSON.stringify("email"));
// // }
//   const clickToSubscribe = (price) => {
    
//     //const stripe=await loadStripe("");
//     Axios({
//       method: "post",
//       url: "https://localhost:7161/api/Subscription",
//       data: {
//         userId: `${localStorage.getItem("userId")}`,
//         paymentMethodToken: "online",
//         amount: price,
//         startDate: `${currentTime}`,
//         endDate: `${oneMonthFromNow.toISOString()}`,
//       },
      
//     }).then((res) => {
//       if(res.status === 200){
//         alert("Subscription Successful");
//         setTimeout(() => {
//           navigate("/browse");

//       },1000);
//     }
//     });
//   };
//   const clickToLogout = () =>{
//     localStorage.clear();
//     navigate('/')
//   }

//   return (
//     <div>
//       <div className="Signup">
//         <img src={NetflixLogo} alt="Logo" />
//         <button  style={{
//     background: '#e50914', // Netflix red color
//     color: 'white',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   }} onClick={clickToLogout}>Sign Out</button>
//       </div>

//       <div className="plancard__container">
//         <div className="plancard__container__header">
//           <h1>Choose your plan that’s right for you</h1>
//         </div>
//         <div className="plancard__container__body">
//           <div className="plancard__container__body__card">
//             <div className="plancard__container__body__card__header">
//               <h2>Basic</h2>
//               <h3>Perfect for your first time</h3>
//             </div>
//             <div className="plancard__container__body__card__body">
//               <ul>
//                 <li>
//                   <span>
//                     <strong>₹ 199</strong> / month
//                   </span>
//                 </li>
//                 <li>Unlimited movies and TV shows</li>
//                 <li>Watch on your laptop, TV, phone and tablet</li>
//                 <li>Cancel anytime</li>
//               </ul>
//             </div>
//             <div className="plancard__container__body__card__footer">
//               <button onClick={() => clickToSubscribe(199)}>Subscribe</button>
//             </div>
//           </div>
//           <div className="plancard__container__body__card">
//             <div className="plancard__container__body__card__header">
//               <h2>Standard</h2>
//               <h3>Perfect for your first time</h3>
//             </div>
//             <div className="plancard__container__body__card__body">
//               <ul>
//                 <li>
//                   <span>
//                     <strong>₹ 649</strong> / month
//                   </span>
//                 </li>
//                 <li>Unlimited movies and TV shows</li>
//                 <li>Watch on your laptop, TV, phone and tablet</li>
//                 <li>Cancel anytime</li>
//               </ul>
//             </div>
//             <div className="plancard__container__body__card__footer">
//               <button onClick={() => clickToSubscribe(649)}>Subscribe</button>
//             </div>
//           </div>
//           <div className="plancard__container__body__card">
//             <div className="plancard__container__body__card__header">
//               <h2>Premium</h2>
//               <h3>Perfect for your first time</h3>
//             </div>
//             <div className="plancard__container__body__card__body">
//               <ul>
//                 <li>
//                   <span>
//                     <strong>₹ 799</strong> / month
//                   </span>
//                 </li>
//                 <li>Unlimited movies and TV shows</li>
//                 <li>Watch on your laptop, TV, phone and tablet</li>
//                 <li>Cancel anytime</li>
//               </ul>
//             </div>
//             <div className="plancard__container__body__card__footer">
//               <button onClick={() => clickToSubscribe(799)}>Subscribe</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



//Working
import React from 'react'
import './SignUpPlan.css'
import Axios from 'axios';
//import { loadStripe } from '@stripe/stripe-js';

// Assets
import { NetflixLogo, LoginBackground2 } from "../../assets/images/";
import { useNavigate } from 'react-router-dom';


export const SignupPlanform = () => {

  

  // Current Date
  const date = new Date();
  // generate time like this  "2023-09-14T09:31:37.111Z",
  const currentTime = date.toISOString();

  const navigate = useNavigate();
  // One month from now
  const oneMonthFromNow = new Date(date.setMonth(date.getMonth() + 1));
  const subscriptionDetails = [
    {
      id:1,
      description:'Basic Plan',
      price:199,
    },
    {
      id:2,
      description:'Standard Plan',
      price:649,
    },
    {
      id:3,
      description:'Premium Plan',
      price:799,
    },
  ];

  const clickToSubscribe = (price) => {
    //const{id,description,price}=price
    Axios({
      method: "post",
      url: "https://localhost:7161/api/Subscription",
      data: {
        userId: `${localStorage.getItem("userId")}`,
        paymentMethodToken: "online",
        amount: price,
        startDate: `${currentTime}`,
        endDate: `${oneMonthFromNow.toISOString()}`,
      },
    }).then((res) => {
      if(res.status === 200){
        alert("Subscription Successful");
        setTimeout(() => {
          navigate("/browse");

      },1000);
    }
    });
  };
  const clickToLogout = () =>{
    localStorage.clear();
    navigate('/')
  }

  return (
    <div>
      <div className="Signup">
        <img src={NetflixLogo} alt="Logo" />
        <button  style={{
    background: '#e50914', // Netflix red color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  }} onClick={clickToLogout}>Sign Out</button>
      </div>

      <div className="plancard__container">
        <div className="plancard__container__header">
          <h1>Choose your plan that’s right for you</h1>
        </div>
        <div className="plancard__container__body">
          <div className="plancard__container__body__card">
            <div className="plancard__container__body__card__header">
              <h2>Basic</h2>
              <h3>Perfect for your first time</h3>
            </div>
            <div className="plancard__container__body__card__body">
              <ul>
                <li>
                  <span>
                    <strong>₹ 199</strong> / month
                  </span>
                </li>
                <li>Unlimited movies and TV shows</li>
                <li>Watch on your laptop, TV, phone and tablet</li>
                <li>Cancel anytime</li>
              </ul>
            </div>
            <div className="plancard__container__body__card__footer">
              <button onClick={() => clickToSubscribe(199)}>Subscribe</button>
            </div>
          </div>
          <div className="plancard__container__body__card">
            <div className="plancard__container__body__card__header">
              <h2>Standard</h2>
              <h3>Perfect for your first time</h3>
            </div>
            <div className="plancard__container__body__card__body">
              <ul>
                <li>
                  <span>
                    <strong>₹ 649</strong> / month
                  </span>
                </li>
                <li>Unlimited movies and TV shows</li>
                <li>Watch on your laptop, TV, phone and tablet</li>
                <li>Cancel anytime</li>
              </ul>
            </div>
            <div className="plancard__container__body__card__footer">
              <button onClick={() => clickToSubscribe(649)}>Subscribe</button>
            </div>
          </div>
          <div className="plancard__container__body__card">
            <div className="plancard__container__body__card__header">
              <h2>Premium</h2>
              <h3>Perfect for your first time</h3>
            </div>
            <div className="plancard__container__body__card__body">
              <ul>
                <li>
                  <span>
                    <strong>₹ 799</strong> / month
                  </span>
                </li>
                <li>Unlimited movies and TV shows</li>
                <li>Watch on your laptop, TV, phone and tablet</li>
                <li>Cancel anytime</li>
              </ul>
            </div>
            <div className="plancard__container__body__card__footer">
              <button onClick={() => clickToSubscribe(799)}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
