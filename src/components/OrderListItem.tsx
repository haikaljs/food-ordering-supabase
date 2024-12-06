import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Order } from "../types";
import { Link, useSegments } from "expo-router";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type OrderItemListItemProps = {
  order: Order;
};

const OrderItemListItem = ({ order }: OrderItemListItemProps) => {
  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/orders/${order?.id}`} asChild>
      <Pressable
        style={styles.container}
        accessible={true}
        accessibilityLabel={`Order number ${order?.id}`}
      >
        <View>
          <Text style={styles.title}>Order #{order?.id || "Unknown"}</Text>
          <Text style={styles.time}>
            {order?.created_at
              ? dayjs(order.created_at).fromNow()
              : "Unknown time"}
          </Text>
        </View>

        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    marginVertical: 5,
  },

  time: {
    color: "gray",
  },

  status: {
    fontWeight: "500",
  },
});

export default OrderItemListItem;
