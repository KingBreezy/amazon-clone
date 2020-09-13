import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  //const [loaded , setLoaded] = useState('')
  console.log( `this is a user ${user?.uid}`)
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          (setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })))
          )
        );
    } else {
      setOrders([]);
    }
  },[user] );
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="order__order">
        {orders?.map((order, index) => {
          return (
            <div key={index}>
              {console.log(`order is ${order}`)}
              <Order order={order} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
