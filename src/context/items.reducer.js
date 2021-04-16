
export const GET_ITEMS = "GET_ITEMS"; // It returns all the items retrieved from the api search.
export const GET_PRODUCT_DESCRIPTION = "GET_PRODUCT_DESCRIPTION"; // It returns the description payload for the description page
export const GET_LOOKUP_VALUE = "GET_LOOKUP_VALUE" // It returns the value inside of the lookup input.

const itemReducer = (state, action) => {
    const { payload, type } = action;
    
    switch (type) {
      case GET_ITEMS:
        return {
          ...state,
          items: payload,
        };
      case GET_PRODUCT_DESCRIPTION:
        return {
          ...state,
          itemDescription: payload,
        };
      case GET_LOOKUP_VALUE:
        return {
          ...state,
          lookupValue: payload,
        };
      default:
        return state;
    }
  };

  export default itemReducer;