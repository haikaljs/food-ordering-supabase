import { View, Text, FlatList } from "react-native";
import orders from "@/assets/data/orders";
import OrderItemListItem from "@/src/components/OrderListItem";

const OrderScreen = () => {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderItemListItem order={item} />}
      contentContainerStyle={{gap:10, padding:10}}
    />
  );
};

export default OrderScreen;
