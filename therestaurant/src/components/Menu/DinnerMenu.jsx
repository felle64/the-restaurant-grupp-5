import React from "react";
import { MenuCategory, dinnerItems } from "./MenuData";

export const DinnerMenu = () => {
	return (
		<div>
			<h1>Middagsmeny</h1>
			<div className='menu'>
				{dinnerItems.map((category) => (
					<MenuCategory
						key={category.category}
						category={category}
					/>
				))}
			</div>
		</div>
	);
};
