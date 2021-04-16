import { createContext } from "react";

const ItemContext = createContext({
  items: {results: []},
  itemDescription: {},
  lookupValue: '',
  getItemDescription: async (value) => {},
  getSearchByName: async (value) => {},
  getlookUpValue: (value) => {}
});

export default ItemContext;
