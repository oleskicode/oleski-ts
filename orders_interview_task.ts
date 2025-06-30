// You are given an array of Order objects.
// Each order has a customer, an array of items, and a status.
// You must write a function that returns a summary object with:
// Total number of orders. Total revenue (sum of all item prices).
// A list of all unique customer names.

type OrderStatus = "pending" | "shipped" | "cancelled";

interface OrderItem {
  name: string;
  price: number;
}

interface Order {
  id: number;
  customer: string;
  status: OrderStatus;
  items: OrderItem[];
}

const orders: Order[] = [
  {
    id: 1,
    customer: "Alice",
    status: "pending",
    items: [
      { name: "Book", price: 12.99 },
      { name: "Pen", price: 1.5 },
    ],
  },
  {
    id: 2,
    customer: "Chris",
    status: "shipped",
    items: [{ name: "Laptop", price: 899.99 }],
  },
  {
    id: 3,
    customer: "Alice",
    status: "cancelled",
    items: [],
  },
  {
    id: 4,
    customer: "Bob",
    status: "shipped",
    items: [{ name: "Phone", price: 550 }],
  },
];

/* Expected Output: {
  totalOrders: ... ,
  totalRevenue: ... ,
  uniqueCustomers: ["Alice", etc]
} */

function summarizeOrders(orders: Order[]) {
  let totalOrders: number = orders.length;
  console.log("Total Orders: " + totalOrders);

  let totalRevenue: number = 0;
  const uniqueCustomers: string[] = [];

  orders.forEach((order) => {
    // find unique customers
    if (!uniqueCustomers.includes(order.customer)) {
      uniqueCustomers.push(order.customer);
    }
    if (order.status !== "cancelled") {
      // add to total revenue
      order.items.forEach((item) => {
        totalRevenue += item.price;
      });
    }
  });

  return {
    totalOrders,
    totalRevenue,
    uniqueCustomers: uniqueCustomers.sort(),
  };
}

console.log(summarizeOrders(orders));
