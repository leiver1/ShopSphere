import { ReactNode, createContext, useContext, useState } from "react";
import { OrderItem } from "@prisma/client";

interface OrderContextType {
  orderItem: OrderItem[];
  handleOrderItem: (order: OrderItem) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderItem, setOrderItem] = useState<OrderItem[]>([]);

  const handleOrderItem = (order: OrderItem) => {
    setOrderItem((prev) => [...prev, order]);
  };

  return (
    <OrderContext.Provider value={{ orderItem, handleOrderItem }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export const orderContext = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("REEEEE NOOO ORder context");
  }
};
