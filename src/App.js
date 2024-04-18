// import React, { useContext } from "react";
// import "./styles.css";

// import LandingSection from "containers/LandingSection/LandingSection";
// import Login from "containers/Login/Login";
// import Browse from 'containers/Browse/Browse'
// // import { Switch, Route, Redirect } from "react-router-dom";
// import { Routes, Route} from "react-router-dom";
// import { AuthenticationContext } from 'context/Authentication'
// import NotFoundPage from 'components/StaticPages/NotFoundPage/NotFoundPage'
// import { Signup } from "containers/Signup/Signup";
// import { SignupPlanform } from "containers/Signup/SignupPlanform";
// import Payment from "containers/Payment/Payment";

// export default function App() {
//   const authContext = useContext(AuthenticationContext)

//   const checkAuthAndSetBrowseComponent = (propsObject) => {
//     return <Browse {...propsObject} />
//   }

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/browse/*" element={<Browse route="/browse" />} />
//         <Route path="/search" element={<Browse route="/search" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/signup/planform" element={<SignupPlanform />} />
//         <Route path="/" element={<LandingSection />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </div >
//   );
// }

// //Working :
import React, { useContext } from "react";
import "./styles.css";

import LandingSection from "containers/LandingSection/LandingSection";
import Login from "containers/Login/Login";
import Browse from 'containers/Browse/Browse'
// import { Switch, Route, Redirect } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import { AuthenticationContext } from 'context/Authentication'
import NotFoundPage from 'components/StaticPages/NotFoundPage/NotFoundPage'
import { Signup } from "containers/Signup/Signup";
import { SignupPlanform } from "containers/Signup/SignupPlanform";
//import Payment from "containers/Payment/Payment";

export default function App() {
  const authContext = useContext(AuthenticationContext)

  const checkAuthAndSetBrowseComponent = (propsObject) => {
    return <Browse {...propsObject} />
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/browse/*" element={<Browse route="/browse" />} />
        <Route path="/search" element={<Browse route="/search" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/planform" element={<SignupPlanform />} />
        <Route path="/" element={<LandingSection />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div >
  );
}
