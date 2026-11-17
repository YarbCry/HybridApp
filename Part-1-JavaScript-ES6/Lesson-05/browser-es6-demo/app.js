import { sell, totalSales } from "../node-es6-demo/modules/products.js";

const item = {
  name: "Book",
  price: 10,
  quantity: 5,
};

sell(item);

// Dynamic import loads report.js only when this statement is reached.
const reportModule = await import("../node-es6-demo/modules/report.js");

document.querySelector("#result").textContent =
  `${reportModule.createReport()}. Total sales: ${totalSales}. ` +
  `Remaining quantity: ${item.quantity}.`;
