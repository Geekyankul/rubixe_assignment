import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="Cards_container">
      <div className="h1_div">
        <h1>TECH FOR TEENS - A RUBIXE ® INITATIVE</h1>
      </div>

      <div className="cards_div ">
        <div className="cards div_1">
          <div className="card_1">
            {" "}
            <div className="num">
              <h2>01</h2>
            </div>
          </div>
          <div className="card_2">
            <p>Introducing AI to children in an age appropriate manner.</p>
          </div>
          <div className="card_3"></div>
        </div>
        <div className="cards div_2">
          <div className="card_1"></div>
          <div className="card_2">
            <p>Gain awareness on AI and build an intractive story around it.</p>
          </div>
          <div className="card_3">
            <div className="num">
              <h2>02</h2>
            </div>
          </div>
        </div>
        <div className="cards div_3">
          <div className="card_1">
            <div className="num">
              <h2>03</h2>
            </div>
          </div>
          <div className="card_2">
            <p>Acquire programming skills in a user friendly format.</p>
          </div>
          <div className="card_3"></div>
        </div>
        <div className="cards div_4">
          <div className="card_1"></div>
          <div className="card_2">
            <p>Exposure to mini projects on diverse topics.</p>
          </div>
          <div className="card_3">
            <div className="num">
              <h2>04</h2>
            </div>
          </div>
        </div>
        <div className="cards div_5">
          <div className="card_1">
            <div className="num">
              <h2>05</h2>
            </div>
          </div>
          <div className="card_2">
            <p>Train thr teachers programme.</p>
          </div>
          <div className="card_3"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
