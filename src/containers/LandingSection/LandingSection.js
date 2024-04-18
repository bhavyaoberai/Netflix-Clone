import React, { useState } from "react";
import "./LandingSection.css";

import NavBar from "../NavBar/NavBar";
import LandingPage from "assets/images/landingPage.jpg";
import LandingPage2 from "assets/images/landingPage2.jpg";
import { TextField } from "@material-ui/core";
import Button from "components/UI/Button/Button";
import DarkComponent from "components/UI/DarkComponent/DarkComponent";
import FAQComponent from "components/UI/FAQComponent/FAQComponent";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { texualMaterial } from "./LandingSectionTexts";

import { useNavigate } from "react-router-dom";

/**
 * The 'homepage' of this project. Uses an object state to
 * dynamically determine which frequently asked box is open.
 * Renders components like navbars, darkComponents, etc and
 * passes the relevent props whenever needed.
 */
const LandingSection = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const onClickHandler = () => {
    console.log(email);

    if (email) {
      localStorage.setItem("email", email);

      setTimeout(() => {
        navigate("/signup");
      }, 1000);
    }
    else{
      alert("Please enter a valid email address")
    }
  };
  const [faqBoxOpen, setFaqBoxOpen] = useState({});

  const faqOpenHandler = (boxNumber) => {
    setFaqBoxOpen((prevBoxState) => ({
      [boxNumber]: !prevBoxState[boxNumber],
    }));
  };

  const darkComponents = texualMaterial.darkComponent.map((darkcomp) => (
    <div className="tv-section" key={darkcomp.id}>
      <div className="responsive-tv-inner">
        <DarkComponent
          topText={darkcomp.topText}
          bottomText={darkcomp.bottomText}
          image={darkcomp.image}
        />
      </div>
    </div>
  ));

  const faqComponents = texualMaterial.faqComponent.map((faqcomp) => (
    <FAQComponent
      key={faqcomp.id}
      text={faqcomp.text}
      boxOpen={faqBoxOpen[`box${faqcomp.id}`]}
      faqOpenHandler={() => faqOpenHandler(`box${faqcomp.id}`)}
      boxText={faqcomp.boxText}
    />
  ));

  return (
    <>
      <div
        className="landingSection"
        style={{
          backgroundImage: `url(${LandingPage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          position: "relative",
          zIndex: "1",
          overflow: "hidden",
        }}
      >
        <NavBar loginButton />
        <div className="landingTexts">
          <h1 className="default-ltr-cache-19f4kxn">
            The biggest Indian hits. The best Indian stories. All streaming
            here.
          </h1>
          <p className="default-ltr-cache-1ndpmgo">
            Watch anywhere. Cancel anytime.
          </p>
          <h3 className="default-ltr-cache-btlj1u">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="ButtonSticker">
            <TextField
              className="TextField"
              label="Email Address"
              onChange={emailChangeHandler}
              variant="filled"
              color="secondary"
            />

            <div onClick={onClickHandler}>
              <Button
                height="56px"
                width="150px"
                image
                icon={faChevronRight}
                backgroundColor="#e50914"
                textColor="#fff"
                buttonSize="xs"
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      </div>

      {darkComponents}

      <div className="faq-section">
        <div className="tv-inner">
          <DarkComponent
            fontSize="2.5rem"
            topText="Frequently Asked Questions"
          />

          {faqComponents}

          <div className="GetStartedComponent">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="ButtonSticker">
              <TextField
                className="TextField"
                label="Email Address"
                variant="filled"
                color="secondary"
              />

              <Link to="/login">
                <Button
                  height="56px"
                  width="150px"
                  image
                  icon={faChevronRight}
                  backgroundColor="#e50914"
                  textColor="#fff"
                  buttonSize="xs"
                >
                  GET STARTED
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
