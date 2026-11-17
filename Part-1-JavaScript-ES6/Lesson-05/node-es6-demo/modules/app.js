// Demonstrate default, named, aliased, and namespace imports.
import config, { connect, timeout } from "./config.js";
import * as productModule from "./products.js";
import { buy as buyProduct, sell as sellProduct } from "./products.js";
import ingredient from "./secret.js";

// These objects are passed to functions imported from products.js.
const buyer = {
  name: "Noy",
  total: 0,
};

const item = {
  name: "Book",
  price: 10,
  quantity: 5,
};

buyProduct(buyer, item);
sellProduct(item);

// The namespace object exposes the latest live binding values.
console.log(buyer.total);
console.log(item.quantity);
console.log(productModule.totalSales);
console.log(productModule.numberOfSales);
console.log(ingredient);
console.log(config.apiUrl, timeout, connect());

// Dynamic import returns a Promise and loads the module when it is needed.
const reportModule = await import("./report.js");
console.log(reportModule.createReport());
