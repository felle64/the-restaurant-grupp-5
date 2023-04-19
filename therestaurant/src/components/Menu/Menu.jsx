import React, { useState } from "react";
import { LunchMenu } from "./LunchMenu";
import { DinnerMenu } from "./DinnerMenu";
import "./Menu.css";

export const Menu = () => {
  const [showLunchMenu, setShowLunchMenu] = useState(false);
  const [showDinnerMenu, setShowDinnerMenu] = useState(false);

  const showMenu = (menu) => {
    if (menu === "lunch") {
        setShowLunchMenu(true);
        setShowDinnerMenu(false);
    } else {
        setShowLunchMenu(false);
        setShowDinnerMenu(true);
    }
    };

  return (
    <div className="menu-container">
      <h1>Meny</h1>
      <div className="menu-buttons">
        <button
          className={`menu-button ${showLunchMenu ? "active" : ""}`}
          onClick={() => showMenu("lunch")}
        >
          Lunchmeny
        </button>
        <button
          className={`menu-button ${!showDinnerMenu ? "active" : ""}`}
          onClick={() => showMenu("dinner")}
        >
          Middagsmeny
        </button>
      </div>
        {showLunchMenu && <LunchMenu />}
        {showDinnerMenu && <DinnerMenu />}
    </div>
  );
};