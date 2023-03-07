import { createContext } from "react";

const OrderContext = createContext();

export function OrderContextProvider({ props }) {
  return <OrderContext.Provider value {...props}></OrderContext.Provider>;
}
