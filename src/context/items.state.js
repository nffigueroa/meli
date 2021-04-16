import { useReducer } from "react";
import { doSearchItemDescription, doSearchResults } from "../services/search";
import ItemContext from "./items.context";
import itemsReducer, {
  GET_ITEMS,
  GET_LOOKUP_VALUE,
  GET_PRODUCT_DESCRIPTION,
} from "./items.reducer";

const ItemState = ({ children }) => {
  const initialState = {
    items: [],
    itemDescription: {},
  };

  const [state, dispatch] = useReducer(itemsReducer, initialState);
  const getSearchByName = async (value) => {
    const { data } = await doSearchResults(value);
    dispatch({ type: GET_ITEMS, payload: data });
  };
  const getItemDescription = async (value) => {
    const { data } = await doSearchItemDescription(value);
    dispatch({ type: GET_PRODUCT_DESCRIPTION, payload: data });
  };

  const getlookUpValue = (value) => {
    dispatch({ type: GET_LOOKUP_VALUE, payload: value });
  };

  return (
    <ItemContext.Provider
      value={{
        lookupValue: state.lookupValue,
        items: state.items,
        itemDescription: state.itemDescription,
        getSearchByName,
        getItemDescription,
        getlookUpValue,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemState;
