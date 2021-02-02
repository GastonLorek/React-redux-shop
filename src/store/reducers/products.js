const intialState = [
  {
    id: 1,
    name: 'Nike SB Adversary',
    image: require('../../images/sb-adversary-skate-shoe-1.jpg'),
    images: [
      require('../../images/sb-adversary-skate-shoe-1.jpg'),
      require('../../images/sb-adversary-skate-shoe-2.jpg'),
      require('../../images/sb-adversary-skate-shoe-3.jpg'),
      require('../../images/sb-adversary-skate-shoe-4.jpg')
    ],
    description:
      'The Nike SB Adversary takes you back to the basics. Suede and textile create a classic look that s inspired by the 1982 Nike Adversary, while a combination of traditional lacing and ghillie loops let you dial in the perfect fit.',
    price: 5000,
    category: 'shoes'
  },
  {
    id: 2,
    name: 'Nike SB Zoom Blazer Mid',
    image: require('../../images/sb-zoom-blazer-mid-skate-shoe-1.jpg'),
    images: [
      require('../../images/sb-zoom-blazer-mid-skate-shoe-1.jpg'),
      require('../../images/sb-zoom-blazer-mid-skate-shoe-2.jpg'),
      require('../../images/sb-zoom-blazer-mid-skate-shoe-3.jpg'),
      require('../../images/sb-zoom-blazer-mid-skate-shoe-4.jpg')
    ],
    description:
      'The Nike SB Zoom Blazer Mid takes a heritage design and tailors it to the needs of the modern skateboarder. Soft cushioning and a flexible sole work together to provide great boardfeel and traction.',
    price: 8500,
    category: 'shoes'
  },
  {
    id: 3,
    name: 'Nike SB Charge Canvas',
    image: require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'The Nike SB Charge Canvas pairs a low-top silhouette with flexible canvas for premium performance. A dual-density insole supports your feet while you skate and cushions you through big drops and tricks.',
    price: 6500,
    category: 'shoes'
  },
  {
    id: 4,
    name: 'Nike SB Charge Canvas',
    image: require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'The Nike SB Charge Canvas pairs a low-top silhouette with flexible canvas for premium performance. A dual-density insole supports your feet while you skate and cushions you through big drops and tricks.',
    price: 6500,
    category: 'shoes'
  },
  {
    id: 5,
    name: '3MC',
    image: require('../../images/3MC_Shoes_Blue_EG8545_01_standard.jpg'),
    images: [
      require('../../images/3MC_Shoes_Blue_EG8545_01_standard.jpg'),
      require('../../images/3MC_Shoes_Blue_EG8545_02_standard.jpg'),
      require('../../images/3MC_Shoes_Blue_EG8545_04_standard.jpg'),
      require('../../images/3MC_Shoes_Blue_EG8545_06_standard.jpg')
    ],
    description:
      'No Skateboarding sign? No problem. These board-inspired adidas 3MC Shoes walk just as well as they roll. The textile upper sports clean, laid-back lines. An extra-bendy outsole keeps you comfy. The reinforced toe lets you skate (or stride) with confidence.',
    price: 5200,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 6,
    name: 'BUSENITZ VULC II',
    image: require('../../images/Busenitz_Vulc_II_Shoes_Black_EF8472_01_standard.jpg'),
    images: [
      require('../../images/Busenitz_Vulc_II_Shoes_Black_EF8472_01_standard.jpg'),
      require('../../images/Busenitz_Vulc_II_Shoes_Black_EF8472_02_standard.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'The best just got better. This redesign of legendary skater Dennis Busenitzs signature shoes one-ups the original with even more cushioning and durability. Should you need to suddenly pump the foot brakes, an abrasion-resistant toe box has your back.',
    price: 7000,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 7,
    name: 'TYSHAWN SIGNATURE',
    image: require('../../images/Tyshawn_Signature_Shoes_Black_EE6076_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'Inspired by basketball trainers but rooted in skateboarding, these skate shoes reflect the signature style of Tyshawn Jones, one of the hottest young riders in the game. The shoes are built with comfort in mind, featuring a moulded sockliner for outstanding board feel, and an EVA midsole that cushions against impact. An abrasion-resistant toe holds up to hard riding.',
    price: 7200,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 8,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 9,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 10,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 11,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 12,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 13,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 14,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 15,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  },
  {
    id: 16,
    name: 'MATCHBREAK SUPER',
    image: require('../../images/Matchbreak_Super_Shoes_White_EG2740_01_standard.jpg'),
    images: [
      require('../../images/sb-charge-canvas-mens-skate-shoe-1.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-2.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-3.jpg'),
      require('../../images/sb-charge-canvas-mens-skate-shoe-4.jpg')
    ],
    description:
      'These shoes have earned their bragging rights. After all, they are the highest-quality Vulcanized footwear ever produced by adidas Skateboarding. Offering pinnacle comfort and performance, they are ready to help you earn bragging rights of your own.',
    price: 7500,
    category: 'shoes',
    brand: 'adidas'
  }
];

const reducer = (state = intialState) => {
  return state;
};

export default reducer;
