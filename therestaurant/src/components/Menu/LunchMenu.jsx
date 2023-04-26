import React from "react";
import { menuItems, MenuCategory, lunchItems } from "./MenuData"; 

export const LunchMenu = () => {
  return (
    <div>
      <h1>Lunchmeny</h1>
    <div className="menu">
      {lunchItems.map((category) => (
        <MenuCategory key={category.category} category={category} />
      ))}
      </div>
    </div>
  );
};
