export const lunchItems = [
	{
		category: "Förrätt",
		items: [
			{
				name: "Vietnamesiska vårrullar",
				description:
					"Färska vårrullar med räkor, glasnudlar och grönsaker, serveras med jordnötssås",
				price: "65",
			},
			{
				name: "Tofu tempura",
				description: "Krispig tofu tempura med ponzu-dipp",
				price: "59",
			},
			{
				name: "Gyoza",
				description:
					"Japanesiska ångade dumplings fyllda med kyckling och grönsaker, serveras med gyoza-sås",
				price: "75",
			},
			{
				name: "Miso-soppa",
				description:
					"Traditionell japansk miso-soppa med tofu, sjögräs och vårlök",
				price: "45",
			},
		],
	},
	{
		category: "Huvudrätt",
		items: [
			{
				name: "Pad Thai",
				description:
					"Klassisk thailändsk Pad Thai med risnudlar, ägg, tofu, böngroddar, jordnötter och lime",
				price: "130",
			},
			{
				name: "Teriyaki lax",
				description:
					"Grillad lax i teriyaki-sås serveras med jasminris och ångade grönsaker",
				price: "160",
			},
			{
				name: "Grön curry",
				description:
					"Thailändsk grön curry med kyckling, bambuskott, aubergine, röd paprika och thailändsk basilika, serveras med jasminris",
				price: "145",
			},
		],
	},

	{
		category: "Dessert",
		items: [
			{
				name: "Mango sticky rice",
				description: "Thailändsk mango sticky rice med kokosmjölk",
				price: "85",
			},
			{
				name: "Friterad banan",
				description: "Friterad banan med vaniljglass och honung",
				price: "75",
			},
			{
				name: "Mochi glass",
				description: "Japansk mochi glass i olika smaker",
				price: "60",
			},
		],
	},
];

export const dinnerItems = [
	{
		category: "Förrätt",
		items: [
			{ name: "Friterat ostron", description: "yuzumajonnäs", price: "57" },
			{
				name: "Panko-panerade vannameiräkor",
				description: "XO-majonnäs och koriander",
				price: "138",
			},
			{
				name: "Edamamebönor (veg) ",
				description: "Yuzu, chilisalt och grillad soja",
				price: "67",
			},
			{
				name: "Ångade dumplings",
				description: "Räka, kokos- och musselsås",
				price: "115",
			},
			{
				name: "Steambun",
				description: "Sojamajonnäs, kimchi och picklad gurka",
				price: "99",
			},
		],
	},
	{
		category: "Huvudrätt",
		items: [
			{
				name: "Bahn Mi",
				description:
					"Grillad kyckling, baguette, kycklinglever, vitlöksmarinerade morötter, picklad gurka och koriander",
				price: "179",
			},
			{
				name: "Kejsarhattveg",
				description:
					"Grillad och glaserad kejsarhatt ssäm-style med gochujangmajonnäs, picklad chili, vårlök, sesam, koriander och grillad lime",
				price: "169",
			},
			{
				name: "Kung Pao kyckling",
				description:
					"Kung Pao-kyckling med cashewnötter, chili, vitlök, lök, soja och sesam",
				price: "169",
			},
		],
	},

	{
		category: "Dessert",
		items: [
			{
				name: "Matcha cheesecake",
				description: "Matcha cheesecake med matcha, vit choklad och jordgubbar",
				price: "99",
			},
			{
				name: "Matcha pannacotta",
				description: "Matcha pannacotta med matcha, vit choklad och jordgubbar",
				price: "99",
			},
			{
				name: "Matcha chokladbollar",
				description:
					"Matcha chokladbollar med matcha, vit choklad och jordgubbar",
				price: "99",
			},
		],
	},
];

export const MenuItem = ({ item }) => {
	return (
		<div className='menu-item'>
			<h3 className='item-header'>{item.name}</h3>
			<p className='item-desc'>
				{item.description} {item.price}:-
			</p>
		</div>
	);
};

export const MenuCategory = ({ category }) => {
	return (
		<div className='menu-category'>
			<h2>{category.category}</h2>
			{category.items.map((item) => (
				<MenuItem
					key={item.name}
					item={item}
				/>
			))}
		</div>
	);
};
