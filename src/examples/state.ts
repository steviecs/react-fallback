export type State = {
  isLoading: boolean;
  card: CardState;
  listItem: ListItemState[];
};

export type CardState = {
  cardAvatar: string;
  cardHeader: string;
  cardDate: string;
  cardBody: string;
  cardImage: string;
};

export type ListItemState = {
  itemTitle: string;
  itemSender: string;
  itemBody: string;
};

export const initialState = {
  isLoading: true,
  card: {
    cardAvatar: "",
    cardHeader: "",
    cardDate: "",
    cardBody: "",
    cardImage: ""
  },
  listItem: [
    {
      itemTitle: "",
      itemSender: "",
      itemBody: ""
    },
    {
      itemTitle: "",
      itemSender: "",
      itemBody: ""
    },
    {
      itemTitle: "",
      itemSender: "",
      itemBody: ""
    },
    {
      itemTitle: "",
      itemSender: "",
      itemBody: ""
    }
  ]
};

export const loadedData = {
  isLoading: false,
  card: {
    cardAvatar: "R",
    cardHeader: "Lorem ipsum dolor sit amet",
    cardDate: "September 14, 2016",
    cardBody:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    cardImage:
      "https://www.beggarspizza.com/wp-content/uploads/2020/12/thin-crust-pepperoni-slice.png"
  },
  listItem: [
    {
      itemTitle: "Lorem ipsum dolor sit amet",
      itemSender: "Lorem ipsum",
      itemBody: "Lorem ipsum dolor sit amet, consectetur adipisc…"
    },
    {
      itemTitle: "Lorem ipsum dolor sit amet",
      itemSender: "Lorem ipsum",
      itemBody: "Lorem ipsum dolor sit amet, consectetur adipisc…"
    },
    {
      itemTitle: "Lorem ipsum dolor sit amet",
      itemSender: "Lorem ipsum",
      itemBody: "Lorem ipsum dolor sit amet, consectetur adipisc…"
    },
    {
      itemTitle: "Lorem ipsum dolor sit amet",
      itemSender: "Lorem ipsum",
      itemBody: "Lorem ipsum dolor sit amet, consectetur adipisc…"
    }
  ]
};
