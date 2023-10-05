import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  // TEXT SLIDER STARTED.

  useEffect(() => {
    // Your text slider code here
    let TypingSpeed = 60;
    let NxtMsgDelay = 2000;
    let CharacterPos = 0;
    let MsgBuffer = "";
    let MsgIndex = 0;
    let delay;
    let id = document.getElementById("typing");
    let messages = [
      "Welcome To Our Website !",
      "Tutor Finder",
      "The Best Way To Learn From Home.",
    ];

    const StartTyping = () => {
      if (CharacterPos !== messages[MsgIndex].length) {
        MsgBuffer += messages[MsgIndex].charAt(CharacterPos);
        id.innerHTML =
          MsgBuffer +
          (CharacterPos !== messages[MsgIndex].length - 1 ? "_" : "");
        delay = TypingSpeed;
        id.scrollTop = id.scrollHeight;
      } else {
        delay = NxtMsgDelay;
        MsgBuffer = "";
        CharacterPos = -1;
        if (MsgIndex !== messages.length - 1) {
          MsgIndex++;
        } else {
          MsgIndex = 0;
        }
      }
      CharacterPos++;
      setTimeout(StartTyping, delay);
    };

    StartTyping();
  }, []);

  // TEXT SLIDER ENDED.

  return (
    <>
      <Navbar />

      {/* <!-- SLIDER START --> */}
      <div className="bgImg">
        <div className="container">
          <div id="typing" className="gradient"></div>
        </div>
      </div>

      {/* <!-- MAIN STARTED --> */}
      <main>
        {/* <!-- HERO SECTION STARTED --> */}
        <div className="mainBox1">
          <div className="container">
            <div className="box1Wrapper d-flex justify-content-between align-items-center gap-3 col-12">
              <div className="imgSection1 col-6">
                <img
                  src="https://cdn.pixabay.com/photo/2015/11/03/09/09/magnifying-glass-1020142_640.jpg"
                  alt="img"
                  height="450px"
                  className="col-9"
                />
              </div>

              <div className="textSection1 col-6">
                <h2 className="col-6">
                  Search{" "}
                  <i className="fa-solid fa-magnifying-glass gradient"></i>
                </h2>

                <p className="col-10">
                  Find <span className="gradient">home tutor</span> according to
                  your requirement. Hire tutor on
                  <span className="gradient">single click</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FIRST BOX ENDED --> */}

        {/* <!-- SECOND BOX STARTED --> */}
        <div className="mainBox1" style={{ backgroundColor: "#f6f6f6" }}>
          <div className="container">
            <div className="box1Wrapper d-flex justify-content-between align-items-center col-12">
              <div className="textSection1 col-6">
                <h2 className="col-6">
                  Select <i className="fa-regular fa-circle-check gradient"></i>
                </h2>

                <p className="col-10">
                  View <span className="gradient">tutors profile</span> and hire
                  a tutor who suits you best according to
                  <span className="gradient">your need</span>.
                </p>
              </div>

              <div className="imgSection1 col-6">
                <img
                  src="https://cdn.pixabay.com/photo/2017/02/02/09/16/unique-2032274_1280.png"
                  alt="img"
                  height="450px"
                  className="col-11"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- SECOND BOX ENDED --> */}

        {/* <!-- THIRD BOX STARTED --> */}
        <div className="mainBox1">
          <div className="container">
            <div className="box1Wrapper d-flex justify-content-between align-items-center gap-3 col-12">
              <div className="imgSection1 col-6">
                <img
                  src="https://cdn.pixabay.com/photo/2015/11/03/08/54/laptop-1019763_640.jpg"
                  alt="img"
                  height="450px"
                  className="col-9"
                />
              </div>

              <div className="textSection1 col-6">
                <h2 className="col-6">
                  Study <i className="fa-solid fa-book gradient"></i>
                </h2>

                <p className="col-10">
                  <span className="gradient">TutorFinder</span> handles the
                  behind the scenes stuff so you can focus on
                  <span className="gradient">your study</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- THIRD BOX ENDED --> */}
        {/* <!-- HERO SECTION ENDED --> */}
      </main>
      {/* <!-- MAIN ENDED --> */}

      <Footer />
    </>
  );
};

export default Home;
