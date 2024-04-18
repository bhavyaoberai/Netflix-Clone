//Old:
// Import necessary dependencies
import React, { useState, useContext } from "react";
import "./Login.css";
import { NetflixLogo, LoginBackground2 } from "assets/images/";
import { TextField } from "@material-ui/core";
import Button from "components/UI/Button/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from "react-router-dom";
//import { AuthenticationContext } from "context/Authentication";
import { validEmailAndPhoneNumber } from "utils/validation";
import Axios from "axios";
import jwt_decode from "jwt-decode";

// Declare userId variable
let userId;

// Main component
const Login = (props) => {
  // Initialize state for form inputs
  const [form, setForm] = useState({
    email: {
      value: "",
      touched: false,
      valid: false,
    },
    password: {
      value: "",
      touched: false,
      valid: false,
    },
    onSubmitInvalid: false,
  });

  // Get navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle input changes
  const inputChangeHandler = (event) => {
    // Extract input name and value from the event
    const { name, value } = event.target;

    // Update state based on the input name
    if (name === "email") {
      setForm((prevForm) => ({
        ...prevForm,
        email: {
          ...prevForm.email,
          value: value,
          touched: true,
          valid: value.length > 0 && validEmailAndPhoneNumber(value),
        },
      }));
    } else if (name === "password") {
      setForm((prevForm) => ({
        ...prevForm,
        password: {
          ...prevForm.password,
          value: value,
          touched: true,
          valid: value.length >= 4 && value.length <= 60,
        },
      }));
    }
  };

  // Function to handle onBlur events for input fields
  const fieldBlurHandler = (event) => {
    if (event.target.name === "email") {
      if (form.email.value === "") {
        setForm((prevForm) => ({
          ...prevForm,
          email: { ...prevForm.email, touched: true },
        }));
      }
    }

    if (event.target.name === "password") {
      if (form.password.value === "") {
        setForm((prevForm) => ({
          ...prevForm,
          password: { ...prevForm.password, touched: true },
        }));
      }
    }
  };

  // Initialize emailSpan and passwordSpan variables
  let [emailSpan, passwordSpan] = [null, null];

  // Check email validity and update emailSpan
  if (
    (!form.email.valid && form.email.touched) ||
    (form.onSubmitInvalid && !form.email.valid)
  ) {
    emailSpan = <span>Please enter a valid email or phone number.</span>;
  }

  // Check password validity and update passwordSpan
  if (
    (!form.password.valid && form.password.touched) ||
    (form.onSubmitInvalid && !form.password.valid)
  ) {
    passwordSpan = (
      <span>Your password must contain between 4 and 60 characters.</span>
    );
  }

  // Function to check user subscription plan
  const checkForPlan = async () => {
    await Axios({
      method: "post",
      url: `https://localhost:7161/api/Subscription/${localStorage.getItem(
        "userId"
      )}`,
      data: {
        userId: localStorage.getItem("userId"),
      },
    })
      .then((res) => {
        console.log(res.data);
        if (
          res.data === "No subscriptions found for the specified user."
        ) {
          alert("You are not subscribed to any plan");
          setTimeout(() => {
            navigate("/signup/planform");
          }, 1000);
        } else {
          alert("You are already subscribed to a plan");
          setTimeout(() => {
            navigate("/browse");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log("hello");
      });
  };

  // Function to handle form submission
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Email:", form.email.value);
    console.log("Password:", form.password.value);
    if (!form.email.valid || !form.password.valid) {
      setForm((prevForm) => ({ ...prevForm, onSubmitInvalid: true }));
      console.log("Hi i am inside form validation")
    } else {
      Axios({
        method: "post",
        url:
          "https://localhost:7161/api/UsersAuth/login",
        data: {
          email: form.email.value,
          password: form.password.value,
        },
      })
        .then((res) => {
          console.log("API Response:", res);
          userId = res.data.token;
          
          console.log("Decoded Token:", jwt_decode(userId));

          localStorage.setItem("token", userId);
          userId = jwt_decode(userId);
          localStorage.setItem("userId", userId.name);
          localStorage.setItem("email",userId.email);
          
          console.log("localStorage userId:", localStorage.getItem("userId"));
          // console.log(userId.unique_name);
          if (res.status === 200) {
            checkForPlan();
          }
        })
        .catch((err) => {
          alert("Invalid Credentials/Either you are not registered");
        });
    }
  };

  // Render the component
  return (
    <div
      className="Login"
      style={{ backgroundImage: `url(${LoginBackground2})` }}
    >
      <img src={NetflixLogo} alt="Logo" onClick={() => navigate("/")} />
      <div className="LoginCard1">
        <h1>Sign In</h1>
        <form onSubmit={formSubmitHandler}>
          <TextField
            name="email"
            className="textField"
            label="Email or phone number"
            variant="filled"
            type="text"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            color="secondary"
            value={form.email.value}
            onChange={inputChangeHandler}
            onBlur={fieldBlurHandler}
            autoComplete="off"
            InputLabelProps={{
              style: { color: "#8c8c8c" },
            }}
          />

          {emailSpan}

          <TextField
            name="password"
            className="textField"
            label="Password"
            variant="filled"
            type="password"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            color="white"
            value={form.password.value}
            onChange={inputChangeHandler}
            onBlur={fieldBlurHandler}
            autoComplete="off"
            InputLabelProps={{
              style: { color: "#8c8c8c" },
            }}
          />

          {passwordSpan}

          <Button
            height="45px"
            width="100%"
            backgroundColor="#e50914"
            textColor="#fff"
            type="submit"
          >
            Sign In
          </Button>
        </form>

        <div className="HorizontalDiv">
          <FormControlLabel
            style={{ marginLeft: "-12px" }}
            control={
              <Checkbox style={{ color: "rgb(229, 9, 20)" }} name="checkedB" />
            }
            label="Remember Me"
          />
          <span>Need help?</span>
        </div>
        <p
          style={{
            color: "#8c8c8c",
            fontSize: "1.2rem",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          New to Netflix?{" "}
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Sign up now.
          </span>
        </p>
      </div>
    </div>
  );
};

// Export the component
export default Login;









// //new

// import React, { useState, useContext } from "react";
// import "./Login.css";

// import { NetflixLogo, LoginBackground2 } from "assets/images/";
// import { TextField } from "@material-ui/core";
// import Button from "components/UI/Button/Button";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import { useHistory } from "react-router-dom";
// import { AuthenticationContext } from "context/Authentication";
// import { validEmailAndPhoneNumber } from "utils/validation";
// import Axios from "axios";


// // jwt decode

// import jwt_decode from "jwt-decode";

// /**
//  * The login component, which validates the email and password
//  * fields and uses a controlled form. Uses material UI for the
//  * textfields.
//  *
//  *
//  *
//  */

// let userId;

// const Login = (props) => {  
// ""
//   const[tken,setToken]=useState("");
// const[email,setEmail]=useState("");
// const[password,setPassword]=useState("");

//   const [form, setForm] = useState({
//     email: {
//       value: "",
//       touched: false,
//       valid: false,
//     },

//     password: {
//       value: "",
//       touched: false,
//       valid: false,
//     },

//     onSubmitInvalid: false,
//   });

//   const history = useHistory();
//   // const authContext = useContext(AuthenticationContext);

//   const inputChangeHandler = (event) => {
//     const { name, value } = event.target;
//     if (name === "email") {
//       setForm((prevForm) => ({
//         ...prevForm,
//         email: {
//           ...prevForm.email,
//           value: value,
//           touched: true,
//           valid: value.length > 0 && validEmailAndPhoneNumber(value),
//         },
//       }));
//     } else if (name === "password") {
//       setForm((prevForm) => ({
//         ...prevForm,
//         password: {
//           ...prevForm.password,
//           value: value,
//           touched: true,
//           valid: value.length >= 4 && value.length <= 60,
//         },
//       }));
//     }
//   };

//   // For setting error spans once any of the fields are touched.
//   const fieldBlurHandler = (event) => {
//     if (event.target.name === "email") {
//       if (form.email.value === "") {
//         setForm((prevForm) => ({
//           ...prevForm,
//           email: { ...prevForm.email, touched: true },
//         }));
//       }
//     }

//     if (event.target.name === "password") {
//       if (form.password.value === "") {
//         setForm((prevForm) => ({
//           ...prevForm,
//           password: { ...prevForm.password, touched: true },
//         }));
//       }
//     }
//   };

//   let [emailSpan, passwordSpan] = [null, null];

//   if (
//     (!form.email.valid && form.email.touched) ||
//     (form.onSubmitInvalid && !form.email.valid)
//   ) {
//     emailSpan = <span>Please enter a valid email or phone number.</span>;
//   }

//   if (
//     (!form.password.valid && form.password.touched) ||
//     (form.onSubmitInvalid && !form.password.valid)
//   ) {
//     passwordSpan = (
//       <span>Your password must contain between 4 and 60 characters.</span>
//     );
//   }

//   const checkForPlan = async () => {

//     await Axios({
//       method: "post",
//       url: `https://localhost:7161/api/Subscription${localStorage.getItem('userId')}`,
//       // headers: {
//       //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//       // },
      
//       data: {
//         userId: localStorage.getItem("userId"),
//       }
//     })
//       .then((res) => {
//         console.log(res.data);
//         if(res.data === "No subscriptions found for the specified user."){
//           alert("You are not subscribed to any plan");
//           setTimeout(() => {
//             history.push("/signup/planform");
//           },1000);
//         }
//         else{
//           alert("You are already subscribed to a plan");
//           setTimeout(() => {
//             history.push("/browse");
//         },1000);
//         }
//       })
//       .catch((err) => {
//         console.log("hello");
//       });

//   }

//   const formSubmitHandler = async(event) => {
//     event.preventDefault();
//     try{
//       const res=await Axios.post("https://localhost:7161/api/UsersAuth/login",{email,password});
//       setToken(res.data);
//       // console.log(tken.token)
//       localStorage.setItem("Email", email);
//       localStorage.setItem( "token",tken.token);
//     }
//     catch(err)
//     {
//       console.log(err);
//     }
//   };
// //     return (
// //     <div
// //       className="Login"
// //       style={{ backgroundImage: `url(${LoginBackground2})` }}
// //     >
// //       <img src={NetflixLogo} alt="Logo" onClick={() => history.push("/")} />
// //       <div className="LoginCard1">
// //         <h1>Sign In</h1>
// //         <form onSubmit={formSubmitHandler}>
// //           <TextField
// //             name="email"
// //             className="textField"
// //             label="Email or phone number"
// //             variant="filled"
// //             type="text"
// //             style={{ backgroundColor: "#333" }}
// //             color="secondary"
// //             value={form.email.value}
// //             onChange={(e) => setEmail(e.target.value)}
// //             onBlur={fieldBlurHandler}
// //             autoComplete="off"
// //             InputLabelProps={{
// //               style: { color: "#8c8c8c" },
// //             }}
// //           />

// //           {emailSpan}

// //           <TextField
// //             name="password"
// //             className="textField"
// //             label="Password"
// //             variant="filled"
// //             type="password"
// //             style={{ backgroundColor: "#333" }}
// //             color="secondary"
// //             value={form.password.value}
// //             onChange={(e) => setPassword(e.target.value)}
// //             onBlur={fieldBlurHandler}
// //             autoComplete="off"
// //             InputLabelProps={{
// //               style: { color: "#8c8c8c" },
// //             }}
// //           />

// //           {passwordSpan}

// //           <Button
// //             height="45px"
// //             width="100%"
// //             backgroundColor="#e50914"
// //             textColor="#fff"
// //           >
// //             Sign In
// //           </Button>
// //         </form>

// //         <div className="HorizontalDiv">
// //           <FormControlLabel
// //             style={{ marginLeft: "-12px" }}
// //             control={
// //               <Checkbox style={{ color: "rgb(229, 9, 20)" }} name="checkedB" />
// //             }
// //             label="Remember Me"
// //           />
// //           <span>Need help?</span>
// //         </div>
// //         <p
// //           style={{
// //             color: "#8c8c8c",
// //             fontSize: "1.2rem",
// //             textAlign: "center",
// //             marginTop: "1rem",
// //           }}
// //         >
// //           New to Netflix?{" "}
// //           <span
// //             style={{
// //               color: "#fff",
// //               fontWeight: "bold",
// //               cursor: "pointer",
// //             }}
// //             onClick={() => history.push("/")}
// //           >
// //             Sign up now.
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

//   return (
//     <div
//       className="Login"
//       style={{ backgroundImage: `url(${LoginBackground2})` }}
//     >
//       <img src={NetflixLogo} alt="Logo" onClick={() => history.push("/")} />
//       <div className="LoginCard1">
//         <h1>Sign In</h1>
//         <form onSubmit={formSubmitHandler}>
//           <input type="email" placeholder="email"  onChange={(e) => setEmail(e.target.value)} />
//           <input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)} />

//           {emailSpan}

          

//           {passwordSpan}

//           <Button
//           // onClick={formSubmitHandler}
//             height="45px"
//             width="100%"
//             backgroundColor="#e50914"
//             textColor="#fff"
//           >
//             Sign In
//           </Button>
//         </form>

//         <div className="HorizontalDiv">
//           <FormControlLabel
//             style={{ marginLeft: "-12px" }}
//             control={
//               <Checkbox style={{ color: "rgb(229, 9, 20)" }} name="checkedB" />
//             }
//             label="Remember Me"
//           />
//           <span>Need help?</span>
//         </div>
//         <p
//           style={{
//             color: "#8c8c8c",
//             fontSize: "1.2rem",
//             textAlign: "center",
//             marginTop: "1rem",
//           }}
//         >
//           New to Netflix?{" "}
//           <span
//             style={{
//               color: "#fff",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             onClick={() => history.push("/")}
//           >
//             Sign up now.
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
