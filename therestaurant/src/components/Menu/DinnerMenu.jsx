import React from "react";
import { menuItems, MenuCategory, dinnerItems } from "./MenuData"; 

export const DinnerMenu = () => {
  return (
    <div>
    <div className="menu">
      {dinnerItems.map((category) => (
        <MenuCategory key={category.category} category={category} />
      ))}
      </div>
    </div>
  );
};