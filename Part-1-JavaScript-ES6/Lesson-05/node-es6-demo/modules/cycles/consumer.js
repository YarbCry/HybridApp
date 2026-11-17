import { getProducerCount } from "./producer.js";

let consumerCount = 0;

export function consumeIncrement() {
  consumerCount += 1;
}

export function getConsumerCount() {
  return consumerCount;
}

// Cyclic imports work, but shared logic is usually clearer in a third module.
export function readProducerCount() {
  return getProducerCount();
}
