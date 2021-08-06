const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      size: "",
      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/trousers.png",
      size: "",
      linkUrl: "shop/sneakers",
    },
    {
      id: 3,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      size: "",
      linkUrl: "shop/jackets",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;
