export const lunchItems = [
    {
      category: "Förrätt",
      items: [
        { name: "Friterat ostron", description: "yuzumajonnäs", price: "57" },
        { name: "Panko-panerade vannameiräkor", description: "XO-majonnäs och koriander", price: "138" },
        { name: "Edamamebönor (veg) ", description: "Yuzu, chilisalt och grillad soja", price: "67" },
        { name: "Ångade dumplings", description: "Räka, kokos- och musselsås", price: "115" },
        { name: "Steambun", description: "Sojamajonnäs, kimchi och picklad gurka", price: "99" },
      ],
    },
    {
      category: "Huvudrätt",
      items: [
        { name: "Bahn Mi", description: "Grillad kyckling, baguette, kycklinglever, vitlöksmarinerade morötter, picklad gurka och koriander", price: "179" },
        { name: "Kejsarhattveg", description: "Grillad och glaserad kejsarhatt ssäm-style med gochujangmajonnäs, picklad chili, vårlök, sesam, koriander och grillad lime", price: "169" },
        { name: "Kung Pao kyckling", description: "Kung Pao-kyckling med cashewnötter, chili, vitlök, lök, soja och sesam", price: "169" },
        { name: "Kung Pao tofu", description: "Kung Pao-tofu med cashewnötter, chili, vitlök, lök, soja och sesam", price: "169" },

      ],
    },

    { category: "Dessert",
        items: [
            { name: "Matcha cheesecake", description: "Matcha cheesecake med matcha, vit choklad och jordgubbar", price: "99" },
            { name: "Matcha pannacotta", description: "Matcha pannacotta med matcha, vit choklad och jordgubbar", price: "99" },
            { name: "Matcha chokladbollar", description: "Matcha chokladbollar med matcha, vit choklad och jordgubbar", price: "99" },
        ],
    },
  ];

  export const dinnerItems = [
    {
      category: "Förrätt",
      items: [
        { name: "Friterat ostron", description: "yuzumajonnäs", price: "57" },
        { name: "Panko-panerade vannameiräkor", description: "XO-majonnäs och koriander", price: "138" },
        { name: "Edamamebönor (veg) ", description: "Yuzu, chilisalt och grillad soja", price: "67" },
        { name: "Ångade dumplings", description: "Räka, kokos- och musselsås", price: "115" },
        { name: "Steambun", description: "Sojamajonnäs, kimchi och picklad gurka", price: "99" },
      ],
    },
    {
      category: "Huvudrätt",
      items: [
        { name: "Bahn Mi", description: "Grillad kyckling, baguette, kycklinglever, vitlöksmarinerade morötter, picklad gurka och koriander", price: "179" },
        { name: "Kejsarhattveg", description: "Grillad och glaserad kejsarhatt ssäm-style med gochujangmajonnäs, picklad chili, vårlök, sesam, koriander och grillad lime", price: "169" },
        { name: "Kung Pao kyckling", description: "Kung Pao-kyckling med cashewnötter, chili, vitlök, lök, soja och sesam", price: "169" },

      ],
    },

    { category: "Dessert",
        items: [
            { name: "Matcha cheesecake", description: "Matcha cheesecake med matcha, vit choklad och jordgubbar", price: "99" },
            { name: "Matcha pannacotta", description: "Matcha pannacotta med matcha, vit choklad och jordgubbar", price: "99" },
            { name: "Matcha chokladbollar", description: "Matcha chokladbollar med matcha, vit choklad och jordgubbar", price: "99" },
        ],
    },
  ];

  
 export const MenuItem = ({ item }) => {
    return (
      <div className="menu-item">
        <h3 className="item-header">{item.name}</h3>
        <p className="menu-desc">{item.description} {item.price}:-</p>
      </div>
    );
  };
  
  export const MenuCategory = ({ category }) => {
    return (
      <div className="menu-category">
        <h2>{category.category}</h2>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    );
  };
  